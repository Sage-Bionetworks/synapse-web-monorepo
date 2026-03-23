import React, { useCallback, useRef } from 'react'
import SynapseIconWhite from '@/assets/icons/SynapseIconWhite'
import SynapseLogoName from '@/assets/icons/SynapseLogoName'
import {
  useGetCurrentUserBundle,
  useGetDownloadListStatistics,
  useSearchAccessSubmissionsInfinite,
} from '@/synapse-queries'
import {
  storeRedirectURLForOneSageLoginAndGotoURL,
  useApplicationSessionContext,
  useSynapseContext,
} from '@/utils'
import { extractSynIdFromCurrentUrl } from '@/utils/functions/synIdUtils'
import { useOneSageURL } from '@/utils/hooks/useOneSageURL'
import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  Fab,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import CloseIcon from '@mui/icons-material/Close'
import AddCommentIcon from '@mui/icons-material/AddComment'
import {
  Direction,
  SubmissionSortField,
  SubmissionState,
  AgentSession,
} from '@sage-bionetworks/synapse-types'
import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'
import { KeyboardEvent, ReactNode, useState } from 'react'
import { CreateProjectModal } from '../CreateProjectModal/CreateProjectModal'
import IconSvg, { IconName } from '../IconSvg/IconSvg'
import { PLANS_LINK } from '../SynapseHomepageV2/SynapseHomepageNavBar'
import UserCard from '../UserCard/UserCard'
import { DEFAULT_SEARCH_QUERY } from '@/utils/searchDefaults'
import { SynapseChat } from '@/components/SynapseChat/SynapseChat'

export type SynapseNavDrawerProps = {
  initIsOpen?: boolean
  gotoPlace: (href: string) => void
}

type MenuItemParams = {
  tooltip: string
  iconName?: IconName
  onClickOpenNavMenu?: NavItem
  onClickGoToPlace?: () => void
  additionalChildren?: ReactNode
  badgeContent?: string | number
  isCurrentlySelectedItem?: boolean
  handleDrawerClose: () => void
  handleDrawerOpen: (navItem?: NavItem) => void
}

export enum NavItem {
  PROJECTS,
  FAVORITES,
  TEAMS,
  CHALLENGES,
  DOWNLOADS,
  SEARCH,
  PROFILE,
  HELP,
}

export const getSearchToken = (queryTerm: string[]) => {
  const searchQuery = {
    ...DEFAULT_SEARCH_QUERY,
    queryTerm,
  }
  return encodeURIComponent(JSON.stringify(searchQuery))
}

const projectSearchJson = {
  // To support project search, we send this json object in the url.
  // We update the queryTerm array based on user input.
  ...DEFAULT_SEARCH_QUERY,
  booleanQuery: [
    {
      key: 'node_type',
      value: 'project',
    },
  ],
}
const getProjectSearchToken = (queryTerm: string[]) => {
  const searchQuery = {
    ...projectSearchJson,
    queryTerm,
  }
  return encodeURIComponent(JSON.stringify(searchQuery))
}

const NavDrawerListItem = (props: MenuItemParams): React.ReactNode => {
  const {
    tooltip,
    iconName,
    onClickOpenNavMenu,
    onClickGoToPlace,
    additionalChildren,
    badgeContent,
    isCurrentlySelectedItem = false,
    handleDrawerClose,
    handleDrawerOpen,
  } = props
  const handler =
    isCurrentlySelectedItem || onClickGoToPlace
      ? handleDrawerClose
      : () => {
          handleDrawerOpen(onClickOpenNavMenu)
        }
  const item = iconName ? (
    <>
      <IconSvg icon={iconName} /> {additionalChildren}{' '}
    </>
  ) : (
    additionalChildren
  )

  const listItem = (
    <Tooltip title={tooltip} placement="right">
      <ListItemButton
        key={iconName}
        onClick={handler}
        className="SRC-whiteText"
        selected={isCurrentlySelectedItem}
      >
        <Badge badgeContent={badgeContent} color="secondary">
          {item}
        </Badge>
      </ListItemButton>
    </Tooltip>
  )

  return onClickGoToPlace ? (
    <li>
      <a
        onClick={onClickGoToPlace}
        rel="noopener noreferrer"
        className="SRC-whiteText"
      >
        {listItem}
      </a>
    </li>
  ) : (
    <li>{listItem}</li>
  )
}

