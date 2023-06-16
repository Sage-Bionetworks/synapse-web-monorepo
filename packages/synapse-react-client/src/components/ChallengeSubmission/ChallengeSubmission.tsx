import React, { useEffect, useState } from 'react'
import {
  useGetCurrentUserProfile,
  useGetEntityACL,
  useGetEntityAlias,
  useGetEntityChallenge,
  useGetEntityPermissions,
  useGetUserSubmissionTeamsInfinite,
  useUpdateEntityACL,
} from '../../synapse-queries'
import { useSynapseContext } from '../../utils'
import {
  ACCESS_TYPE,
  AccessControlList,
  Challenge,
  DockerRepository,
  EntityId,
  EvaluationSubmission,
  PaginatedIds,
  Project,
  ResourceAccess,
  Team,
} from '@sage-bionetworks/synapse-types'
import { ErrorBanner, SynapseErrorBoundary } from '../error/ErrorBanner'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useGetTeam } from '../../synapse-queries/team/useTeam'
import SynapseClient, { createEntity } from '../../synapse-client'
import { PROJECT_CONCRETE_TYPE_VALUE } from '@sage-bionetworks/synapse-types'
import SubmissionDirectoryList from './SubmissionDirectoryList'
import AddExternalRepo from './AddExternalRepo'
import ConfirmationDialog from '../ConfirmationDialog'
import { DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE } from '@sage-bionetworks/synapse-types'
import ChallengeSubmit from './ChallengeSubmit'
import { DockerCommit } from '@sage-bionetworks/synapse-types'
import { PaginatedResults } from '@sage-bionetworks/synapse-types'

type ChallengeSubmissionProps = {
  projectId: string
}

