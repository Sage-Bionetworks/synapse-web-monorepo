import { cloneDeep, Dictionary } from 'lodash'
import pluralize from 'pluralize'
import React from 'react'
import { useState } from 'react'
import { BarLoader } from 'react-spinners'
import {
  RegularExpressions,
  SynapseConstants,
  SynapseQueries,
  IconSvg,
  SynapseUtilityFunctions,
} from 'synapse-react-client'
import type { LockedColumn } from 'synapse-react-client'
import {
  ColumnType,
  ColumnTypeEnum,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { Tooltip, Typography } from '@mui/material'
import { SynapseComponent } from '../../SynapseComponent'
import { SynapseConfig } from '../../types/portal-config'
import {
  DetailsPageProps,
  ResolveSynId,
  RowSynapseConfig,
} from '../../types/portal-util-types'
import injectPropsIntoConfig from '../injectPropsIntoConfig'
import ToggleSynapseObjects from '../ToggleSynapseObjects'
import DetailsPageTabs from './DetailsPageTabs'
import { SideNavMenu } from './SideNavMenu'
import { getComponentId, useScrollOnMount } from './utils'

const goToExplorePage = () => {
  /*
    Below assumes that going from the details page url up one level will work,
    for the current set of portals this assumption will hold true.
  */
  const lastLocation = window.location.href.split('/')
  const lastPlace = lastLocation.slice(0, lastLocation.length - 1).join('/')
  window.location.assign(lastPlace)
}

function HeadlineWithLink(props: { title: string; id: string }) {
  const { title, id } = props
  const [showLink, setShowLink] = useState(false)
  const [copied, setCopied] = useState(false)

  return (
    <div
      onMouseOver={() => {
        setShowLink(true)
      }}
      onMouseOut={() => {
        setShowLink(false)
      }}
    >
      <Typography variant="sectionTitle" role="heading">
        {title}
        <span
          style={{
            position: 'absolute',
            marginTop: '-1px',
            ...(showLink ? { display: 'inline' } : { display: 'none' }),
          }}
        >
          <Tooltip
            title={copied ? 'Copied' : 'Copy link to section'}
            placement="right"
          >
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                const urlWithoutHash = window.location.href.replace(
                  window.location.hash,
                  '',
                )
                const url = `${urlWithoutHash}#${id}`
                navigator.clipboard.writeText(url).then(() => {
                  setCopied(true)
                })
              }}
            >
              <IconSvg icon="link" wrap={false} sx={{ pl: 1 }} />
            </div>
          </Tooltip>
        </span>
      </Typography>
    </div>
  )
}

/**
 * The details pages give a deeper dive into a particular portal section.
 *
 * It operates by pulling in a row of data and then using that row to piece together
 * information for the page.
 *
 * There are three ways the details page pulls in data.
 *
 * 1. Using a column's value and joining it with another table
 * 2. Resolving a column's value and joining it with another table
 * 3. Static data, data which is fixed across detail pages, the props for the component are
 * hardcoded in the config
 *
 *
 * @export
 * @class DetailsPage
 * @extends {React.Component<DetailsPageProps, State>}
 */
export default function DetailsPage(props: DetailsPageProps) {
  const {
    sql,
    searchParams = {},
    sqlOperator,
    showMenu = true,
    additionalFiltersSessionStorageKey,
  } = props

  useScrollOnMount()

  const queryBundleRequest = React.useMemo(() => {
    const entityId = SynapseUtilityFunctions.parseEntityIdFromSqlStatement(sql)
    const additionalFilters = SynapseUtilityFunctions.getAdditionalFilters(
      additionalFiltersSessionStorageKey,
      searchParams,
      sqlOperator,
    )
    const queryBundleRequest: QueryBundleRequest = {
      entityId,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      query: {
        sql,
        additionalFilters,
      },
    }
    return queryBundleRequest
  }, [searchParams, sql, sqlOperator])

  const {
    data: asyncJobStatus,
    isLoading,
    error: hasError,
  } = SynapseQueries.useGetQueryResultBundleWithAsyncStatus(queryBundleRequest)

  const queryResultBundle = asyncJobStatus?.responseBody

  const tabLayout = 'tabLayout' in props ? props.tabLayout : undefined
  const config =
    'synapseConfigArray' in props ? props.synapseConfigArray : undefined
  if (hasError) {
    const currentLocation = window.location.href.split('/')
    const name = currentLocation[currentLocation.length - 2]
    return (
      <div className="DetailsPage__ComingSoon">
        <Typography variant="headline1">Coming Soon! </Typography>
        <p>
          {/*
                pluralize is used to convert the detail of interest e.g. studies/publications/etc
                to a singular form like study/publication/etc
            */}
          This {pluralize.singular(name).toLowerCase()} is not yet available,
          please check back soon.
        </p>
        <button
          onClick={goToExplorePage}
          className="SRC-standard-button-shape SRC-primary-background-color SRC-whiteText"
        >
          Continue Exploring
        </button>
      </div>
    )
  }

  if (tabLayout?.length) {
    return (
      <div className="DetailsPage tab-layout">
        <div className="component-container">
          {
            <DetailsPageTabs
              tabConfigs={tabLayout}
              loading={isLoading}
              queryResultBundle={queryResultBundle}
              showMenu={showMenu}
            ></DetailsPageTabs>
          }
        </div>
      </div>
    )
  } else {
    return (
      <>
        {isLoading && <BarLoader color="#878787" loading={true} height={5} />}
        {!isLoading && config && (
          <DetailsPageSynapseConfigArray
            showMenu={showMenu}
            synapseConfigArray={config}
            queryResultBundle={queryResultBundle}
          />
        )}
      </>
    )
  }
}

