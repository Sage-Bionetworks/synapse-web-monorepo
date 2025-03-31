import { useGetEntityHeaders } from '@/synapse-queries/index'
import { getIsAllSelectedFromInfiniteList } from '@/utils/hooks/index'
import { Reference } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { EntityFinderHeader } from '../../EntityFinderHeader'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type SearchDetailsProps = EntityDetailsListSharedProps & {
  references: Reference[]
}

export const ReferenceDetails: React.FunctionComponent<SearchDetailsProps> = ({
  references,
  ...sharedProps
}) => {
  const { data, isLoading } = useGetEntityHeaders(references, {
    enabled: !!references,
    throwOnError: true,
  })

  const headers = data?.results ?? []

  return (
    <DetailsView
      entities={headers}
      isLoading={isLoading}
      selectAllIsChecked={getIsAllSelectedFromInfiniteList(
        (headers as EntityFinderHeader[]) ?? [],
        sharedProps.selected.size,
        sharedProps.isIdSelected,
        sharedProps.isSelectable,
      )}
      {...sharedProps}
    />
  )
}
