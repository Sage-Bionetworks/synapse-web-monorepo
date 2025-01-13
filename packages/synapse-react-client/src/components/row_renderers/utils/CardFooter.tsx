import { Component, Fragment } from 'react'
import IconSVG from '../../IconSvg/IconSvg'
import { ColumnIconConfigs } from '../../CardContainerLogic'
import { convertDoiToLink } from '../../../utils/functions/RegularExpressions'

type State = {
  isShowMoreOn: boolean
  isDesktop: boolean
}

type CardFooterProps = {
  values: any[]
  isHeader: boolean
  secondaryLabelLimit?: number
  columnIconOptions?: ColumnIconConfigs
  className?: string
}

class CardFooter extends Component<CardFooterProps, State> {
  constructor(props: CardFooterProps) {
    super(props)
    this.state = {
      isShowMoreOn: false,
      isDesktop: false,
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
    this.updatePredicate = this.updatePredicate.bind(this)
  }

  toggleShowMore() {
    this.setState({
      isShowMoreOn: !this.state.isShowMoreOn,
    })
  }

  componentDidMount() {
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 600 })
  }

  renderRowValue = (
    columnName: string,
    value: string,
    tableColumnName: string,
  ) => {
    const columnIconOptions = this.props.columnIconOptions
    if (!value.match || !value.trim) {
      // value can sometimes be a react element, so it doesn't have a .match function, interestingly I didn't
      // see typeof return 'object' for that case which would be a better check.
      return value
    }
    value = value.trim()
    const doiLink = convertDoiToLink(value)

    if (doiLink) {
      return (
        <a
          data-search-handle={columnName}
          target="_blank"
          rel="noopener noreferrer"
          href={doiLink}
        >
          {value}
        </a>
      )
    }
    // Only display icon when columnIconOptions is set in config file
    if (
      columnIconOptions &&
      columnIconOptions.columns &&
      Object.keys(columnIconOptions.columns).includes(tableColumnName)
    ) {
      const iconProps = columnIconOptions.columns[tableColumnName][value]
      if (!iconProps) {
        // if we can't find an icon to match, just return the value
        return <span>{value}</span>
      } else {
        iconProps.sx = { ...iconProps.sx, paddingRight: '0.2rem' }
        return (
          <>
            <IconSVG {...iconProps}></IconSVG>
            <span style={{ verticalAlign: 'middle' }}>{value}</span>
          </>
        )
      }
    }

    return value
  }
  renderRows = (values: string[][], limit: number, isDesktop: boolean) => {
    return values.map((kv, index) => {
      const hideClass = index >= limit ? 'SRC-hidden' : ''
      const columnName = kv[0]
      const value = this.renderRowValue(columnName, kv[1], kv[2])
      if (isDesktop) {
        return (
          <tr className={'SRC-cardRowDesktop ' + hideClass} key={index}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}>
              {columnName}
            </td>
            <td
              data-search-handle={columnName}
              className={'SRC-row-data SRC-limitMaxWidth '}
            >
              {value}
            </td>
          </tr>
        )
      }
      return (
        <Fragment key={index}>
          <tr className={'SRC-cardRowMobile ' + hideClass}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}>
              {columnName}
            </td>
          </tr>
          <tr className={'SRC-cardRowMobile ' + hideClass}>
            <td
              data-search-handle={columnName}
              className="SRC-row-data SRC-limitMaxWidth"
            >
              {value}
            </td>
          </tr>
        </Fragment>
      )
    })
  }

  render() {
    const { values, secondaryLabelLimit = 3 } = this.props
    const { isShowMoreOn, isDesktop } = this.state
    const valuesFiltered = values.filter(el => el[1])
    const hasMoreValuesThanLimit = valuesFiltered.length > secondaryLabelLimit
    const limit =
      !hasMoreValuesThanLimit || isShowMoreOn ? Infinity : secondaryLabelLimit
    return (
      <div
        data-testid="CardFooter"
        className={`SRC-cardMetadata ${this.props.className ?? ''}`}
      >
        <table>
          <tbody>
            {this.renderRows(valuesFiltered, limit, isDesktop)}
            {hasMoreValuesThanLimit && (
              <tr className="SRC-cardRow">
                <td>
                  <a
                    style={{ textAlign: 'left', margin: 0, padding: 0 }}
                    onClick={this.toggleShowMore}
                    className="highlight-link"
                  >
                    Show {isShowMoreOn ? 'Less' : 'More'}
                    <IconSVG
                      icon={isShowMoreOn ? 'expandLess' : 'expandMore'}
                    />
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
export default CardFooter
