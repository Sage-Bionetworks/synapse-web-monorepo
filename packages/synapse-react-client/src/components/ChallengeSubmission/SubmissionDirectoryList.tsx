import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'

function SubmissionDirectoryList() {
  const [selectedRepo, setSelectedRepo] = useState<
    string | number | undefined
  >()

  const repoChangeHandler = (value: string | number) => {
    setSelectedRepo(value)
  }

  const columns: GridColDef[] = [
    {
      field: 'radiobutton',
      headerName: '',
      width: 25,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: params => {
        return (
          <RadioOption
            value={params.id}
            currentValue={selectedRepo}
            onChange={repoChangeHandler}
            label=""
            groupId="radiogroup"
            style={{ marginBottom: '16px' }}
          />
        )
      },
    },
  ]
  return (
    <>
      <Typography variant="h2">Your Submission Directory</Typography>
      <DataGrid columns={columns} />
    </>
  )
}

export default SubmissionDirectoryList
