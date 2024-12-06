import { EvaluationRoundLimitInput } from '../input_models/models'
import { EvaluationRoundLimitType } from '@sage-bionetworks/synapse-types'
import {
  EvaluationRoundLimitOptions,
  EvaluationRoundLimitOptionsProps,
} from './EvaluationRoundLimitOptions'
import { useState } from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'

const onChangeSpy = jest.fn()

function renderComponent(
  props: Omit<EvaluationRoundLimitOptionsProps, 'onChange'>,
) {
  function StatefulTestWrapper(
    props: Omit<EvaluationRoundLimitOptionsProps, 'onChange'>,
  ) {
    const [limitInput, setLimitInput] = useState(props.limitInput)
    onChangeSpy.mockImplementation(setLimitInput)
    return (
      <EvaluationRoundLimitOptions
        {...props}
        limitInput={limitInput}
        onChange={onChangeSpy}
      />
    )
  }
  return render(<StatefulTestWrapper {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('test evaluation round limit option', () => {
  const limitInput: EvaluationRoundLimitInput = {
    type: 'MONTHLY',
    maxSubmissionString: '34',
  }

  it('no limit options disabled', () => {
    const emptySelectedTypes = new Set<EvaluationRoundLimitType>()
    renderComponent({
      limitInput,
      allSelectedTypes: emptySelectedTypes,
    })

    const select = screen.getByRole('combobox')
    const options = within(select).getAllByRole('option')
    expect(options).toHaveLength(3)

    options.forEach(option => {
      expect(option).not.toBeDisabled()
    })
  })

  it('some options disabled', () => {
    const selectedTypes = new Set<EvaluationRoundLimitType>([
      'MONTHLY',
      'WEEKLY',
    ])
    renderComponent({
      limitInput,
      allSelectedTypes: selectedTypes,
    })

    const select = screen.getByRole('combobox')
    const options = within(select).getAllByRole<HTMLOptionElement>('option')

    // the same type as the initial display won't be disabled
    expect(
      options.find(option => option.value === 'MONTHLY'),
    ).not.toBeDisabled()
    //was never in the set
    expect(options.find(option => option.value === 'DAILY')).not.toBeDisabled()

    //was in the set and not the initial display
    expect(options.find(option => option.value === 'WEEKLY')).toBeDisabled()
  })

  it('onChange limit type', async () => {
    const emptySelectedTypes = new Set<EvaluationRoundLimitType>([
      'MONTHLY',
      'WEEKLY',
    ])
    renderComponent({
      limitInput,
      allSelectedTypes: emptySelectedTypes,
    })

    const select = screen.getByRole('combobox')
    await userEvent.selectOptions(select, 'DAILY')

    expect(onChangeSpy).toHaveBeenCalledWith({
      type: 'DAILY',
      maxSubmissionString: '34',
    })
  })

  it('onChange max submissions', async () => {
    const emptySelectedTypes = new Set<EvaluationRoundLimitType>([
      'MONTHLY',
      'WEEKLY',
    ])
    renderComponent({
      limitInput,
      allSelectedTypes: emptySelectedTypes,
    })

    const textInput = screen.getByRole<HTMLInputElement>('textbox')
    expect(textInput.value).toBe('34')

    await userEvent.clear(textInput)
    await userEvent.type(textInput, '999')

    await waitFor(() =>
      expect(onChangeSpy).toHaveBeenCalledWith({
        type: 'MONTHLY',
        maxSubmissionString: '999',
      }),
    )
  })
})
