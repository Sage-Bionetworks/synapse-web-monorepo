import { GenericCard } from 'synapse-react-client/components/GenericCard/GenericCard'
import { GenericCardIcon } from 'synapse-react-client/components/GenericCard/GenericCardIcon'
import { CardLabel } from 'synapse-react-client/components/row_renderers/utils/CardFooter'

/**
 * Generate GenericCard cards from a list of objects passed in.
 * Example use: has_application cards on standards details page where data looks like:
 *    {
 *        "id": "B2AI_APP:34",
 *        "name": "Cumulus Federated EHR Learning...",
 *        "category": "B2AI:Application",
 *        "references": ["https://doi.org/..."],
 *        "description": "The Cumulus platform...",
 *        "used_in_bridge2ai": false
 *    }
 * The caller transforms this to CardData with title, description, type, labels, etc.
 */

export type CardData = {
  key?: string
  type?: string // optional - omit to hide redundant type header when section name matches
  title: string
  subtitle?: string
  description: string
  labels?: CardLabel[]
}

export type CardsFromDataProps = {
  data: CardData[]
}

export function CardsFromData({ data }: CardsFromDataProps) {
  if (!data || data.length === 0) {
    return null
  }

  return (
    <>
      {data.map((card, i) => (
        <GenericCard
          key={card.key || i}
          type={card.type ?? ''}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          icon={card.type ? <GenericCardIcon type={card.type} /> : null}
          labels={card.labels}
        />
      ))}
    </>
  )
}