function ChallengeSubmission({ projectId }: ChallengeSubmissionProps) {
  const { accessToken } = useSynapseContext()
  const isLoggedIn = Boolean(accessToken)

  const [loading, setLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [submissionTeamId, setSubmissionTeamId] = useState<string>()
  const [challengeProjectId, setChallengeProjectId] = useState<string>()
  const [newProject, setNewProject] = useState<Project>()
  const [isProjectNewlyCreated, setIsProjectNewlyCreated] = useState<boolean>()
  const [projectAliasFound, setProjectAliasFound] = useState<boolean>()
  const { mutate: updateACL } = useUpdateEntityACL()
  const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const [showAddRepo, setShowAddRepo] = useState<boolean>(false)
  const [showSubmitDialog, setShowSubmitDialog] = useState<boolean>(false)
  const [repoName, setRepoName] = useState<string>('')
  const [repoError, setRepoError] = useState<string>()
  const [needsRefetch, setNeedsRefetch] = useState<boolean>(false)
  const [selectedRepo, setSelectedRepo] = useState<DockerRepository>()

  const [submissionName, setSubmissionName] = useState<string>('')
  const [selectedEval, setSelectedEval] = useState<string | undefined>()
  const [submissionError, setSubmissionError] = useState<string | undefined>()

  const EMPTY_ID = ''

  const getProject = (c: Challenge, t: Team): Project => {
    const name = `Challenge Submission Project-${c.projectId}-${t.id}`
    const alias = name.replace(/\s+/g, '_').replace(/\-+/g, '_').toLowerCase()
    return {
      name,
      alias,
      concreteType: PROJECT_CONCRETE_TYPE_VALUE,
      description: `This Project was automatically created for Team "${t.name}" for Challenge "${c.id}"`,
    }
  }

  // Use the existing accessToken if present to get the current user's profile / userId
  const { data: userProfile, isLoading: isProfileLoading } =
    useGetCurrentUserProfile({
      enabled: isLoggedIn,
      onError: () => {
        setLoading(false)
        setErrorMessage(`Error: Could not retrieve user profile`)
      },
    })

  // Retrieve the challenge associated with the projectId passed through props
  const { data: challenge } = useGetEntityChallenge(projectId, {
    enabled: isLoggedIn && !!projectId,
    refetchInterval: Infinity,
    useErrorBoundary: true,
  })

  // Determine whether or not the given user belongs to any submission teams
  useGetUserSubmissionTeamsInfinite(challenge?.id ?? EMPTY_ID, 2, {
    enabled: isLoggedIn && !!challenge,
    onSettled: (
      data: PaginatedIds | undefined,
      error: SynapseClientError | null,
    ) => {
      console.log('useGetUserSubmissionTeams', { data }, { error })
      if (data) {
        const isReg = data.results.length > 0
        if (!isReg) {
          setErrorMessage(
            'Error: Please join a Submission Team before continuing.',
          )
          return
        }
        if (data.results.length > 1) {
          setErrorMessage(
            'Error: You are a member of more than one Submission Team. You may only belong to one Submission Team per Challenge.',
          )
          return
        }
        console.log({ setSubmissionTeamId: data.results[0] })
        setSubmissionTeamId(data.results[0])
      }
      if (error) {
        setErrorMessage(
          `Error: Could not determine if you are already registered for this Challenge.`,
        )
      }
    },
  })

  const { data: submissionTeam } = useGetTeam(submissionTeamId!, {
    enabled: !!submissionTeamId,
    refetchInterval: Infinity,
    useErrorBoundary: true,
  })

  useGetEntityAlias(newProject?.alias ?? EMPTY_ID, {
    enabled: newProject !== undefined && !!challenge && !!submissionTeam,
    onSettled: (
      data: EntityId | null | undefined,
      error: SynapseClientError | null,
    ) => {
      console.log({ newProject })
      if (data) {
        setProjectAliasFound(true)
        setChallengeProjectId(data.id)
      }
      if (error) {
        setProjectAliasFound(false)
      }
      console.log('useGetEntityAlias', { data }, { error })
    },
  })

  /**
   * If the challenge project was just created, retrieve its ACL
   * and add the submission team to it
   */
  useGetEntityACL(challengeProjectId ?? EMPTY_ID, {
    enabled: !!challengeProjectId && isProjectNewlyCreated === true,
    refetchInterval: Infinity,
    useErrorBoundary: true,
    onSettled: (
      data: AccessControlList | undefined,
      error: SynapseClientError | null,
    ) => {
      console.log('useGetEntityACL', { data }, { error })
      if (data) {
        // Give submission team admin access to challenge project
        const teamResourceAccess: ResourceAccess = {
          principalId: Number(submissionTeam!.id),
          accessType: [
            ACCESS_TYPE.CHANGE_PERMISSIONS,
            ACCESS_TYPE.CHANGE_SETTINGS,
            ACCESS_TYPE.CREATE,
            ACCESS_TYPE.DELETE,
            ACCESS_TYPE.DOWNLOAD,
            ACCESS_TYPE.MODERATE,
            ACCESS_TYPE.READ,
            ACCESS_TYPE.UPDATE,
          ],
        }
        updateACL({
          ...data,
          resourceAccess: [...data.resourceAccess, teamResourceAccess],
        })
        setIsProjectNewlyCreated(false)
      }
      if (error) {
        setErrorMessage(`Error: Could not retrieve project ACL.`)
      }
    },
  })

  useGetEntityPermissions(challengeProjectId!, {
    enabled: !!challengeProjectId,
    refetchInterval: Infinity,
    onSettled: (data, error) => {
      if (data && data.canView && data.canAddChild) {
        setCanSubmit(true)
      }
      if (error) {
        setErrorMessage(
          'You do not have permission to submit for this challenge team.',
        )
      }
      setLoading(false)
    },
  })

  useEffect(() => {
    console.log({ isLoggedIn, userProfile, isProfileLoading })
    if (!isLoggedIn && (!!userProfile || !isProfileLoading)) {
      setLoading(false)
      setErrorMessage('Please login to continue.')
    }
  }, [isLoggedIn, userProfile, isProfileLoading])

  useEffect(() => {
    if (accessToken && submissionTeam && challenge && !newProject) {
      const project = getProject(challenge, submissionTeam)
      setNewProject(project)
    }
  }, [accessToken, submissionTeam, challenge, newProject])

  useEffect(() => {
    async function createChallengeProject() {
      const project: Project = getProject(challenge!, submissionTeam!)
      const challengeProject = await createEntity(project, accessToken)
      if (challengeProject && challengeProject.id) {
        setChallengeProjectId(challengeProject.id)
        setIsProjectNewlyCreated(true)
      }
    }
    if (
      accessToken &&
      submissionTeam &&
      challenge &&
      newProject &&
      projectAliasFound === false
    ) {
      createChallengeProject()
    }
  }, [accessToken, submissionTeam, challenge, newProject, projectAliasFound])

  const handleAddRepo = async () => {
    setNeedsRefetch(false)
    setRepoError(undefined)

    async function createRepo() {
      setNeedsRefetch(false)
      // When creating a Docker Repo Entity we omit name
      const repo: Omit<DockerRepository, 'name'> = {
        parentId: challengeProjectId,
        repositoryName: repoName,
        isManaged: false,
        concreteType: DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE,
      }
      try {
        /**
         * createEntity expects a type that extends Entity
         * "name" is a required property of Entity
         * but when creating a repo, we want the backend to provide the name
         * so it cannot be set on the request
         */
        // @ts-ignore
        const createdRepo = await createEntity(repo, accessToken)
        console.log({ createdRepo })
        setNeedsRefetch(true)
        closeAddRepoDialog()
      } catch (error) {
        console.warn(error)
        const msg: string = error.message ? error.message : 'An error occurred.'
        setRepoError(msg)
      }
    }
    await createRepo()
  }

  const onRepoNameChange = (value: string) => {
    setRepoName(value)
  }

  const closeAddRepoDialog = () => {
    setShowAddRepo(false)
    setRepoName('')
    setRepoError(undefined)
  }

  const onRepoSelected = (selectedRepo: DockerRepository) => {
    console.log({ selectedRepo })
    setSelectedRepo(selectedRepo)
    setShowSubmitDialog(true)
  }

  const closeSubmitDialog = () => {
    setShowSubmitDialog(false)
  }

  const submitRepoForEvaluation = async () => {
    if (!selectedRepo?.id) return
    let commits
    try {
      commits = await SynapseClient.getDockerTag(
        selectedRepo.id,
        accessToken,
        0,
        1,
      )
    } catch (e) {
      return setSubmissionError(e.message)
    }
    if (commits.totalNumberOfResults === 0) {
      return setSubmissionError(
        'No commits have been made to this repository. Please select a repository with at least one commit.',
      )
    }
    const latestCommit = commits[0]
    const submission: EvaluationSubmission = {
      userId: userProfile!.ownerId,
      evaluationId: selectedEval!,
      entityId: selectedRepo!.id!,
      dockerRepositoryName: selectedRepo?.name,
      dockerDigest: latestCommit.digest,
      versionNumber: 1,
      teamId: submissionTeamId,
    }
    SynapseClient.submitToEvaluation(
      submission,
      selectedRepo?.etag!,
      accessToken,
    )
  }

  return (
    <SynapseErrorBoundary>
      {loading && (
        <span data-testid="SpinnerButton-spinner" className="spinner" />
      )}
      {canSubmit && (
        <>
          <SubmissionDirectoryList
            needsRefetch={needsRefetch}
            challengeProjectId={challengeProjectId}
            onAddRepo={() => setShowAddRepo(true)}
            onRepoSelected={onRepoSelected}
          />

          <ConfirmationDialog
            open={showAddRepo}
            title="Add External Repository"
            onCancel={closeAddRepoDialog}
            onConfirm={() => {
              handleAddRepo()
            }}
            content={
              <AddExternalRepo
                repoName={repoName}
                onRepoNameChange={onRepoNameChange}
                errorMessage={repoError}
              />
            }
          />
          {selectedRepo && (
            <ConfirmationDialog
              open={showSubmitDialog}
              title="Submit to Challenge"
              onCancel={closeSubmitDialog}
              onConfirm={() => {
                submitRepoForEvaluation()
              }}
              content={
                <ChallengeSubmit
                  projectId={projectId}
                  submissonName={submissionName}
                  selectedEvaluation={selectedEval}
                  onSubmissionNameChange={(value: string) =>
                    setSubmissionName(value)
                  }
                  onEvaluationChange={(value: string) => setSelectedEval(value)}
                  submissionError={submissionError}
                />
              }
            />
          )}
        </>
      )}
      {errorMessage && <ErrorBanner error={errorMessage}></ErrorBanner>}
    </SynapseErrorBoundary>
  )
}

export default ChallengeSubmission
