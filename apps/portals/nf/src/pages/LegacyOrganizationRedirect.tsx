import LegacyDetailsPageRedirect from './LegacyDetailsPageRedirect'

export default function LegacyOrganizationRedirect() {
  return (
    <LegacyDetailsPageRedirect
      paramName="abbreviation"
      fallbackParamName="fundingAgency"
    />
  )
}
