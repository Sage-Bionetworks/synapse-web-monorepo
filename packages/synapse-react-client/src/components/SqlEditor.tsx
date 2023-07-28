import { SearchTwoTone } from '@mui/icons-material'
import { Collapse } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { HelpPopover } from './HelpPopover'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import { useQueryContext } from './QueryContext/QueryContext'

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
  useEffect(() => {
    if (showSqlEditor) {
      const defaultSql = getCurrentQueryRequest().query.sql

      setSql(defaultSql)
      inputRef.current?.focus()
    }
  }, [showSqlEditor, getCurrentQueryRequest])

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

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    inputRef.current?.setCustomValidity('')
    setSql(event.currentTarget.value)
  }

  return (
    <div className={`QueryWrapperSqlEditorInput`}>
      <Collapse in={showSqlEditor} timeout={{ enter: 300, exit: 300 }}>
        <div className="QueryWrapperSqlEditorInput__helppopoverwrapper">
          <form
            className="QueryWrapperSqlEditorInput__searchbar"
            onSubmit={search}
          >
            <SearchTwoTone className="QueryWrapperSqlEditorInput__searchbar__searchicon" />
            <input
              ref={inputRef}
              onChange={handleChange}
              placeholder="Enter Query"
              value={sql}
              type="text"
            />
          </form>
          <div className="QueryWrapperSqlEditorInput__helppopover">
            <HelpPopover
              markdownText={helpMessage}
              helpUrl={helpUrl}
              placement="right"
            />
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default SqlEditor