/**
 * Displays the Synapse navigational drawer on the left side of the page.  Has links to various areas if logged in.
 */
export function SynapseNavDrawer({
  initIsOpen = false,
  gotoPlace,
}: SynapseNavDrawerProps) {
  const [isOpen, setOpen] = useState(initIsOpen)
  const [selectedItem, setSelectedItem] = useState<NavItem>()
  const [projectSearchText, setProjectSearchText] = useState<string>('')
  const [docSiteSearchText, setDocSiteSearchText] = useState<string>('')
  const [isShowingCreateProjectModal, setIsShowingCreateProjectModal] =
    useState<boolean>(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatSession, setChatSession] = useState<AgentSession>()
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false)
  const [promptContext, setPromptContext] = useState<
    AgentPromptSessionContext[]
  >([])
  const [isShowingNewChatConfirmation, setIsShowingNewChatConfirmation] =
    useState(false)
  const [chatJobCount, setChatJobCount] = useState(0)
  const isChatOpenRef = useRef(isChatOpen)
  const lastUrlRef = useRef<string>('')

  // Helper function to extract and set context from current URL
  const updateContextFromUrl = useCallback(() => {
    const parsed = extractSynIdFromCurrentUrl()
    if (parsed) {
      const entityContext: AgentPromptSessionContext = {
        concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
        entityId: parsed.entityId,
        ...(parsed.versionNumber && {
          versionNumber: parsed.versionNumber,
        }),
      }
      setPromptContext([entityContext])
    } else {
      setPromptContext([])
    }
  }, [])

  // Update context when URL changes
  React.useEffect(() => {
    const updateContext = updateContextFromUrl

    // Run on mount and when chat opens
    updateContext()
    lastUrlRef.current = window.location.href

    // Only poll for URL changes when chat is open
    let pollInterval: NodeJS.Timeout | undefined
    if (isChatOpen) {
      pollInterval = setInterval(() => {
        const currentUrl = window.location.href
        if (currentUrl !== lastUrlRef.current) {
          lastUrlRef.current = currentUrl
          updateContext()
        }
      }, 100) // Check every 100ms
    }

    // Also listen for browser navigation events (back/forward buttons)
    const handlePopState = () => {
      lastUrlRef.current = window.location.href
      updateContext()
    }
    window.addEventListener('popstate', handlePopState)

    return () => {
      if (pollInterval) {
        clearInterval(pollInterval)
      }
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isChatOpen, updateContextFromUrl])

  // Keep ref in sync with state
  React.useEffect(() => {
    isChatOpenRef.current = isChatOpen
  }, [isChatOpen])

  const handleNewMessage = useCallback(() => {
    if (!isChatOpenRef.current) {
      setHasUnreadMessage(true)
    }
  }, [])

  const handleChatStateChange = useCallback((chatJobIds: string[]) => {
    setChatJobCount(chatJobIds.length)
  }, [])

  const startNewChat = useCallback(() => {
    setChatSession(undefined)
    updateContextFromUrl()
    setHasUnreadMessage(false)
    setChatJobCount(0)
    setIsShowingNewChatConfirmation(false)
  }, [updateContextFromUrl])

  const handleNewChat = useCallback(() => {
    if (chatJobCount === 0) {
      startNewChat()
      return
    }

    setIsShowingNewChatConfirmation(true)
  }, [chatJobCount, startNewChat])

  // Clear unread indicator whenever chat opens
  React.useEffect(() => {
    if (isChatOpen) {
      setHasUnreadMessage(false)
    }
  }, [isChatOpen])

  const { clearSession } = useApplicationSessionContext()

  const { isAuthenticated } = useSynapseContext()

  const { data: currentUserBundle } = useGetCurrentUserBundle()

  // If the user is logged out, the UserBundle provides an "anonymous" user profile, so override that case with undefined
  const currentUserProfile =
    isAuthenticated && currentUserBundle
      ? currentUserBundle.userProfile
      : undefined

  const { data: downloadListStatistics } = useGetDownloadListStatistics({
    enabled: isAuthenticated,
  })

  const numberOfFilesInDownloadList = downloadListStatistics?.totalNumberOfFiles

  const { data: openSubmissionData } = useSearchAccessSubmissionsInfinite(
    {
      submissionState: SubmissionState.SUBMITTED,
      sort: [
        {
          field: SubmissionSortField.CREATED_ON,
          direction: Direction.DESC,
        },
      ],
    },
    {
      enabled: currentUserBundle?.isARReviewer,
    },
  )

  let countOfOpenSubmissionsForReview: number | string =
    openSubmissionData?.pages[0].results.length ?? 0
  if (openSubmissionData?.pages[0].nextPageToken) {
    countOfOpenSubmissionsForReview = `${countOfOpenSubmissionsForReview}+`
  }

  const handleDrawerOpen = (navItem?: NavItem) => {
    setOpen(true)
    setSelectedItem(navItem)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    setSelectedItem(undefined)
  }

  const onProjectSearch = (searchTerm: string) => {
    gotoPlace(
      `/SearchV2:default?query=${getProjectSearchToken(
        searchTerm.split(/[ ,]+/),
      )}`,
    )
  }

  const oneSageURL = useOneSageURL()
  const accountSettingsURL = useOneSageURL('/authenticated/myaccount')

  // Keyboard shortcut: Cmd/Ctrl+K to toggle chat
  React.useEffect(() => {
    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsChatOpen(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <>
      <div className="SynapseNavDrawer">
        <Drawer
          variant="permanent"
          className={`SynapseNavDrawerMenu ${isOpen ? 'tempDrawerOpen' : ''}`}
        >
          <div onClick={handleDrawerClose}>
            <a
              className="synapseIcon"
              rel="noopener noreferrer"
              onClick={() => gotoPlace('/Home:x')}
              aria-label="Synapse Home"
            >
              <SynapseIconWhite />
            </a>
          </div>
          <List>
            {isAuthenticated && currentUserProfile && (
              <>
                <NavDrawerListItem
                  tooltip="Projects"
                  iconName="dashboard"
                  onClickOpenNavMenu={NavItem.PROJECTS}
                  isCurrentlySelectedItem={selectedItem == NavItem.PROJECTS}
                  handleDrawerClose={handleDrawerClose}
                  handleDrawerOpen={handleDrawerOpen}
                />
                <NavDrawerListItem
                  tooltip="Favorites"
                  iconName="favTwoTone"
                  onClickGoToPlace={() =>
                    gotoPlace(
                      `/Profile:${currentUserProfile.ownerId}/favorites`,
                    )
                  }
                  handleDrawerClose={handleDrawerClose}
                  handleDrawerOpen={handleDrawerOpen}
                />
                <NavDrawerListItem
                  tooltip="Teams"
                  iconName="peopleTwoTone"
                  onClickGoToPlace={() =>
                    gotoPlace(`/Profile:${currentUserProfile.ownerId}/teams`)
                  }
                  handleDrawerClose={handleDrawerClose}
                  handleDrawerOpen={handleDrawerOpen}
                />
                <NavDrawerListItem
                  tooltip="Challenges"
                  iconName="challengesTwoTone"
                  onClickGoToPlace={() =>
                    gotoPlace(
                      `/Profile:${currentUserProfile.ownerId}/challenges`,
                    )
                  }
                  handleDrawerClose={handleDrawerClose}
                  handleDrawerOpen={handleDrawerOpen}
                />
                <NavDrawerListItem
                  tooltip="Download Cart"
                  iconName="download"
                  onClickGoToPlace={() => gotoPlace('/DownloadCart:0')}
                  badgeContent={numberOfFilesInDownloadList}
                  handleDrawerClose={handleDrawerClose}
                  handleDrawerOpen={handleDrawerOpen}
                />
                <NavDrawerListItem
                  tooltip="Trash Can"
                  iconName="delete"
                  onClickGoToPlace={() => gotoPlace('/Trash:0')}
                  handleDrawerClose={handleDrawerClose}
                  handleDrawerOpen={handleDrawerOpen}
                />
                {currentUserBundle?.isARReviewer && (
                  <NavDrawerListItem
                    tooltip="Data Access Management"
                    iconName="accessManagement"
                    onClickGoToPlace={() =>
                      gotoPlace('/DataAccessManagement:default/Submissions')
                    }
                    badgeContent={countOfOpenSubmissionsForReview}
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerOpen={handleDrawerOpen}
                  />
                )}
              </>
            )}
            <NavDrawerListItem
              tooltip="Search"
              iconName="search"
              onClickGoToPlace={() => gotoPlace('/SearchV2:default')}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
            />
          </List>
          <div className="filler" />
          <List>
            {isAuthenticated && currentUserProfile && (
              <NavDrawerListItem
                tooltip="Your Account"
                onClickOpenNavMenu={NavItem.PROFILE}
                additionalChildren={
                  <UserCard
                    userProfile={currentUserProfile}
                    size="AVATAR"
                    avatarSize="SMALL"
                  />
                }
                isCurrentlySelectedItem={selectedItem == NavItem.PROFILE}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
            )}
            {!isAuthenticated && (
              <NavDrawerListItem
                tooltip="Sign in"
                iconName="login"
                onClickGoToPlace={() =>
                  storeRedirectURLForOneSageLoginAndGotoURL(
                    oneSageURL.toString(),
                  )
                }
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />
            )}
            <NavDrawerListItem
              tooltip="Help"
              iconName="helpOutlined"
              onClickOpenNavMenu={NavItem.HELP}
              isCurrentlySelectedItem={selectedItem == NavItem.HELP}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
            />
          </List>
        </Drawer>
        <Drawer
          variant="temporary"
          open={isOpen}
          className={`SynapseNavContentDrawer`}
          onClose={handleDrawerClose}
        >
          <div className="synapseLogoNameContainer">
            <SynapseLogoName />
          </div>
          <div className="navContentContainer">
            {selectedItem == NavItem.PROJECTS && (
              <>
                <div className="header projectHeader">Projects</div>
                <Tooltip title="Create a New Project" placement="right">
                  <a
                    className="createProjectLink"
                    onClick={() => {
                      setIsShowingCreateProjectModal(true)
                      handleDrawerClose()
                    }}
                  >
                    <IconSvg icon="addCircleOutline" />
                  </a>
                </Tooltip>
                <TextField
                  type="search"
                  placeholder="Search All Projects"
                  value={projectSearchText}
                  onChange={event => {
                    setProjectSearchText(event.target.value)
                  }}
                  onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === 'Enter') {
                      if ((event.target as HTMLInputElement).value !== '') {
                        setProjectSearchText('')
                        handleDrawerClose()
                        onProjectSearch(
                          (event.target as HTMLInputElement).value,
                        )
                      }
                    }
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconSvg icon="searchOutlined" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <div className="linkList" onClick={handleDrawerClose}>
                  <a
                    className="SRC-whiteText"
                    onClick={() =>
                      gotoPlace(
                        `/Profile:${currentUserProfile?.ownerId}/projects/all`,
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    All
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() =>
                      gotoPlace(
                        `/Profile:${currentUserProfile?.ownerId}/projects/created_by_me`,
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    Created By Me
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() =>
                      gotoPlace(
                        `/Profile:${currentUserProfile?.ownerId}/projects/favorites`,
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    Favorite Projects
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() =>
                      gotoPlace(
                        `/Profile:${currentUserProfile?.ownerId}/projects/shared_directly_with_me`,
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    Shared With Me
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() =>
                      gotoPlace(
                        `/Profile:${currentUserProfile?.ownerId}/projects/all_my_team_projects`,
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    Team Projects
                  </a>
                </div>
              </>
            )}
            {selectedItem == NavItem.PROFILE && (
              <>
                <div className="header">
                  Welcome Back,
                  <br />
                  {currentUserProfile?.userName}!
                </div>
                <div className="linkList" onClick={handleDrawerClose}>
                  <a
                    className="SRC-whiteText"
                    onClick={() =>
                      gotoPlace(
                        `/Profile:${currentUserProfile?.ownerId}/profile`,
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                  <a
                    className="SRC-whiteText"
                    href={accountSettingsURL.toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Account Settings
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() => gotoPlace(`/RequestHistory:default`)}
                    rel="noopener noreferrer"
                  >
                    Access Requests
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() => gotoPlace(`/Following:0`)}
                    rel="noopener noreferrer"
                  >
                    Following
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() => {
                      void clearSession()
                    }}
                    rel="noopener noreferrer"
                  >
                    Sign Out
                  </a>
                </div>
              </>
            )}
            {selectedItem == NavItem.HELP && (
              <>
                <div className="header">Help</div>
                <TextField
                  type="search"
                  placeholder="Search Documentation"
                  value={docSiteSearchText}
                  onChange={event => {
                    setDocSiteSearchText(event.target.value)
                  }}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      if ((event.target as HTMLInputElement).value !== '') {
                        window.open(
                          `https://help.synapse.org/search.html?max=10&s=docs&q=${encodeURI(
                            (event.target as HTMLInputElement).value,
                          )}`,
                        )
                        setDocSiteSearchText('')
                        handleDrawerClose()
                      }
                    }
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconSvg icon="searchOutlined" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <div className="linkList" onClick={handleDrawerClose}>
                  <a
                    className="SRC-whiteText"
                    href="https://help.synapse.org/docs/Getting-Started.2055471150.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Getting Started
                  </a>
                  <a
                    className="SRC-whiteText"
                    onClick={() => gotoPlace(PLANS_LINK)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Plans
                  </a>
                  <a
                    className="SRC-whiteText"
                    href="https://help.synapse.org/docs/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Synapse Web Documentation
                  </a>
                  <a
                    className="SRC-whiteText"
                    href="https://python-docs.synapse.org/en/stable/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Python Client Documentation
                  </a>
                  <a
                    className="SRC-whiteText"
                    href="https://r-docs.synapse.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    R Client Documentation
                  </a>
                  <a
                    className="SRC-whiteText"
                    href="https://blog.synapse.org/"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                  <a
                    className="SRC-whiteText"
                    href="https://sagebionetworks.jira.com/servicedesk/customer/portals/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </div>
              </>
            )}
          </div>
        </Drawer>
      </div>
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1200,
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Badge variant="dot" color="error" invisible={!hasUnreadMessage}>
          <Fab
            color="primary"
            aria-label="Open chat assistant"
            onClick={() => setIsChatOpen(true)}
          >
            <ChatIcon />
          </Fab>
        </Badge>
      </Box>
      <Drawer
        anchor="right"
        open={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        variant="persistent"
        className="SynapseChatPanel"
        SlideProps={{
          unmountOnExit: false,
        }}
        ModalProps={{
          BackdropProps: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
          },
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: {
              xs: '100%',
              sm: '400px',
              md: '450px',
            },
            maxWidth: '100vw',
            height: '100vh',
            boxShadow: '-4px 0 8px rgba(0,0,0,0.1)',
            zIndex: 1300,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'grey.300',
            backgroundColor: 'white',
          }}
        >
          <Typography variant="h6">Synapse Assistant</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Start new chat" placement="bottom">
              <IconButton
                onClick={handleNewChat}
                aria-label="Start new chat"
                disabled={!chatSession}
              >
                <AddCommentIcon />
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={() => setIsChatOpen(false)}
              aria-label="Close chat"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: 'calc(100vh - 73px)',
            overflow: 'hidden',
            padding: '16px',
          }}
        >
          <SynapseChat
            chatbotName="Synapse Assistant"
            hideTitle={true}
            externalSession={chatSession}
            setExternalSession={setChatSession}
            showAccessLevelMenu={true}
            textboxPositionOffset="0px"
            onNewMessage={handleNewMessage}
            onChatStateChange={handleChatStateChange}
            promptContext={promptContext}
            onPromptContextChange={setPromptContext}
            isContextEditable={true}
          />
        </Box>
      </Drawer>
      <Dialog
        open={isShowingNewChatConfirmation}
        onClose={() => setIsShowingNewChatConfirmation(false)}
      >
        <DialogTitle>Start New Chat?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Starting a new chat will clear your current conversation. This
            action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsShowingNewChatConfirmation(false)}>
            Cancel
          </Button>
          <Button onClick={startNewChat} variant="contained" autoFocus>
            Start New Chat
          </Button>
        </DialogActions>
      </Dialog>
      <CreateProjectModal
        onClose={() => setIsShowingCreateProjectModal(false)}
        isShowingModal={isShowingCreateProjectModal}
      />
    </>
  )
}

export default SynapseNavDrawer
