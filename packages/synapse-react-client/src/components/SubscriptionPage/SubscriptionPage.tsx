import React, { useId, useState } from 'react'
import { useGetAllSubscriptions } from '../../synapse-queries/subscription/useSubscription'
import {
  SortByType as SubscriptionSortField,
  SortDirection,
  Subscription,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import SubscriptionItem from './SubscriptionItem'
import { Box, Button, Stack, Tab, Tabs } from '@mui/material'
import DropdownSelect from '../DropdownSelect'
import { InfiniteData } from '@tanstack/react-query'

type SortOption = { value: SortDirection; label: string }

const sortOptions: SortOption[] = [
  { value: 'ASC', label: 'Date Posted' },
  { value: 'DESC', label: 'Most Recent' },
]

export default function SubscriptionPage() {
  const [objectType, setObjectType] = useState<SubscriptionObjectType>(
    SubscriptionObjectType.FORUM,
  )
  const [sortDirection, setSortDirection] = useState<SortOption>(sortOptions[0])

  const instanceSpecificQueryKey = useId()

  const currentFilter = {
    objectType: objectType,
    sortBy: SubscriptionSortField.CREATED_ON,
    sortDirection: sortDirection.value,
  }

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetAllSubscriptions<InfiniteData<Subscription>>(
      currentFilter,
      // Since the user may edit their subscriptions on this page, set staleTime to infinity to prevent re-fetching while editing
      {
        staleTime: Infinity,
        select: data => ({
          pages: data.pages.flatMap(page => page.results),
          pageParams: data.pageParams,
        }),
      },
      // Override the query key with a unique ID, because we don't want changes to invalidate this list while it's being used
      [`subscriptionPageFetch_${instanceSpecificQueryKey}`, currentFilter],
    )

  return (
    <>
      <Box sx={{ float: 'right' }}>
        <DropdownSelect
          variant={'outlined'}
          options={sortOptions.map(option => option.label)}
          selectedIndex={sortOptions.findIndex(
            option => option.value === sortDirection.value,
          )}
          setSelectedIndex={index => setSortDirection(sortOptions[index])}
        />
      </Box>

      <Tabs
        sx={{ mb: 3 }}
        value={objectType}
        onChange={(
          event: React.SyntheticEvent,
          newValue: SubscriptionObjectType,
        ) => {
          event.stopPropagation()
          setObjectType(newValue)
        }}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value={SubscriptionObjectType.FORUM} label={'Project Forums'} />
        <Tab value={SubscriptionObjectType.THREAD} label={'Threads'} />
      </Tabs>
      <Stack gap={0.5}>
        {data?.pages.map(subscription => (
          <SubscriptionItem
            key={subscription.subscriptionId}
            subscription={subscription}
          />
        ))}
      </Stack>

      {hasNextPage && (
        <Button
          variant="contained"
          onClick={() => {
            fetchNextPage()
          }}
          disabled={isFetchingNextPage}
          sx={{ mt: 6 }}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </>
  )
}
