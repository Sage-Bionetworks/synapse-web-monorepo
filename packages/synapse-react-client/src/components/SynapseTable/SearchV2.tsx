import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  LockedColumn,
} from '@/utils'
import { Collapse } from '@mui/material'
import {
  ColumnModel,
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  ColumnTypeEnum,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import {
  Component,
  createRef,
  FormEvent,
  RefObject,
  SyntheticEvent,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import IconSvg from '../IconSvg/IconSvg'
import { QueryContextType } from '../QueryContext'
import { QueryVisualizationContextType } from '../QueryVisualizationWrapper'
import { useGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { ReadonlyDeep } from 'type-fest'

type SearchState = {
  show: boolean
  /* 
    When the component is revealed in queryplotnav we want to focus on the input field and reveal the dropdown
    there is an issue where the method handleClickOutsideForm will override the state from componentDidUpdate
    so we track when componentDidUpdate just fired so that `show` is not overriden on the click event which
    triggers componentDidUpdate 
  */
  didUpdateRanLast: boolean
  searchText: string
  columnName: string
}

export type SearchableColumnsV2 = string[]

export type SearchV2Props = {
  queryContext: QueryContextType
  queryVisualizationContext: QueryVisualizationContextType
  isQueryWrapperMenuChild?: boolean
  defaultColumn?: string
  searchable?: SearchableColumnsV2
  lockedColumn?: LockedColumn
  /**
   * PLFM-8897, PORTALS-3534: Full-Text Search configuration.
   * For Tables that have FTS enabled...
   * If specified, use the specified mode and distance (if BOOLEAN mode). Otherwise default to NATURAL_LANGUAGE mode.
   */
  ftsConfig?: ReadonlyDeep<FTSConfig>
}

export type TextMatchesMode = 'NATURAL_LANGUAGE' | 'BOOLEAN'
export type FTSConfig = {
  textMatchesMode: TextMatchesMode
  distance?: number // In BOOLEAN mode, this operator tests whether two or more words all start within a specified distance from each other, measured in words.
  searchHelpURL?: string
}

type InternalSearchProps = SearchV2Props & {
  columnModels: ColumnModel[] | undefined
}

class _Search extends Component<InternalSearchProps, SearchState> {
  public searchFormRef: RefObject<HTMLFormElement | null>
  public radioFormRef: RefObject<HTMLFormElement | null>

  constructor(props: InternalSearchProps) {
    super(props)
    this.state = {
      show: false,
      didUpdateRanLast: false,
      searchText: '',
      columnName: this.props.defaultColumn ?? '',
    }
    this.searchFormRef = createRef()
    this.radioFormRef = createRef()
  }

  componentDidMount() {
    // @ts-expect-error
    document.addEventListener('click', this.handleClickOutsideForm)
  }

  componentDidUpdate(prevProps: InternalSearchProps) {
    if (
      !prevProps.queryVisualizationContext?.showSearchBar &&
      this.props.queryVisualizationContext?.showSearchBar
    ) {
      this.setState({
        show: true,
        didUpdateRanLast: true,
      })
      this.searchFormRef?.current?.querySelector('input')?.focus()
    }
  }

  componentWillUnmount() {
    // @ts-expect-error
    document.removeEventListener('click', this.handleClickOutsideForm)
  }

  handleClickOutsideForm = (event: SyntheticEvent) => {
    if (
      // @ts-expect-error
      !this.searchFormRef.current?.contains(event?.target) &&
      // @ts-expect-error
      !this.radioFormRef.current?.contains(event?.target)
    ) {
      if (this.state.didUpdateRanLast) {
        this.setState({
          didUpdateRanLast: false,
        })
      } else {
        this.setState({
          show: false,
        })
      }
    }
  }

  public search = (event: SyntheticEvent<HTMLFormElement>) => {
    // form completion by default causes the page to reload, so we prevent that
    event.preventDefault()
    const { searchText } = this.state
    let { columnName } = this.state
    const { searchable, lockedColumn } = this.props
    if (columnName === '') {
      if (searchable) {
        // If searchable column names are defined in the config, grab the first one (that is not locked)
        columnName = searchable.filter(
          colName => colName !== lockedColumn?.columnName,
        )[0]
      } else {
        // Otherwise, get the first column model that can be searched.
        // And for study details page: if lockedColumn is defined, remove it from the search
        const searchableColumnModels = this.props.columnModels
          ?.filter(el => el.name !== lockedColumn?.columnName)
          .filter(el => this.isSupportedColumn(el))
        columnName = searchableColumnModels?.[0].name ?? ''
      }
    }
    this.setState({
      show: false,
    })
    const { executeQueryRequest, getCurrentQueryRequest } =
      this.props.queryContext

    const lastQueryRequestDeepClone = getCurrentQueryRequest()

    const { additionalFilters = [] } = lastQueryRequestDeepClone.query

    const indexOfColumn = additionalFilters.findIndex((el: QueryFilter) => {
      if (
        isColumnSingleValueQueryFilter(el) ||
        (isColumnMultiValueFunctionQueryFilter(el) &&
          el.columnName === columnName)
      ) {
        return true
      }
      return false
    })
    if (indexOfColumn === -1) {
      // get the column model to figure out what kind of filter we should apply.
      const columnModel: ColumnModel | undefined =
        this.props.columnModels?.filter(el => el.name === columnName)[0]
      if (columnModel?.columnType.endsWith('_LIST')) {
        const columnMultiValueQueryFilter: ColumnMultiValueFunctionQueryFilter =
          {
            columnName,
            function: ColumnMultiValueFunction.HAS_LIKE,
            _function: ColumnMultiValueFunction.HAS_LIKE,
            values: [`%${searchText}%`],
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
          }
        additionalFilters.push(columnMultiValueQueryFilter)
      } else {
        if (columnModel?.columnType == ColumnTypeEnum.ENTITYID) {
          const columnSingleValueQueryFilter: ColumnSingleValueQueryFilter = {
            columnName,
            operator: ColumnSingleValueFilterOperator.EQUAL,
            values: [`${searchText.toLowerCase().replace('syn', '')}`],
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          }
          additionalFilters.push(columnSingleValueQueryFilter)
        } else {
          const columnSingleValueQueryFilter: ColumnSingleValueQueryFilter = {
            columnName,
            operator: ColumnSingleValueFilterOperator.LIKE,
            values: [`%${searchText}%`],
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          }
          additionalFilters.push(columnSingleValueQueryFilter)
        }
      }
    } else {
      ;(
        additionalFilters[indexOfColumn] as
          | ColumnSingleValueQueryFilter
          | ColumnMultiValueFunctionQueryFilter
      ).values.push(`%${searchText}%`)
    }
    lastQueryRequestDeepClone.query.additionalFilters = additionalFilters
    executeQueryRequest(lastQueryRequestDeepClone)
  }

  public handleChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({
      searchText: event.currentTarget.value,
    })
  }

  public isSupportedColumn = (columnModel?: ColumnModel) => {
    switch (columnModel?.columnType) {
      case ColumnTypeEnum.FILEHANDLEID:
      case ColumnTypeEnum.DATE:
      case ColumnTypeEnum.DATE_LIST:
      case ColumnTypeEnum.USERID:
        //    case ColumnTypeEnum.ENTITYID: //PORTALS-2995: users may want to search on Synapse ID
        return false
      default:
        return true
    }
  }

  public isSupportedColumnAndInProps = (columnModel?: ColumnModel) => {
    if (this.isSupportedColumn(columnModel)) {
      // return true if the searchable array contains this column name
      const { searchable } = this.props
      return searchable?.some(e => e === columnModel?.name)
    }
    return false
  }

  render() {
    const {
      searchable,
      lockedColumn,
      columnModels,
      queryVisualizationContext: { showSearchBar, getColumnDisplayName },
    } = this.props
    const { searchText, show, columnName } = this.state
    let searchColumns: string[] = []

    // searchable specifies the order of the columns to search
    if (searchable) {
      searchColumns = searchable
        .map(el => columnModels?.find(model => model.name === el))
        .filter(this.isSupportedColumnAndInProps)
        .map(el => el!.name)
    } else if (columnModels) {
      searchColumns = columnModels
        ?.filter(this.isSupportedColumn)
        .map(el => el.name)
    }

    // For study details page: if lockedColumn is defined, remove it from the radio dropdown
    if (searchColumns.length && lockedColumn?.columnName) {
      searchColumns = searchColumns.filter(
        el => el !== lockedColumn?.columnName,
      )
    }
    return (
      <div className={`QueryWrapperSearchInput`}>
        <Collapse in={showSearchBar}>
          <form
            className="QueryWrapperSearchInput__searchbar"
            onSubmit={this.search}
            onClick={() => {
              this.setState({ show: true })
            }}
            ref={this.searchFormRef}
          >
            <span className="QueryWrapperSearchInput__searchbar__searchicon">
              <IconSvg icon="search" />
            </span>
            <input
              onChange={this.handleChange}
              onClick={() => {
                this.setState({
                  show: true,
                })
              }}
              placeholder="Enter Search Terms"
              value={searchText}
              type="text"
            />
            {this.state.searchText.length > 0 && (
              <button
                className="QueryWrapperSearchInput__searchbar__clearbutton"
                type="button"
                onClick={() => {
                  this.setState({
                    searchText: '',
                  })
                }}
              >
                <IconSvg icon="close" />
              </button>
            )}
          </form>
        </Collapse>
        <div className="QueryWrapperSearchInput__dropdown_pos">
          <CSSTransition
            nodeRef={this.radioFormRef}
            in={show}
            classNames="QueryWrapperSearchInput__animate_dropdown"
            timeout={{ enter: 0, exit: 300 }}
          >
            <form
              ref={this.radioFormRef}
              className="QueryWrapperSearchInput__column-select QueryWrapperSearchInput__animate_height"
            >
              <p className="deemphasized">
                <i> Search In Field: </i>
              </p>
              {searchColumns.map((name, index) => {
                const displayName = getColumnDisplayName(name)
                const isSelected =
                  (columnName === '' && index === 0) || columnName === name
                return (
                  <div className="radio" key={`search-field-${name}-${index}`}>
                    <label>
                      <span>
                        <input
                          id={name}
                          type="radio"
                          value={name}
                          checked={isSelected}
                          onClick={() => {
                            this.searchFormRef?.current
                              ?.querySelector('input')
                              ?.focus()
                            this.setState({
                              columnName: name,
                            })
                          }}
                        />
                        <span>{displayName}</span>
                      </span>
                    </label>
                  </div>
                )
              })}
            </form>
          </CSSTransition>
        </div>
      </div>
    )
  }
}

export default function Search(props: SearchV2Props) {
  const { data: queryMetadata } = useGetQueryMetadata()
  return <_Search {...props} columnModels={queryMetadata?.columnModels} />
}
