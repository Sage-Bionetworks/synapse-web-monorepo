import {
  CreateWikiPageInput,
  useCreateWikiPage,
  useGetRootWikiPageKey,
  useGetWikiPage,
} from '@/synapse-queries'
import { Alert, Box, Button, ButtonProps } from '@mui/material'
import { ObjectType, WikiPageKey } from '@sage-bionetworks/synapse-types'
import { defaults } from 'lodash-es'
import { useMemo, useState } from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import MarkdownSynapse, {
  MarkdownSynapseProps,
} from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import WikiMarkdownEditor from '../WikiMarkdownEditor/WikiMarkdownEditor'

export const ERROR_LOADING_WIKI_FAILED = 'Failed to load the wiki page: '
export const DEFAULT_BUTTON_TEXT = 'Edit Wiki Page'
const DEFAULT_BUTTON_PROPS: Omit<ButtonProps, 'onClick'> = {
  children: DEFAULT_BUTTON_TEXT,
  color: 'primary',
  variant: 'contained',
}

export type WikiMarkdownEditorButtonProps = {
  ownerObjectType: ObjectType
  ownerObjectId: string
  // if wikiPageId is undefined, will get (or create) the root WikiPage for this ownerObject
  // otherwise, will get the WikiPage with the specified wikiPageId
  wikiPageId?: string
  buttonProps?: Omit<ButtonProps, 'onClick' | 'disabled'>
  displayWikiMarkdown?: boolean
}

export function WikiMarkdownEditorButton(props: WikiMarkdownEditorButtonProps) {
  const {
    ownerObjectType,
    ownerObjectId,
    wikiPageId: initialWikiPageId,
    displayWikiMarkdown = false,
  } = props

  const buttonProps: Omit<ButtonProps, 'onClick' | 'disabled'> = defaults(
    {},
    props.buttonProps,
    DEFAULT_BUTTON_PROPS,
  )

  const [open, setOpen] = useState<boolean>(false)

  const {
    data: rootWikiPageKey,
    isLoading: isLoadingRootWikiPageKey,
    error: errorLoadingRootWikiPageKey,
  } = useGetRootWikiPageKey(ownerObjectType, ownerObjectId, {
    enabled: initialWikiPageId === undefined,
  })

  const {
    mutate: createWikiPage,
    isPending: isCreatingWikiPage,
    error: errorCreatingWikiPage,
  } = useCreateWikiPage({
    onSuccess: () => setOpen(true),
  })

  const wikiPageKey = useMemo(() => {
    const wikiPageId = initialWikiPageId || rootWikiPageKey?.wikiPageId || ''
    const wikiPageKey: WikiPageKey = {
      ownerObjectType,
      ownerObjectId,
      wikiPageId: wikiPageId,
    }
    return wikiPageKey
  }, [initialWikiPageId, rootWikiPageKey, ownerObjectId, ownerObjectType])

  const {
    data: wikiPage,
    isLoading: isLoadingWikiPage,
    error: errorLoadingWikiPage,
  } = useGetWikiPage(wikiPageKey, {
    enabled: wikiPageKey.wikiPageId !== '',
    // Set staleTime to infinity to prevent re-fetching while editing
    staleTime: Infinity,
  })

  const error = useMemo(() => {
    if (errorLoadingRootWikiPageKey) {
      return ERROR_LOADING_WIKI_FAILED + errorLoadingRootWikiPageKey.reason
    }
    if (errorLoadingWikiPage) {
      return ERROR_LOADING_WIKI_FAILED + errorLoadingWikiPage.reason
    }
    if (errorCreatingWikiPage) {
      return errorCreatingWikiPage.reason
    }
    return null
  }, [errorLoadingRootWikiPageKey, errorLoadingWikiPage, errorCreatingWikiPage])

  const handleClick = () => {
    if (wikiPage) {
      setOpen(true)
    } else if (rootWikiPageKey === null) {
      // root WikiPageKey was not found,
      // then create a root WikiPage for this ownerObject
      const rootWikiPage: CreateWikiPageInput['wikiPage'] = {
        parentWikiId: undefined,
        title: '',
        markdown: '',
        attachmentFileHandleIds: [],
      }
      const input: CreateWikiPageInput = {
        ownerObjectId,
        ownerObjectType,
        wikiPage: rootWikiPage,
      }
      createWikiPage(input)
    } else {
      // Should only reach this block if there was:
      //  - a non-404 error fetching the root WikiPageKey
      //  - an error fetching a specific wikiPage
      // Otherwise the button should be disabled.
      console.warn(
        'There was an error fetching the root WikiPageKey or WikiPage - address that error first.',
      )
    }
  }

  /* TODO - pass ownerId, objectType, wikiId directly to MarkdownSynapse after 
  MarkdownSynapse is updated to fetch root WikiPages for ACCESS_REQUIREMENT object types.
  See https://sagebionetworks.jira.com/browse/SWC-6791. */
  const markdownSynapseProps = useMemo(() => {
    const markdownSynapseProps: MarkdownSynapseProps = {
      showPlaceholderIfNoWikiContent: true,
    }
    if (wikiPage) {
      return {
        ...markdownSynapseProps,
        ownerId: ownerObjectId,
        objectType: ownerObjectType,
        wikiId: wikiPage.id,
      }
    } else {
      // use a placeholder value for markdown so that MarkdownSynapse
      // displays no content placeholder for owners without root wiki pages
      return { ...markdownSynapseProps, markdown: '' }
    }
  }, [ownerObjectId, ownerObjectType, wikiPage])

  return (
    <>
      {displayWikiMarkdown && (
        <Box
          sx={{
            mb: 1,
          }}
        >
          {isLoadingWikiPage || isLoadingRootWikiPageKey ? (
            <SynapseSpinner />
          ) : (
            // TODO - remove key once MarkdownSynapse uses tanstack-query
            <MarkdownSynapse
              key={wikiPage?.markdown}
              {...markdownSynapseProps}
            />
          )}
        </Box>
      )}
      <Button
        onClick={handleClick}
        disabled={
          isLoadingWikiPage || isLoadingRootWikiPageKey || isCreatingWikiPage
        }
        {...buttonProps}
      />
      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}
      {wikiPage && (
        <WikiMarkdownEditor
          // Specify a key so that uncommitted changes in WikiMarkdownEditor
          // are not displayed when editor is re-opened
          key={open.toString()}
          open={open}
          ownerObjectType={ownerObjectType}
          ownerObjectId={ownerObjectId}
          wikiPage={wikiPage}
          onSave={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default WikiMarkdownEditorButton
