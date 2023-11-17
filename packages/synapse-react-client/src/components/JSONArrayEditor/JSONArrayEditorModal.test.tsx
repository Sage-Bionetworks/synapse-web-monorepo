import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import JSONArrayEditorModal, {
  JSONArrayEditorModalProps,
} from './JSONArrayEditorModal'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

function renderComponent(props: JSONArrayEditorModalProps) {
  return render(<JSONArrayEditorModal {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(props: JSONArrayEditorModalProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  const showPasteValuesButton = await screen.findByRole<HTMLButtonElement>(
    'button',
    {
      name: 'Paste new values',
    },
  )

  const confirmModalButton = await screen.findByRole<HTMLButtonElement>(
    'button',
    {
      name: 'OK',
    },
  )

  const cancelModalButton = await screen.findByRole<HTMLButtonElement>(
    'button',
    {
      name: 'Cancel',
    },
  )

  // This button only appears if there are no items in the array
  const addFirstItemButton = screen.queryByRole('button', { name: 'Add item' })

  return {
    component,
    user,
    showPasteValuesButton,
    confirmModalButton,
    cancelModalButton,
    addFirstItemButton,
  }
}

describe('JSONArrayEditorModal', () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('Can enter values', async () => {
    const { user, addFirstItemButton, confirmModalButton } = await setUp({
      isShowingModal: true,
      onConfirm,
      onCancel,
    })

    expect(addFirstItemButton).toBeInTheDocument()
    await user.click(addFirstItemButton!)

    const firstInput = await screen.findByRole('textbox')
    await user.type(firstInput, 'first value')

    const addValueButton = await screen.findByRole('button', {
      name: 'Add Item',
    })
    await user.click(addValueButton)
    const secondInput = (await screen.findAllByRole('textbox'))[1]
    await user.type(secondInput, 'second value')

    await user.click(confirmModalButton)

    expect(onConfirm).toHaveBeenCalledWith(['first value', 'second value'])
  })
  it('Can append by entering CSV', async () => {
    const textToPaste = 'second value,third value,fourth value'
    const {
      user,
      addFirstItemButton,
      showPasteValuesButton,
      confirmModalButton,
    } = await setUp({
      isShowingModal: true,
      onConfirm,
      onCancel,
    })

    expect(addFirstItemButton).toBeInTheDocument()
    await user.click(addFirstItemButton!)

    const firstInput = await screen.findByRole('textbox')
    await user.type(firstInput, 'first value')

    await user.click(showPasteValuesButton)

    const pasteValuesInput = await screen.findByLabelText(
      'CSV or TSV to Append',
    )

    await user.click(pasteValuesInput)
    await user.paste(textToPaste)

    const confirmAppendPasteButton = await screen.findByRole('button', {
      name: 'Add',
    })
    await user.click(confirmAppendPasteButton)

    await waitFor(() => {
      expect(pasteValuesInput).not.toBeVisible()
      expect(screen.getAllByRole('textbox')).toHaveLength(4)
    })

    await user.click(confirmModalButton)
    expect(onConfirm).toHaveBeenCalledWith([
      'first value',
      'second value',
      'third value',
      'fourth value',
    ])
  })
  it('Can append by entering TSV', async () => {
    const textToPaste = 'second value\tthird value\tfourth value'
    const {
      user,
      addFirstItemButton,
      showPasteValuesButton,
      confirmModalButton,
    } = await setUp({
      isShowingModal: true,
      onConfirm,
      onCancel,
    })

    expect(addFirstItemButton).toBeInTheDocument()
    await user.click(addFirstItemButton!)

    const firstInput = await screen.findByRole('textbox')
    await user.type(firstInput, 'first value')

    await user.click(showPasteValuesButton)

    const pasteValuesInput = await screen.findByLabelText(
      'CSV or TSV to Append',
    )

    await user.click(pasteValuesInput)
    await user.paste(textToPaste)

    const confirmAppendPasteButton = await screen.findByRole('button', {
      name: 'Add',
    })
    await user.click(confirmAppendPasteButton)

    await waitFor(() => {
      expect(pasteValuesInput).not.toBeVisible()
      expect(screen.getAllByRole('textbox')).toHaveLength(4)
    })

    await user.click(confirmModalButton)
    expect(onConfirm).toHaveBeenCalledWith([
      'first value',
      'second value',
      'third value',
      'fourth value',
    ])
  })
  it('Does not append pasted values when paste is cancelled', async () => {
    const textToPaste = 'second value,third value,fourth value'
    const {
      user,
      addFirstItemButton,
      showPasteValuesButton,
      confirmModalButton,
    } = await setUp({
      isShowingModal: true,
      onConfirm,
      onCancel,
    })

    expect(addFirstItemButton).toBeInTheDocument()
    await user.click(addFirstItemButton!)

    const firstInput = await screen.findByRole('textbox')
    await user.type(firstInput, 'first value')

    await user.click(showPasteValuesButton)

    const pasteValuesInput = await screen.findByLabelText(
      'CSV or TSV to Append',
    )

    await user.click(pasteValuesInput)
    await user.paste(textToPaste)

    // The modal also has a cancel button, so let's grab the first one, which should be for pasting values
    const cancelPasteButton = (
      await screen.findAllByRole('button', {
        name: 'Cancel',
      })
    )[0]
    await user.click(cancelPasteButton)
    expect(onCancel).not.toHaveBeenCalled()

    await waitFor(() => {
      expect(pasteValuesInput).not.toBeVisible()
      expect(screen.getAllByRole('textbox')).toHaveLength(1)
    })

    await user.click(confirmModalButton)
    expect(onConfirm).toHaveBeenCalledWith(['first value'])
  })
  it('Handles cancelling the modal', async () => {
    const { user, addFirstItemButton, cancelModalButton } = await setUp({
      isShowingModal: true,
      onConfirm,
      onCancel,
    })

    expect(addFirstItemButton).toBeInTheDocument()
    await user.click(addFirstItemButton!)

    const firstInput = await screen.findByRole('textbox')
    await user.type(firstInput, 'first value')

    const addValueButton = await screen.findByRole('button', {
      name: 'Add Item',
    })
    await user.click(addValueButton)
    const secondInput = (await screen.findAllByRole('textbox'))[1]
    await user.type(secondInput, 'second value')

    await user.click(cancelModalButton)

    expect(onCancel).toHaveBeenCalled()
    expect(onConfirm).not.toHaveBeenCalled()
  })
  it('Shows initial values', async () => {
    const initialValues = ['foo', 'bar']
    const { user, addFirstItemButton, confirmModalButton } = await setUp({
      isShowingModal: true,
      onConfirm,
      onCancel,
      value: initialValues,
    })

    expect(addFirstItemButton).not.toBeInTheDocument()

    const inputs = await screen.findAllByRole('textbox')

    const firstInput = inputs[0]
    expect(firstInput).toHaveValue('foo')

    const secondInput = inputs[1]
    expect(secondInput).toHaveValue('bar')

    await user.click(confirmModalButton)
    expect(onConfirm).toHaveBeenCalledWith(['foo', 'bar'])
  })
})
