import { convertDoiToLink } from '@/utils/functions/RegularExpressions'
import { Component, Fragment } from 'react'
import { ColumnIconConfigs } from '../../CardContainerLogic'
import IconSVG from '../../IconSvg/IconSvg'

export type CardLabel = {
  columnDisplayName: string
  value: React.ReactNode
  columnName?: string
}

type State = {
  isShowMoreOn: boolean
  isDesktop: boolean
}

type CardFooterProps = {
  values: CardLabel[]
  isHeader: boolean
  secondaryLabelLimit?: number
  columnIconOptions?: ColumnIconConfigs
  className?: string
  cardTopContent?: React.ReactNode
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
    key: string,
    value: React.ReactNode,
    tableColumnName?: string,
  ) => {
    const columnIconOptions = this.props.columnIconOptions
    if (typeof value !== 'string') {
      // value can sometimes be a react element
      return value
    }
    const valueAsString = value.trim()
    const doiLink = convertDoiToLink(valueAsString)

    if (doiLink) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={doiLink}>
          {valueAsString}
        </a>
      )
    }
    // Only display icon when columnIconOptions is set in config file
    if (
      columnIconOptions &&
      columnIconOptions.columns &&
      tableColumnName &&
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
  renderRows = (values: CardLabel[], limit: number, isDesktop: boolean) => {
    return values.map((label, index) => {
      const { columnDisplayName, value: labelValue, columnName } = label
      const hideClass = index >= limit ? 'SRC-hidden' : ''
      const value = this.renderRowValue(
        columnDisplayName,
        labelValue,
        columnName,
      )
      if (isDesktop) {
        return (
          <tr className={'SRC-cardRowDesktop ' + hideClass} key={index}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}>
              {columnDisplayName}
            </td>
            <td className={'SRC-row-data SRC-limitMaxWidth '}>{value}</td>
          </tr>
        )
      }
      return (
        <Fragment key={index}>
          <tr className={'SRC-cardRowMobile ' + hideClass}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}>
              {columnDisplayName}
            </td>
          </tr>
          <tr className={'SRC-cardRowMobile ' + hideClass}>
            <td className="SRC-row-data SRC-limitMaxWidth">{value}</td>
          </tr>
        </Fragment>
      )
    })
  }

  render() {
    const { values, secondaryLabelLimit = 3, cardTopContent } = this.props
    const { isShowMoreOn, isDesktop } = this.state
    const valuesFiltered = values.filter(el => Boolean(el.value))
    const hasMoreValuesThanLimit = valuesFiltered.length > secondaryLabelLimit
    const limit =
      !hasMoreValuesThanLimit || isShowMoreOn ? Infinity : secondaryLabelLimit
    return (
      <div
        data-testid="CardFooter"
        className={`SRC-cardMetadata ${this.props.className ?? ''}`}
      >
        {cardTopContent}
        <table
          style={{
            width: '100%',
            wordBreak: 'break-word',
          }}
        >
          <colgroup>
            <col className="SRC-cardMetadata-column1" />
            <col className="SRC-cardMetadata-column2" />
          </colgroup>
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
