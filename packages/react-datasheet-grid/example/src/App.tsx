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

const baseRows: Row[] = [
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
]

// The grid only grows as tall as its content until it reaches its max height,
// so the handful of rows shown by default never scrolls vertically. A ?rows=
// search param repeats the demo data (numbering each row so an individual one
// can be identified) to get a scrollable grid.
function getInitialRows(): Row[] {
  const requested = Number(
    new URLSearchParams(window.location.search).get('rows'),
  )

  if (!Number.isFinite(requested) || requested <= baseRows.length) {
    return baseRows
  }

  return Array.from({ length: requested }, (_, index) => {
    const row = baseRows[index % baseRows.length]
    return { ...row, firstName: `${row.firstName} ${index}` }
  })
}

function App() {
  const [data, setData] = useState<Row[]>(getInitialRows)

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
