import { useListOrganizations } from '@/synapse-queries'
import { Organization } from '@sage-bionetworks/synapse-client'
import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * Option displayed as a disabled placeholder row while Organizations are still being fetched,
 * so the loading state is reflected within the option list itself. This avoids relying on the
 * Autocomplete's `loading` prop, which blocks the list from use while loading.
 */
export const LOADING_ORGANIZATIONS_OPTION: Organization = {}

/**
 * Lists every JSON Schema Organization, and optionally preselects one matching
 * `defaultOrganizationName` once it becomes available.
 */
export function useJsonSchemaOrganizations(defaultOrganizationName?: string) {
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null)
  const hasAppliedDefaultOrganizationRef = useRef(false)

  const { data, isLoading, isError, error } = useListOrganizations()

  const organizations = useMemo(() => data ?? [], [data])

  const organizationOptions = useMemo(
    () =>
      isLoading
        ? [LOADING_ORGANIZATIONS_OPTION, ...organizations]
        : organizations,
    [organizations, isLoading],
  )

  useEffect(() => {
    if (!hasAppliedDefaultOrganizationRef.current && defaultOrganizationName) {
      const match = organizations.find(
        org => org.name === defaultOrganizationName,
      )
      if (match) {
        setSelectedOrganization(match)
        hasAppliedDefaultOrganizationRef.current = true
      }
    }
  }, [organizations, defaultOrganizationName])

  return {
    selectedOrganization,
    setSelectedOrganization,
    organizationOptions,
    isLoadingAllOrganizations: isLoading,
    isError,
    error,
  }
}
