import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

export type RealmPrincipalsContextType = {
  /** The principal ID representing all authenticated users */
  authenticatedUsersId: string | undefined
  /** The principal ID representing all users (authenticated and anonymous) */
  publicGroupId: string | undefined
  /** The principal ID representing the anonymous user */
  anonymousUserId: string | undefined
  /** Whether the realm principals are currently being fetched */
  isLoading: boolean
  /** Error encountered while fetching realm principals */
  error: Error | null
}

const RealmPrincipalsContext = createContext<
  RealmPrincipalsContextType | undefined
>(undefined)

export type RealmPrincipalsContextProviderProps = PropsWithChildren

/**
 * Provides realm-specific principal IDs throughout the application.
 * The context automatically fetches the correct principal IDs based on the user's authentication state and realm.
 */
export function RealmPrincipalsContextProvider({
  children,
}: RealmPrincipalsContextProviderProps) {
  const { data, isLoading, error } = useGetRealmPrincipals()

  const contextValue: RealmPrincipalsContextType = useMemo(
    () => ({
      authenticatedUsersId: data?.authenticatedUsers
        ? String(data.authenticatedUsers)
        : undefined,
      publicGroupId: data?.publicGroup ? String(data.publicGroup) : undefined,
      anonymousUserId: data?.anonymousUser
        ? String(data.anonymousUser)
        : undefined,
      isLoading,
      error: error as Error | null,
    }),
    [data, isLoading, error],
  )

  return (
    <RealmPrincipalsContext.Provider value={contextValue}>
      {children}
    </RealmPrincipalsContext.Provider>
  )
}

/**
 * Hook to access realm principal IDs. Use this instead of the hard-coded constants.
 * @throws Error if used outside of RealmPrincipalsContextProvider
 */
export function useRealmPrincipals(): RealmPrincipalsContextType {
  const context = useContext(RealmPrincipalsContext)
  if (context === undefined) {
    throw new Error(
      'useRealmPrincipals must be used within a RealmPrincipalsContextProvider',
    )
  }
  return context
}