const SynapseObject: React.FC<{
  el: RowSynapseConfig
  queryResultBundle: QueryResultBundle
}> = ({ el, queryResultBundle }) => {
  const { columnName = '', resolveSynId, props, overrideSqlSourceTable } = el
  const deepCloneOfProps = cloneDeep(props)
  const row = queryResultBundle.queryResult!.queryResults.rows[0].values
  const rowVersionNumber =
    queryResultBundle.queryResult!.queryResults.rows[0].versionNumber

  // map column name to index
  const mapColumnHeaderToRowIndex: Dictionary<{
    index: number
    columnType: ColumnType
  }> = {}
  queryResultBundle.queryResult!.queryResults.headers.forEach((el, index) => {
    mapColumnHeaderToRowIndex[el.name] = { index, columnType: el.columnType }
  })
  const { index, columnType } = mapColumnHeaderToRowIndex[columnName] ?? {}
  let rawValue: string | null = row[index]
  if (!rawValue) {
    console.error('No value mapped for ', columnName)
    return <></>
  } else if (
    columnType === ColumnTypeEnum.STRING_LIST ||
    columnType === ColumnTypeEnum.INTEGER_LIST ||
    columnType === ColumnTypeEnum.ENTITYID_LIST
  ) {
    try {
      rawValue = JSON.parse(rawValue)
    } catch (e) {
      console.error('Error on parsing value ', e)
      return <></>
    }
  }

  let split: string[] = ['']
  if (rawValue === null) {
    split = ['']
  } else if (el.injectMarkdown) {
    split = [rawValue]
  } else if (typeof rawValue === 'object') {
    split = rawValue
  } else {
    split = rawValue.split(',')
  }
  /*
    There's a known ineffeciency here, we have components like CardContainer where it makes sense
    to construct a sql statement with a chain of OR statements rather than having N different queries.

    But this doesn't work for a component like MarkdownSynapse where there is a desire to have
    N different markdown components.

    For simplicity's sake this will be left as is, but this could be revisited if performance is an issue.
  */
  return (
    <>
      {split.map((splitString) => (
        <SplitStringToComponent
          key={splitString}
          splitString={splitString}
          resolveSynId={resolveSynId}
          columnName={columnName}
          el={el}
          deepCloneOfProps={deepCloneOfProps}
          overrideSqlSourceTable={overrideSqlSourceTable}
          rowVersionNumber={rowVersionNumber}
        />
      ))}
    </>
  )
}

