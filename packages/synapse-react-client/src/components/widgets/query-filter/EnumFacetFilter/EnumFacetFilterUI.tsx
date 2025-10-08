import {
  Checkbox,
  Collapse,
  FormControlLabel,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material'
import { useMemo, useRef, useState } from 'react'
import { FacetColumnResultValueCount } from '@sage-bionetworks/synapse-types'
import IconSvg from '../../../IconSvg/IconSvg'
import { FacetFilterHeader } from '../FacetFilterHeader'
import { EnumFacetFilterOption } from './EnumFacetFilterOption'
import EnumFacetFilterDropdown from './EnumFacetFilterDropdown'
import { SetOptional } from 'type-fest'

const MAX_ENUMERATION_VALUES_TO_SHOW = 5

export type RenderedFacetValue<TValue = string> = Omit<
  SetOptional<FacetColumnResultValueCount, 'count'>,
  'value'
> & {
  value: TValue
  /* Text displayed for the option, and also used to filter in search */
  displayText: string
}

export type EnumFacetFilterUIProps<TValue = string> = {
  /* The title of the faceted column to be displayed */
  facetTitle: string
  /* List of all facet values and information associated with each value */
  facetValues: RenderedFacetValue<TValue>[]
  /* Determines how the component is styled and whether the 'All' checkbox should be selected. */
  filterIsActive: boolean // filterIsActive cannot be derived from facetValues[*].isSelected. See PORTALS-2680
  /* The EnumFacetFilter can be rendered as a collapsible panel or a dropdown. Default is `'Collapsible'` */
  containerAs?: 'Collapsible' | 'Dropdown'
  /* If `containerAs` is a dropdown, the dropdown can be either an IconButton or a SelectBox. Default is `'Icon'` */
  dropdownType?: 'Icon' | 'SelectBox'
  /* If true, hides the button to collapse the panel (only shown if `containerAs` is 'Collapsible'). Default is false.*/
  hideCollapsible?: boolean
  /* Called when an unselected value is selected */
  onAddValueToSelection: (value: TValue) => void
  /* Called when a selected value is unselected */
  onRemoveValueFromSelection: (value: TValue) => void
  /* Called when all values should be unselected (e.g. 'All' is clicked) */
  onRemoveAllFacetSelections: () => void
  /* Called when an value is hovered over */
  onHoverOverValue: (value: TValue) => void
  /* Set to true if multiple values can be selected for the filter */
  canMultiSelect: boolean
  /* By default, all values are not shown (defaultShowAllValues = false) */
  defaultShowAllValues?: boolean
}

function removeWhitespace(value: string): string {
  return value.replace(/\s/g, '').toLowerCase()
}

export default function EnumFacetFilterUI<TValue = string>(
  props: EnumFacetFilterUIProps<TValue>,
) {
  const {
    filterIsActive,
    containerAs = 'Collapsible',
    dropdownType = 'Icon',
    hideCollapsible = false,
    facetValues,
    onAddValueToSelection,
    onRemoveValueFromSelection,
    facetTitle,
    onRemoveAllFacetSelections,
    onHoverOverValue,
    canMultiSelect = true,
    defaultShowAllValues = false,
  } = props
  const [toggleShowAll, setToggleShowAll] =
    useState<boolean>(defaultShowAllValues)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchTerm, setSearchText] = useState<string>('')

  // e.g. we show a subset of facet values before hiding the rest behind "Show More"
  // If the user has selected a value that would normally be hidden, always show all of the values
  const valueIndexedGreaterThanMaxToShowIsSelected =
    facetValues.length > MAX_ENUMERATION_VALUES_TO_SHOW &&
    facetValues
      .slice(MAX_ENUMERATION_VALUES_TO_SHOW)
      .some(({ isSelected }) => isSelected)
  const showAll =
    containerAs === 'Dropdown' ||
    toggleShowAll ||
    showSearch ||
    valueIndexedGreaterThanMaxToShowIsSelected

  const facetValuesToShow = useMemo(() => {
    if (showSearch && searchTerm.length > 0) {
      return facetValues.filter(({ displayText }) => {
        return (
          displayText.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) >
          -1
        )
      })
    }
    if (showAll) {
      return facetValues
    }
    return facetValues.slice(0, MAX_ENUMERATION_VALUES_TO_SHOW)
  }, [facetValues, searchTerm, showSearch, showAll])

  const textInput = useRef<HTMLInputElement>(null)

  const isDropdown = containerAs === 'Dropdown'
  const showMoreButtonIsVisible =
    !showAll && facetValues.length > MAX_ENUMERATION_VALUES_TO_SHOW
  const showLessButtonIsVisible =
    showAll &&
    !searchTerm &&
    !valueIndexedGreaterThanMaxToShowIsSelected &&
    facetValues.length > MAX_ENUMERATION_VALUES_TO_SHOW

  const content = (
    <div className={isDropdown ? 'EnumFacetFilter__dropdown_menu' : ''}>
      <div className="EnumFacetFilter__checkboxContainer--forAll">
        <TextField // Search Filter Text
          sx={{
            display: showSearch ? undefined : 'none',
          }}
          size={'small'}
          fullWidth={true}
          slotProps={{
            input: {
              startAdornment: (
                <Tooltip title={'Close search'}>
                  <IconButton
                    size={'small'}
                    onClick={() => {
                      setShowSearch(false)
                      setToggleShowAll(defaultShowAllValues)
                    }}
                  >
                    <IconSvg
                      sx={{ fontSize: 'inherit' }}
                      wrap={false}
                      icon="arrowBack"
                    />
                  </IconButton>
                </Tooltip>
              ),
              endAdornment: searchTerm.length > 0 && (
                <Tooltip title={'Clear'}>
                  <IconButton
                    size={'small'}
                    onClick={() => {
                      setSearchText('')
                      textInput.current?.focus()
                    }}
                  >
                    <IconSvg
                      sx={{ fontSize: 'inherit' }}
                      wrap={false}
                      icon="close"
                    />
                  </IconButton>
                </Tooltip>
              ),
            },
          }}
          type="text"
          placeholder="Find values"
          value={searchTerm}
          ref={textInput}
          onChange={e => {
            setSearchText(e.target.value)
          }}
        />
        {!showSearch && (
          <div className="EnumFacetFilter__checkAll">
            <FormControlLabel
              control={<Checkbox />}
              className="EnumFacetFilter__checkbox"
              onChange={() => {
                if (filterIsActive) {
                  onRemoveAllFacetSelections()
                }
              }}
              key="select_all"
              checked={!filterIsActive}
              label="All"
            />
            <Tooltip title={'Search'}>
              <IconButton
                size={'small'}
                sx={{ aspectRatio: '1 / 1' }}
                onClick={() => {
                  setSearchText('')
                  setShowSearch(true)
                  textInput.current?.focus()
                }}
              >
                <IconSvg
                  sx={{ fontSize: 'inherit' }}
                  wrap={false}
                  icon="search"
                />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
      <div>
        {facetValuesToShow.map((facetValueAndCount, index: number) => {
          const { isSelected, displayText, value, count } = facetValueAndCount

          return (
            <EnumFacetFilterOption
              key={String(value)}
              id={[
                removeWhitespace(facetTitle),
                removeWhitespace(String(value)),
                index,
              ].join('-')}
              label={displayText}
              count={count}
              isDropdown={isDropdown}
              checked={isSelected}
              onHover={() => {
                onHoverOverValue(value)
              }}
              onChange={(newIsSelected: boolean) => {
                if (newIsSelected) {
                  onAddValueToSelection(value)
                } else {
                  onRemoveValueFromSelection(value)
                }
              }}
              inputType={canMultiSelect ? 'checkbox' : 'radio'}
            />
          )
        })}
        {!isDropdown && (
          <>
            {showMoreButtonIsVisible && (
              <button
                className="EnumFacetFilter__showMoreFacetsBtn"
                onClick={() => setToggleShowAll(true)}
              >
                <div className="EnumFacetFilter__checkboxContainer">
                  <div className="EnumFacetFilter__showMoreFacetsLabel">
                    Show all ({facetValues.length})
                  </div>
                </div>
              </button>
            )}
            {showLessButtonIsVisible && (
              <button
                className="EnumFacetFilter__showMoreFacetsBtn"
                onClick={() => setToggleShowAll(false)}
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
        {facetValuesToShow.length <= 0 && (
          <div className="EnumFacetFilter__noMatch">No match found</div>
        )}
      </div>
    </div>
  )

  const menuText = useMemo(() => {
    if (!filterIsActive) {
      return 'All'
    } else if (
      filterIsActive &&
      facetValuesToShow.filter(item => item.isSelected).length === 1
    ) {
      return facetValuesToShow.filter(item => item.isSelected)[0].displayText
    } else {
      return 'Multiple Values Selected'
    }
  }, [filterIsActive, facetValuesToShow])

  if (isDropdown) {
    return (
      <EnumFacetFilterDropdown
        facetTitle={facetTitle}
        dropdownType={dropdownType}
        menuText={menuText}
        filterIsActive={filterIsActive}
      >
        {content}
      </EnumFacetFilterDropdown>
    )
  } else {
    return (
      <>
        <FacetFilterHeader
          hideCollapsible={hideCollapsible}
          isCollapsed={isCollapsed}
          label={facetTitle}
          onClick={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)}
        />
        <Collapse className="EnumFacetFilter" in={!isCollapsed}>
          {content}
        </Collapse>
      </>
    )
  }
}
