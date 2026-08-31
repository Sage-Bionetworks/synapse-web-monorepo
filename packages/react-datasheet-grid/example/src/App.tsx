import { useState } from 'react'
import {
  checkboxColumn,
  Column,
  DataSheetGrid,
  keyColumn,
  textColumn,
} from '../../src'
import '../../src/style.css'

type Row = {
  active: boolean
  firstName: string | null
  lastName: string | null
  email: string | null
  company: string | null
  department: string | null
}

function App() {
  const [data, setData] = useState<Row[]>([
    {
      active: true,
      firstName: 'Elon',
      lastName: 'Musk',
      email: 'elon@tesla.com',
      company: 'Tesla',
      department: 'CEO',
    },
    {
      active: false,
      firstName: 'Jeff',
      lastName: 'Bezos',
      email: 'jeff@amazon.com',
      company: 'Amazon',
      department: 'Founder',
    },
    {
      active: true,
      firstName: 'Tim',
      lastName: 'Cook',
      email: 'tim@apple.com',
      company: 'Apple',
      department: 'CEO',
    },
    {
      active: false,
      firstName: 'Sundar',
      lastName: 'Pichai',
      email: 'sundar@google.com',
      company: 'Google',
      department: 'CEO',
    },
  ])

  const columns: Column<Row>[] = [
    {
      ...keyColumn<Row, 'active'>('active', checkboxColumn),
      title: 'Active',
      grow: 0.5,
    },
    {
      ...keyColumn<Row, 'firstName'>('firstName', textColumn),
      title: 'First name',
    },
    {
      ...keyColumn<Row, 'lastName'>('lastName', textColumn),
      title: 'Last name',
    },
    {
      ...keyColumn<Row, 'email'>('email', textColumn),
      title: 'Email',
      grow: 2,
    },
    {
      ...keyColumn<Row, 'company'>('company', textColumn),
      title: 'Company',
    },
    {
      ...keyColumn<Row, 'department'>('department', textColumn),
      title: 'Department',
    },
  ]

  return (
    <div
      style={{
        margin: '50px',
        padding: '50px',
        maxWidth: '600px',
        background: '#f3f3f3',
      }}
    >
      <DataSheetGrid
        value={data}
        onChange={setData}
        columns={columns}
        pinFirstColumn={true}
      />
    </div>
  )
}

export default App
