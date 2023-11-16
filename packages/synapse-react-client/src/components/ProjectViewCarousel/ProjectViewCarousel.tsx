import SynapseClient from '../../synapse-client'
import { SynapseConstants, useSynapseContext } from '../../utils'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import { ProjectViewCard } from './ProjectViewCard'
import { ErrorBanner } from '../error/ErrorBanner'
import { Box } from '@mui/system'

export type ProjectViewCarouselProps = {
  entityId: string
}

type ProjectData = {
  projectName: string
  projectDescription: string
  entityId: string
  imageFileName?: string
  imageUrl?: string
}

enum ExpectedColumns {
  ID = 'id',
  PROJECT_DISPLAY_NAME = 'projectDisplayName',
  NAME = 'name', // fallback
  PROJECT_DESCRIPTION = 'projectDescription',
  PROJECT_IMAGE = 'projectImageFileName',
}

/**
 * Display a carousel of projects using a Project View. Driven by the following annotations/column names:
 * projectDisplayName, projectDescription, projectImageFileName. The projectImageFileName must
 * be an attachment on the project's root wiki page.
 */
export const ProjectViewCarousel: React.FunctionComponent<
  ProjectViewCarouselProps
> = ({ entityId }) => {
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select * from ${entityId}`,
    },
  }

  const { accessToken } = useSynapseContext()
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [error, setError] = useState<Error>()
  const {
    data: queryResultBundle,
    error: queryError,
    isLoading,
  } = useGetQueryResultBundle(queryBundleRequest)

  useEffect(() => {
    let isMounted = true
    const getData = async () => {
      try {
        const entityIdIndex = getFieldIndex(
          ExpectedColumns.ID,
          queryResultBundle,
        )
        const displayNameColumnIndex = getFieldIndex(
          ExpectedColumns.PROJECT_DISPLAY_NAME,
          queryResultBundle,
        )
        const descriptionColumnIndex = getFieldIndex(
          ExpectedColumns.PROJECT_DESCRIPTION,
          queryResultBundle,
        )
        const nameColumnIndex = getFieldIndex(
          ExpectedColumns.NAME,
          queryResultBundle,
        )
        const imageColumnIndex = getFieldIndex(
          ExpectedColumns.PROJECT_IMAGE,
          queryResultBundle,
        )

        const projects: ProjectData[] =
          queryResultBundle?.queryResult!.queryResults.rows.map(row => {
            const values = row.values as string[]
            if (values.some(value => value === null)) {
              // We cast values above assuming there are no null values, emit a warning just in case.
              console.warn('Row has null value(s) when no nulls expected')
            }
            return {
              projectName:
                values[displayNameColumnIndex] ?? values[nameColumnIndex],
              projectDescription: values[descriptionColumnIndex],
              imageFileName: values[imageColumnIndex],
              entityId: values[entityIdIndex],
            }
          }) ?? []
        if (queryError) {
          throw queryError
        }
        if (projects.length === 0) {
          // wait for data to load
          return
        }

        for (const project of projects) {
          if (isMounted) {
            try {
              if (project.imageFileName) {
                const wikiPageKey = await SynapseClient.getWikiPageKeyForEntity(
                  accessToken,
                  project.entityId,
                )

                project.imageUrl =
                  await SynapseClient.getPresignedUrlForWikiAttachment(
                    accessToken,
                    project.entityId,
                    wikiPageKey.wikiPageId,
                    project.imageFileName,
                  )
              }
            } catch (err) {
              // Don't break the whole component just because we can't find an image.
              // The user will just see the placeholder.
              console.error(err)
            }
          }
        }
        if (isMounted) {
          setProjects(projects)
        }
      } catch (error) {
        console.error(error)
        setError(error)
      }
    }
    getData()
    return () => {
      isMounted = false
    }
  }, [entityId, accessToken, queryResultBundle, queryError])

  return error ? (
    <ErrorBanner error={error}></ErrorBanner>
  ) : (
    <Carousel isLoading={isLoading}>
      {projects.map(project => {
        return (
          <ProjectViewCard
            key={project.entityId}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            synId={project.entityId}
            image={
              project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={`Logo for ${project.projectName}`}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '25%',
                    backgroundColor: 'primary.300',
                  }}
                />
              )
            }
          />
        )
      })}
    </Carousel>
  )
}

export default ProjectViewCarousel
