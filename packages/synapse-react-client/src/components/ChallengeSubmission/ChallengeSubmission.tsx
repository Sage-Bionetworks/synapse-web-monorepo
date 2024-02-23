import React, { useEffect, useState } from 'react'
import {
  useGetCurrentUserProfile,
  useGetEntityACL,
  useGetEntityAlias,
  useGetEntityChallenge,
  useGetEntityPermissions,
  useGetUserSubmissionTeams,
  useUpdateEntityACL,
} from '../../synapse-queries'
import { useSynapseContext } from '../../utils'
import {
  ACCESS_TYPE,
  Challenge,
  Entity,
  EntityType,
  Project,
  PROJECT_CONCRETE_TYPE_VALUE,
  ResourceAccess,
  Team,
} from '@sage-bionetworks/synapse-types'
import { ErrorBanner, SynapseErrorBoundary } from '../error/ErrorBanner'
import { useGetTeam } from '../../synapse-queries/team/useTeam'
import { createEntity } from '../../synapse-client'
import SubmissionDirectoryList from './SubmissionDirectoryList'
import ChallengeSubmissionStepper from './ChallengeSubmissionStepper'

export type EntityItem = Entity & {
  repositoryName?: string
  versionNumber?: number
}

export type ChallengeSubmissionProps = {
  entityType: EntityType.DOCKER_REPO | EntityType.FILE
  pageSize: number
  projectId: string
}

export function ChallengeSubmission({
  entityType,
  projectId,
  pageSize = 10,
}: ChallengeSubmissionProps) {
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
  const [selectedEntity, setSelectedEntity] = useState<EntityItem>()
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false)

  const EMPTY_ID = ''

  const getProject = (c: Challenge, t: Team): Project => {
    const name = `Challenge Submission Project-${c.projectId}-${t.id}`
    const alias = name.replace(/\s+/g, '_').replace(/-+/g, '_').toLowerCase()
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
      throwOnError: true,
    })

  // Retrieve the challenge associated with the projectId passed through props
  const { data: challenge } = useGetEntityChallenge(projectId, {
    enabled: isLoggedIn && !!projectId,
    refetchInterval: Infinity,
    throwOnError: true,
  })

  // Determine whether or not the given user belongs to any submission teams
  const { data: userSubmissionTeams } = useGetUserSubmissionTeams(
    challenge?.id ?? EMPTY_ID,
    2,
  )

  useEffect(() => {
    if (isLoggedIn && !!challenge && userSubmissionTeams) {
      const isReg = userSubmissionTeams.results.length > 0
      if (!isReg) {
        setErrorMessage(
          'Error: Please join a Submission Team before continuing.',
        )
        return setLoading(false)
      }
      if (userSubmissionTeams.results.length > 1) {
        setErrorMessage(
          'Error: You are a member of more than one Submission Team. You may only belong to one Submission Team per Challenge.',
        )
        return setLoading(false)
      }
      setSubmissionTeamId(userSubmissionTeams.results[0])
    }
  }, [challenge, isLoggedIn, userSubmissionTeams])

  const { data: submissionTeam } = useGetTeam(submissionTeamId!, {
    enabled: !!submissionTeamId,
    refetchInterval: Infinity,
    throwOnError: true,
  })

  const { data: entityAlias } = useGetEntityAlias(
    newProject?.alias ?? EMPTY_ID,
    {
      enabled: newProject !== undefined && !!challenge && !!submissionTeam,
      throwOnError: true,
    },
  )
  useEffect(() => {
    if (entityAlias) {
      setProjectAliasFound(true)
      setChallengeProjectId(entityAlias.id)
    } else {
      setProjectAliasFound(false)
    }
  }, [entityAlias])

  /**
   * If the challenge project was just created, retrieve its ACL
   * and add the submission team to it
   */
  const { data: entityACL } = useGetEntityACL(challengeProjectId ?? EMPTY_ID, {
    enabled: !!challengeProjectId && isProjectNewlyCreated === true,
    refetchInterval: Infinity,
    throwOnError: true,
  })

  useEffect(() => {
    if (entityACL && isProjectNewlyCreated === true) {
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
        ...entityACL,
        resourceAccess: [...entityACL.resourceAccess, teamResourceAccess],
      })
      setIsProjectNewlyCreated(false)
    }
  }, [entityACL])

  const { data: entityPermissions } = useGetEntityPermissions(
    challengeProjectId!,
    {
      enabled: !!challengeProjectId,
      refetchInterval: Infinity,
      throwOnError: true,
    },
  )

  useEffect(() => {
    if (
      entityPermissions &&
      entityPermissions.canView &&
      entityPermissions.canAddChild
    ) {
      setCanSubmit(true)
    }
    setLoading(false)
  }, [entityPermissions])

  useEffect(() => {
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

  const itemSelectedHandler = (entity: EntityItem) => {
    setSelectedEntity(entity)
    setIsShowingModal(true)
  }

  const onModalClose = () => {
    setIsShowingModal(false)
  }

  return (
    <SynapseErrorBoundary>
      {loading && (
        <span data-testid="SpinnerButton-spinner" className="spinner" />
      )}
      {canSubmit && (
        <>
          <SubmissionDirectoryList
            entityType={entityType}
            pageSize={pageSize}
            challengeProjectId={challengeProjectId!}
            onItemSelected={itemSelectedHandler}
          />
          {userProfile && selectedEntity && (
            <ChallengeSubmissionStepper
              projectId={projectId}
              userId={userProfile?.ownerId}
              teamId={submissionTeamId!}
              entity={selectedEntity}
              entityType={entityType}
              isShowingModal={isShowingModal}
              onClose={onModalClose}
            />
          )}
        </>
      )}
      {errorMessage && <ErrorBanner error={errorMessage}></ErrorBanner>}
    </SynapseErrorBoundary>
  )
}

export default ChallengeSubmission
