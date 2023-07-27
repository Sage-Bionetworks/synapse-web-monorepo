import { Collapse } from '@mui/material'
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { ElementWithTooltip } from '../ElementWithTooltip'
import { SynapseConstants } from '../../../utils'
import useGetInfoFromIds from '../../../utils/hooks/useGetInfoFromIds'
import {
  ColumnTypeEnum,
  EntityHeader,
  Evaluation,
  FacetColumnResultValueCount,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  SelectColumn,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import IconSvg from '../../IconSvg/IconSvg'
import { Checkbox } from '../Checkbox'
import { FacetFilterHeader } from './FacetFilterHeader'
import { useQueryContext } from '../../QueryContext'
import { ReadonlyDeep } from 'type-fest'
import { isFacetColumnValuesRequest } from '../../../utils/types/IsType'
import { cloneDeep } from 'lodash-es'

export type EnumFacetFilterProps = {
  facetValues: FacetColumnResultValueCount[]
  columnModel: SelectColumn
  containerAs?: 'Collapsible' | 'Dropdown'
  dropdownType?: 'Icon' | 'SelectBox'
  collapsed?: boolean
}

function valueToId(value: string): string {
  return value.replace(/\s/g, '').toLowerCase()
}

function valueToLabel(
  facet: FacetColumnResultValueCount,
  profiles: UserGroupHeader[] = [],
  entityHeaders: EntityHeader[] = [],
  evaluations: Evaluation[] = [],
): string {
  const { value } = facet
  let displayValue = value
  if (value === SynapseConstants.VALUE_NOT_SET) {
    displayValue = SynapseConstants.FRIENDLY_VALUE_NOT_SET
  }
  const profile = profiles.find(profile => profile.ownerId === value)
  if (profile) {
    displayValue = profile ? profile.userName : `unknown (${value})`
  }

  const eh = entityHeaders.find(eh => eh.id === value)
  if (eh) {
    displayValue = eh ? eh.name : `unknown (${value})`
  }

  const evaluation = evaluations.find(evaluation => evaluation.id === value)
  if (evaluation?.name) {
    displayValue = evaluation.name
  }

  return `${displayValue}`
}

function formatFacetValuesForDisplay(
  facetValues: FacetColumnResultValueCount[],
  isShowAll: boolean,
  visibleItemsCount: number,
) {
  //sort facets by count
  const facets = [...facetValues.sort((a, b) => b.count - a.count)]
  if (isShowAll || facets.length <= visibleItemsCount) {
    return facets
  } else {
    //if we are not hiding elected facets
    if (facets.slice(visibleItemsCount).find(item => item.isSelected)) {
      return facets
    } else {
      return facets.splice(0, visibleItemsCount)
    }
  }
}

/**
 * Based on the uncommitted query, should the "All" checkbox be selected?
 * This only considers filters applied via selectedFacets. Filters applied via
 * sql or additionalFilters will be ignored.
 *
 * @returns true iff no values have been selected for this facet filter
 * @param nextQueryRequest
 * @param columnModel
 */
function getAllIsSelected(
  nextQueryRequest: ReadonlyDeep<QueryBundleRequest>,
  columnModel: SelectColumn,
) {
  return !nextQueryRequest.query.selectedFacets?.find(
    facetRequest =>
      facetRequest.concreteType ===
        'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest' &&
      facetRequest.columnName === columnModel.name,
  )
}

/************* QUERY ENUM COMPONENT  *************/

export const EnumFacetFilter: React.FunctionComponent<EnumFacetFilterProps> = ({
  facetValues,
  columnModel,
  containerAs = 'Collapsible',
  dropdownType = 'Icon',
  collapsed = false,
}: EnumFacetFilterProps) => {
  const {
    nextQueryRequest,
    addValueToSelectedFacet,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
  } = useQueryContext()
  const [isShowAll, setIsShowAll] = useState<boolean>(false)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed)
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchTerm, setSearchText] = useState<string>('')
  const [filteredSet, setFilteredSet] =
    useState<FacetColumnResultValueCount[]>(facetValues)

  useDeepCompareEffect(() => {
    setFilteredSet(facetValues)
  }, [facetValues])

  const currentSelectedFacet: FacetColumnValuesRequest | undefined = cloneDeep(
    nextQueryRequest.query.selectedFacets?.find(
      (selectedFacet): selectedFacet is FacetColumnValuesRequest => {
        return (
          selectedFacet.columnName === columnModel.name &&
          isFacetColumnValuesRequest(selectedFacet)
        )
      },
    ),
  )

  const visibleItemsCount = 5
  const textInput: React.RefObject<HTMLInputElement> = React.createRef()

  // Must compare the known facet values to the "uncommitted" current query
  const allIsSelected = getAllIsSelected(nextQueryRequest, columnModel)

  const userIds =
    columnModel?.columnType === ColumnTypeEnum.USERID ||
    columnModel?.columnType === ColumnTypeEnum.USERID_LIST
      ? facetValues.map(facet => facet.value)
      : []
  const userGroupHeaders = useGetInfoFromIds<UserGroupHeader>({
    ids: userIds,
    type: 'USER_PROFILE',
  })

  const entityIds =
    columnModel?.columnType === ColumnTypeEnum.ENTITYID ||
    columnModel?.columnType === ColumnTypeEnum.ENTITYID_LIST
      ? facetValues.map(facet => facet.value)
      : []
  const entityHeaders = useGetInfoFromIds<EntityHeader>({
    ids: entityIds,
    type: 'ENTITY_HEADER',
  })

  const evaluationIds =
    columnModel?.columnType === ColumnTypeEnum.EVALUATIONID
      ? facetValues.map(facet => facet.value)
      : []
  const evaluations = useGetInfoFromIds<Evaluation>({
    ids: evaluationIds,
    type: 'EVALUATION_QUEUE',
  })

  const handleTextInputFilterEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue: string = e.target.value
    setSearchText(inputValue)
    setIsShowAll(true) // While in filter search mode, display all filtered values

    if (!inputValue) {
      // if input field is empty, display all facet values
      facetValues.forEach(obj => {
        obj.isSelected = false
      })
      setFilteredSet(facetValues)
    } else {
      // display only facet values that contain text from the text input field
      const filtered = facetValues.filter(obj => {
        const label = valueToLabel(
          obj,
          userGroupHeaders,
          entityHeaders,
          evaluations,
        )
        return label.toLowerCase().indexOf(inputValue.trim().toLowerCase()) > -1
          ? obj
          : null
      })
      setFilteredSet(filtered)
    }
  }

  if (!columnModel) {
    return <></>
  }
  const isDropdown = containerAs === 'Dropdown'
  const content = (
    <div className={isDropdown ? 'EnumFacetFilter__dropdown_menu' : ''}>
      <div className="EnumFacetFilter__checkboxContainer--forAll">
        <div
          className={
            showSearch
              ? 'EnumFacetFilter__search active'
              : 'EnumFacetFilter__search'
          }
        >
          <button // Close Search Button
            className="EnumFacetFilter__closeSearch"
            onClick={() => {
              setFilteredSet(facetValues)
              setShowSearch(false)
              setIsShowAll(false)
            }}
          >
            <span className="EnumFacetFilter__previous">
              <IconSvg icon="arrowBack" />
            </span>
          </button>
          {searchTerm.length > 0 && (
            <button // Clear Search Filter Text Button
              className="EnumFacetFilter__resetSearch"
              onClick={() => {
                setSearchText('')
                textInput.current?.focus()
              }}
            >
              <span className="EnumFacetFilter__reset">
                <IconSvg icon="close" />
              </span>
            </button>
          )}
          <input // Search Filter Text
            type="text"
            placeholder="Find values"
            value={searchTerm}
            ref={textInput}
            onChange={e => {
              handleTextInputFilterEvent(e)
            }}
          />
        </div>
        {!showSearch && (
          <div className="EnumFacetFilter__checkAll">
            <Checkbox
              className="EnumFacetFilter__checkbox"
              onChange={() => {
                if (currentSelectedFacet) {
                  removeSelectedFacet(currentSelectedFacet)
                }
              }}
              key="select_all"
              checked={allIsSelected}
              label="All"
              isSelectAll={true}
            />
            <button
              className="EnumFacetFilter__searchbtn"
              onClick={() => {
                setSearchText('')
                setShowSearch(true)
                textInput.current?.focus()
              }}
            >
              <span className="EnumFacetFilter__searchicon">
                <IconSvg icon="search" />
              </span>
            </button>
          </div>
        )}
      </div>
      <div>
        {filteredSet.length > 0 &&
          formatFacetValuesForDisplay(
            filteredSet,
            isShowAll || isDropdown,
            visibleItemsCount,
          ).map((facet, index: number) => {
            const isSelected = !!currentSelectedFacet?.facetValues?.includes(
              facet.value,
            )

            return (
              <EnumFacetFilterOption
                key={`checkLabel${index}`}
                id={valueToId(facet.value)}
                index={index}
                label={valueToLabel(
                  facet,
                  userGroupHeaders,
                  entityHeaders,
                  evaluations,
                )}
                count={facet.count}
                isDropdown={isDropdown}
                checked={isSelected}
                onChange={(isChecked: boolean) => {
                  if (isChecked) {
                    addValueToSelectedFacet(columnModel.name, facet.value, {
                      debounce: true,
                    })
                  } else {
                    removeValueFromSelectedFacet(
                      columnModel.name,
                      facet.value,
                      {
                        debounce: true,
                      },
                    )
                  }
                }}
              />
            )
          })}
        {!isDropdown && (
          <>
            {!isShowAll && filteredSet.length > visibleItemsCount && (
              <button
                className="EnumFacetFilter__showMoreFacetsBtn"
                onClick={() => setIsShowAll(true)}
              >
                <div className="EnumFacetFilter__checkboxContainer">
                  <div className="EnumFacetFilter__showMoreFacetsLabel">
                    Show all ({filteredSet.length})
                  </div>
                </div>
              </button>
            )}
            {isShowAll && filteredSet.length > visibleItemsCount && (
              <button
                className="EnumFacetFilter__showMoreFacetsBtn"
                onClick={() => setIsShowAll(false)}
              >
                <div className="EnumFacetFilter__checkboxContainer">
                  <div className="EnumFacetFilter__showMoreFacetsLabel">
                    Show less
                  </div>
                </div>
              </button>
            )}
          </>
        )}
        {filteredSet.length <= 0 && (
          <div className="EnumFacetFilter__noMatch">No match found</div>
        )}
      </div>
    </div>
  )

  const onToggle = () => setIsShowDropdown(!isShowDropdown)

  if (isDropdown) {
    if (dropdownType === 'SelectBox') {
      return (
        <Dropdown
          className={'EnumFacetFilter EnumFacetFilterSelect'}
          show={isShowDropdown}
          onToggle={onToggle}
        >
          <Dropdown.Toggle className="secondary-caret" variant="gray-select">
            {allIsSelected && 'All'}
            {!allIsSelected &&
              facetValues.filter(item => item.isSelected).length === 1 &&
              facetValues.filter(item => item.isSelected)[0].value}
            {!allIsSelected &&
              facetValues.filter(item => item.isSelected).length > 1 &&
              'Multiple Values Selected'}
          </Dropdown.Toggle>
          <Dropdown.Menu>{content}</Dropdown.Menu>
        </Dropdown>
      )
    } else {
      return (
        <Dropdown
          className="EnumFacetFilter"
          show={isShowDropdown}
          onToggle={onToggle}
        >
          <ElementWithTooltip
            tooltipText="Filter by specific facet"
            key="facetFilterTooltip"
            darkTheme={false}
            icon={'filter'}
          />
          <Dropdown.Menu>{content}</Dropdown.Menu>
        </Dropdown>
      )
    }
  } else {
    return (
      <>
        <FacetFilterHeader
          isCollapsed={isCollapsed}
          label={columnModel.name}
          onClick={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)}
        />
        <Collapse className="EnumFacetFilter" in={!isCollapsed}>
          {content}
        </Collapse>
      </>
    )
  }
}

type EnumFacetFilterOptionProps = {
  readonly id: string
  readonly index: number
  readonly label: string
  readonly count: number
  readonly isDropdown: boolean
  readonly checked: boolean
  readonly onChange: (selected: boolean) => void
}

function EnumFacetFilterOption(props: EnumFacetFilterOptionProps) {
  const { id, index, label, count, isDropdown, checked, onChange } = props
  return (
    <div
      className="EnumFacetFilter__checkboxContainer"
      onClick={() => {
        // If this is a dropdown option, clicking anywhere in the field should toggle selection
        if (isDropdown) {
          onChange(!checked)
        }
      }}
    >
      <Checkbox
        className="EnumFacetFilter__checkbox"
        onClick={event => event.stopPropagation()}
        onChange={newValue => {
          onChange(newValue)
        }}
        key={`${id}-${index}`}
        checked={checked}
        label={label}
      ></Checkbox>
      {isDropdown && (
        <span className="EnumFacetFilter__count">
          ({count.toLocaleString()})
        </span>
      )}
      {!isDropdown && (
        <div className="EnumFacetFilter__count">{count.toLocaleString()}</div>
      )}
    </div>
  )
}
