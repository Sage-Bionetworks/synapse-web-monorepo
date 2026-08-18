import {
  useGetEDucTemplateValidation,
  useListEDucTemplates,
} from '@/synapse-queries'
import { formatDate } from '@/utils/functions/DateFormatter'
import { CheckCircleTwoTone, ErrorTwoTone } from '@mui/icons-material'
import { Alert, Box, Button, Skeleton, Typography } from '@mui/material'
import { EDucTemplate } from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'

const columnHelper = createColumnHelper<EDucTemplate>()

const columns = [
  columnHelper.accessor('name', {
    header: props => <ColumnHeader {...props} title={'Name'} />,
    cell: ({ getValue }) => getValue() ?? '',
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('description', {
    header: props => <ColumnHeader {...props} title={'Description'} />,
    cell: ({ getValue }) => getValue() ?? '',
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('createdOn', {
    header: props => <ColumnHeader {...props} title={'Created on'} />,
    cell: ({ getValue }) => {
      const value = getValue()
      return value ? formatDate(dayjs(value)) : ''
    },
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('modifiedOn', {
    header: props => <ColumnHeader {...props} title={'Modified on'} />,
    cell: ({ getValue }) => {
      const value = getValue()
      return value ? formatDate(dayjs(value)) : ''
    },
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.display({
    id: 'validation',
    header: props => <ColumnHeader {...props} title={'Validation status'} />,
    cell: ({ row }) => <ValidationCell templateId={row.original.templateId} />,
  }),
]

function ValidationCell(props: { templateId: string | undefined }) {
  const { templateId } = props
  const [enabled, setEnabled] = useState(false)

  const { data, error, isFetching } = useGetEDucTemplateValidation(
    templateId ?? '',
    { enabled: enabled && Boolean(templateId) },
  )

  if (!templateId) return null

  if (!enabled) {
    return (
      <Button
        variant={'outlined'}
        size={'small'}
        onClick={() => setEnabled(true)}
      >
        Validate
      </Button>
    )
  }

  if (isFetching) {
    return (
      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <SynapseSpinner size={16} />
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
        <ErrorTwoTone color={'error'} fontSize={'small'} />
        <Typography variant={'smallText1'} sx={{ color: 'error.main' }}>
          {error.reason}
        </Typography>
      </Box>
    )
  }

  if (data?.isValid) {
    return (
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
        <CheckCircleTwoTone color={'success'} fontSize={'small'} />
        <Typography variant={'smallText1'}>Valid</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
      <ErrorTwoTone color={'error'} fontSize={'small'} />
      <Typography variant={'smallText1'} sx={{ color: 'error.main' }}>
        {data?.reason ?? 'Invalid'}
      </Typography>
    </Box>
  )
}

export function EDucTemplateTable() {
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useListEDucTemplates()

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      void fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const templates = useMemo(
    () => data?.pages.flatMap(page => page.results ?? []) ?? [],
    [data],
  )

  const table = useReactTable<EDucTemplate>({
    data: templates,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: row => row.templateId ?? '',
  })

  if (isLoading || (hasNextPage && templates.length === 0)) {
    return (
      <Box>
        <Skeleton
          variant={'rectangular'}
          height={200}
          data-testid={'EDucTemplateTable-loading'}
        />
      </Box>
    )
  }

  if (error) {
    return (
      <Alert severity={'error'}>
        <strong>Sorry, we couldn&apos;t load the eDUC templates.</strong>
        <br />
        {error.reason}
      </Alert>
    )
  }

  if (templates.length === 0) {
    return (
      <Alert severity={'info'}>
        No eDUC templates are registered in DocuSign.
      </Alert>
    )
  }

  return (
    <Box>
      <Typography variant={'body1'} sx={{ mb: 2, color: 'grey.700' }}>
        Templates are managed in DocuSign. Use the <strong>Validate</strong>{' '}
        action to check whether a template meets Synapse&apos;s eDUC
        requirements.
      </Typography>
      <StyledTanStackTable
        table={table}
        styledTableContainerProps={{ sx: { my: 2 } }}
      />
    </Box>
  )
}

export default EDucTemplateTable
