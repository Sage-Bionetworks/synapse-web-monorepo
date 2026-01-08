import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'

/**
 * Generate CardDeck cards from a list of objects passed in
 * Current use is for has_application cards on standards details page.
 * The has_application column is a JSON list like:
 *    [
 *        {
 *            "id": "B2AI_APP:34",
 *            "name": "Cumulus Federated EHR Learning with Bulk FHIR and AI/NLP",
 *            "category": "B2AI:Application",
 *            "references": [
 *                "https://doi.org/10.1101/2024.02.02.24301940"
 *            ],
 *            "description": "The Cumulus platform operationalizes SMART/HL7 Bulk FHIR Access API for standardized data export across multiple healthcare institutions, then applies AI and natural language processing for computable phenotyping to define cohorts and outcomes from both structured and unstructured EHR data. The SMART Text2FHIR pipeline extracts insights from clinical texts and converts them into structured FHIR data elements for analysis. Only aggregate outputs leave each institution, enabling privacy-preserving federated learning across sites for public health monitoring and research while maintaining data sovereignty and interoperability through standardized FHIR exchange.",
 *            "used_in_bridge2ai": false
 *        },
 *    ]
 * For these cards we'll need:
 *    title: name,
 *    description: description,
 *    secondaryLabels: [ used_in_bridge2ai, ],
 *    links: references.map(ref => ({linkText: 'link', url: ref}) // am hoping to get appropriate link text, but the object doesn't contain that now
 */

export type CardFromDataProps = {
  // basing these on GenericCard props I think
  title: string
  description: string
  secondaryLabels: Record<string, string>[]
  links: Record<string, string>[]
}
export function CardsFromData(data: CardFromDataProps[]) {
  const cards = data.map((obj, i) => {
    return (
      <div key={i}>
        <div>{obj.title}</div>
        ... {/* put card JSX here */}
      </div>
    )
  })
  return <div>{cards}</div>
}
