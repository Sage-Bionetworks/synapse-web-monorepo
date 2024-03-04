import { Collapse, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import { HelpPopover } from '../HelpPopover/HelpPopover'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useQueryContext } from '../QueryContext'
import IconSvg from '../IconSvg'

export type SqlEditorProps = {
  helpMessage?: string
  helpUrl?: string
}

const helpMessageCopy =
  'The data within tables and views can be retrieved by using a SQL-like query language either from the web interface or from the programmatic clients.'
const helpLink =
  'https://help.synapse.org/docs/Querying-Tables,-Views,-and-Datasets.2667642897.html#QueryingTables,Views,andDatasets-UsingAdvancedSearchQueries'

export const SqlEditor: React.FunctionComponent<SqlEditorProps> = ({
  helpMessage = helpMessageCopy,
  helpUrl = helpLink,
}: SqlEditorProps) => {
  const { executeQueryRequest, getCurrentQueryRequest } = useQueryContext()
  const { showSqlEditor } = useQueryVisualizationContext()

  const [sql, setSql] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const lastQueryRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )

  useEffect(() => {
    if (showSqlEditor) {
      const defaultSql = lastQueryRequest.query.sql

      setSql(defaultSql)
      inputRef.current?.focus()
    }
  }, [showSqlEditor, lastQueryRequest])

  const search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    executeQueryRequest(request => {
      request.query.sql = sql
      request.query.offset = 0
      request.query.additionalFilters = []
      request.query.selectedFacets = []
      return request
    })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputRef.current?.setCustomValidity('')
    setSql(event.currentTarget.value)
  }

  return (
    <div className={`QueryWrapperSqlEditorInput`}>
      <Collapse in={showSqlEditor} timeout={{ enter: 300, exit: 300 }}>
        <form onSubmit={search}>
          <TextField
            inputProps={{
              ref: inputRef,
            }}
            sx={{ width: '100%' }}
            InputProps={{
              startAdornment: (
                <IconSvg
                  icon="search"
                  wrap={false}
                  sx={{
                    mr: 1,
                    color: 'grey.600',
                  }}
                />
              ),
              endAdornment: (
                <HelpPopover
                  markdownText={helpMessage}
                  helpUrl={helpUrl}
                  placement="right"
                />
              ),
            }}
            onChange={handleChange}
            placeholder="Enter Query"
            value={sql}
            type="text"
          />
        </form>
      </Collapse>
    </div>
  )
}

export default SqlEditor