export const SplitStringToComponent: React.FC<{
  splitString: string
  resolveSynId?: ResolveSynId
  columnName: string
  el: RowSynapseConfig
  deepCloneOfProps: any
  overrideSqlSourceTable?: boolean
  rowVersionNumber?: number
}> = ({
  splitString,
  resolveSynId,
  columnName,
  el,
  deepCloneOfProps,
  overrideSqlSourceTable,
  rowVersionNumber,
}) => {
  let value = splitString.trim()
  const valueIsSynId = React.useMemo(
    () => !!RegularExpressions.SYNAPSE_ENTITY_ID_REGEX.exec(value),
    [value],
  )

  let entityTitle = ''

  // For explorer 2.0, construct an object to contain the locked facet name and facet value
  const lockedColumn: LockedColumn = {
    columnName: columnName,
  }

  const { data: entityHeaders } = SynapseQueries.useGetEntityHeaders(
    [{ targetId: value }],
    {
      enabled: valueIsSynId,
    },
  )

  if (resolveSynId) {
    // use entity name as either title or value according to resolveSynId
    const entity = entityHeaders?.results.find((el) => el.id === value.trim())
    const name = entity?.name ?? ''
    if (!name) {
      console.error('No value mapped for ', columnName)
      return <></>
    }
    if (resolveSynId.title) {
      entityTitle = name
    }

    // use entity name according to resolveSynId
    if (resolveSynId.value) {
      value = name
      lockedColumn.value = name
    }
  }

  let searchParams: Dictionary<string> | undefined = undefined
  if (el.tableSqlKeys) {
    // create component's query according to keys and value
    searchParams = {}
    el.tableSqlKeys.forEach((key: string) => {
      searchParams![key] = value
    })
  }
  const injectedProps = injectPropsIntoConfig(value, el, {
    ...deepCloneOfProps,
  })
  if (overrideSqlSourceTable) {
    // use the search param value to override the sql param.
    // TODO: Refactor to consider the the type of the original table
    // For datasets and views, the rowVersionNumber corresponds to the actual version of the table. For TableEntities, the rowVersionNumber is meaningless. For now, just see if the columnName is `id`, which is always true for current view/dataset cases, and is never the case for current table cases.
    //
    injectedProps['sql'] = `SELECT  *  FROM  ${value}${
      rowVersionNumber && columnName == 'id' ? `.${rowVersionNumber}` : ''
    }`
  }

  // For explorer 2.0, cannot assign key `lockedColumn` to deepCloneOfProps due to type errors,
  // assign lockedColumn value directly to injectedProps only if resolveSynId.value is true
  // PORTALS-2060: Also for explorer 2.0, hide the query count if on a details page.
  injectedProps['lockedColumn'] = lockedColumn
  injectedProps['hideQueryCount'] = true
  const synapseConfigWithInjectedProps: SynapseConfig = {
    ...el,
    props: injectedProps,
  }
  if (el.resolveSynId && entityTitle) {
    const id = getComponentId(el, entityTitle)
    return (
      <>
        {entityTitle && (
          <div id={id}>
            <HeadlineWithLink id={id} title={`${el.title}: ${entityTitle}`} />
            <hr />
          </div>
        )}
        <SynapseComponent
          synapseConfig={synapseConfigWithInjectedProps}
          searchParams={searchParams}
        />
      </>
    )
  }
  return (
    <SynapseComponent
      synapseConfig={synapseConfigWithInjectedProps}
      searchParams={searchParams}
    />
  )
}

function isReactFragment(variableToInspect: any): boolean {
  if (variableToInspect.type) {
    return variableToInspect.type === React.Fragment
  }
  return variableToInspect === React.Fragment
}

const getSynapseComponent = (
  el: RowSynapseConfig,
  queryResultBundle?: QueryResultBundle,
) => {
  return el.standalone ? (
    <SynapseComponent synapseConfig={el} />
  ) : queryResultBundle ? (
    <SynapseObject el={el} queryResultBundle={queryResultBundle} />
  ) : (
    <></>
  )
}
export const DetailsPageSynapseConfigArray: React.FC<{
  showMenu: boolean
  synapseConfigArray: RowSynapseConfig[]
  queryResultBundle?: QueryResultBundle
}> = ({ showMenu, synapseConfigArray, queryResultBundle }) => {
  const synapseConfigContent = (
    <>
      {synapseConfigArray.map((el: RowSynapseConfig, index) => {
        const id = getComponentId(el)
        const { resolveSynId, showTitleSeperator = true } = el
        const key = JSON.stringify(el)
        const hasTitleFromSynId = resolveSynId && resolveSynId.title
        // don't show this title if component is rendering entity names adjacet to the title
        let title: any = ''
        if (!hasTitleFromSynId) {
          title = (
            <>
              {el.title && <HeadlineWithLink title={el.title} id={id} />}
              {showTitleSeperator && el.title && <hr />}
              {el.subtitle && (
                <div className="bootstrap-4-backport">
                  <Typography variant="subsectionHeader" role="heading">
                    {el.subtitle}
                  </Typography>
                </div>
              )}
            </>
          )
        }

        let component
        // PORTALS-2229: If this is a Toggle, then get a ToggleSynapseObjects component
        if (el.toggleConfigs) {
          const tc = el.toggleConfigs
          component = (
            <ToggleSynapseObjects
              icon1={tc.icon1}
              synapseObject1={getSynapseComponent(
                tc.config1,
                queryResultBundle,
              )}
              icon2={tc.icon2}
              synapseObject2={getSynapseComponent(
                tc.config2,
                queryResultBundle,
              )}
            />
          )
        } else {
          component = getSynapseComponent(el, queryResultBundle)
        }
        if (isReactFragment(component)) {
          return <React.Fragment key={index}></React.Fragment>
        }

        return (
          <div id={id} key={key}>
            {title}
            {component}
          </div>
        )
      })}
    </>
  )
  if (showMenu && synapseConfigArray.length > 1) {
    return (
      <div className="DetailsPage">
        <div className="button-container">
          <SideNavMenu
            synapseConfigArray={synapseConfigArray}
            queryResultBundle={queryResultBundle}
          />
        </div>
        <div className="component-container">{synapseConfigContent}</div>
      </div>
    )
  } else return <>{synapseConfigContent}</>
}
