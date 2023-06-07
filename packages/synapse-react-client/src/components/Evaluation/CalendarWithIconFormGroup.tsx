import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { Form, InputGroup } from 'react-bootstrap'
import 'react-datetime/css/react-datetime.css'
import { uniqueId } from 'lodash-es'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

export type CalendarWithIconFormGroupProps = {
  value: string | Dayjs | null
  setterCallback: (value: string | Dayjs | null) => void
  label?: string
  disabled?: boolean
  isValidDate?: (currentDate: any) => boolean
}

export const CalendarWithIconFormGroup: React.FunctionComponent<
  CalendarWithIconFormGroupProps
> = ({ value, setterCallback, label, disabled = false }) => {
  const [id] = useState(uniqueId('calendar-with-icon-form-group-'))
  return (
    <Form.Group className="calendar-with-icon-form-group">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {label && <label htmlFor={id}>{label}</label>}
        <InputGroup>
          <DateTimePicker
            className="datetime-picker"
            value={value}
            disabled={disabled}
            onChange={setterCallback}
            renderInput={params => (
              <TextField
                disabled={disabled}
                id={id}
                variant="outlined"
                {...params}
              />
            )}
          />
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              paddingLeft: '8px',
            }}
          >
            {dayjs().tz(dayjs.tz.guess()).format('z')}
          </span>
        </InputGroup>
      </LocalizationProvider>
    </Form.Group>
  )
}
