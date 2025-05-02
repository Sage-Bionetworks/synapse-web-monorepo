import { TargetEnum } from '@/utils/html/TargetEnum'

/**
 * Defines the configuration for a link that will be rendered in the card
 */
export type CardLink =
  | {
      // the column name whose value will be used as the display text
      matchColumnName: string
      // If set, use the rowID as the column value.  Otherwise, use the value in the matchColumnName column
      overrideValueWithRowID?: boolean
      // If true, value will be processed as Markdown
      isMarkdown: false
      // If set, also show a tooltip
      tooltipText?: string
      // If set, will specify where to open the link
      target?: TargetEnum
    } & (
      | {
          baseURL: string
          // the key that will go into the url
          URLColumnName: string
          // the value that will go into the url link should be surrounded with parenthesis, making the search
          // param study=(ROSMAP) instead of study=ROSMAP
          wrapValueWithParens?: boolean
          // If true, the data is a synID and the entity name should be resolved
          resolveEntityName?: boolean
        }
      | {
          // If set and a value exists in this column for the row, just use this value (or a transform of this value) for the href
          overrideLinkURLColumnName: string
          // Optionally apply a transform to each value of the overrideLinkURLColumn
          overrideLinkURLColumnTransform?: (columnValue: string) => string
        }
    )
