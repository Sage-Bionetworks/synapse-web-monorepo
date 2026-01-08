import useListState from './useListState'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

type UserListStateWrapperProps = {
  initialValue: string[]
}

function UseListStateWrapper({ initialValue }: UserListStateWrapperProps) {
  const { list, handleListRemove, handleListChange, appendToList } =
    useListState(initialValue)
  return (
    <div>
      <ul>
        {list.map((el, index) => (
          <li key={el}>
            <input
              value={el}
              onChange={event => handleListChange(index)(event.target.value)}
            />
            <button
              className={'remove-' + String(index)}
              onClick={handleListRemove(index)}
            >
              remove + {el}
            </button>
          </li>
        ))}
      </ul>
      <button className="add" onClick={() => appendToList('new value')}>
        add value
      </button>
    </div>
  )
}

describe('test useListState()', () => {
  const initialList = ['asdf', 'qwerty']

  it('append value', async () => {
    render(<UseListStateWrapper initialValue={initialList} />)

    expect(await screen.findAllByRole('listitem')).toHaveLength(
      initialList.length,
    )

    await userEvent.click(screen.getByText('add value'))

    expect(await screen.findAllByRole('listitem')).toHaveLength(
      initialList.length + 1,
    )
    expect(screen.getAllByRole<HTMLInputElement>('textbox')[2].value).toBe(
      'new value',
    )
  })

  it('remove value', async () => {
    render(<UseListStateWrapper initialValue={initialList} />)
    expect(await screen.findAllByRole('listitem')).toHaveLength(
      initialList.length,
    )

    await userEvent.click(screen.getByText('remove + asdf'))

    expect(await screen.findAllByRole('listitem')).toHaveLength(
      initialList.length - 1,
    )
    expect(screen.getAllByRole<HTMLInputElement>('textbox')[0].value).toBe(
      'qwerty',
    )
  })

  it('update value', async () => {
    render(<UseListStateWrapper initialValue={initialList} />)
    expect(await screen.findAllByRole('listitem')).toHaveLength(
      initialList.length,
    )

    screen.getAllByRole<HTMLInputElement>('textbox')[0].value = 'new value'

    const getInput = () => screen.getAllByRole<HTMLInputElement>('textbox')[1]

    await userEvent.clear(getInput())

    expect(await screen.findAllByRole('listitem')).toHaveLength(
      initialList.length,
    )
    await waitFor(() => expect(getInput().value).toBe(''))

    await userEvent.click(getInput())
    await userEvent.paste('changed value')

    expect(await screen.findAllByRole('listitem')).toHaveLength(
      initialList.length,
    )
    await waitFor(() => expect(getInput().value).toBe('changed value'))
  })
})
