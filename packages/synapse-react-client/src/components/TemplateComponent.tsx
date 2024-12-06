import { useState } from 'react'

type Props = {
  userId: string
}

export default function TemplateComponent({ userId }: Props) {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <button
        style={{ backgroundColor: 'blue', color: 'white' }}
        onClick={() => setCount(count + 1)}
      >
        Click to increment count!
      </button>
      <p> Count = {count} </p>

      <p> Passed in userId = {userId} </p>
    </div>
  )
}
