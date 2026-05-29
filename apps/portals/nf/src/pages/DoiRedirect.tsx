import { DoiRedirectComponent } from '@sage-bionetworks/synapse-portal-framework/shared-config/DoiRedirectRoute'
import { doiRedirector, doiSerializer } from '@/config/doiRedirector'

export default function DoiRedirect() {
  return (
    <DoiRedirectComponent
      deserializer={doiSerializer}
      redirector={doiRedirector}
    />
  )
}
