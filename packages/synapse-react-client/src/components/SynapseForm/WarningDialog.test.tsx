import * as _ from 'lodash-es'

import WarningDialog, { WarningDialogProps } from './WarningDialog'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const renderComponent = (props: WarningDialogProps) => {
  return render(<WarningDialog {...props} />)
}

describe('WarningDialog', () => {
  const mock = {
    confirmFn: jest.fn(() => Promise.resolve({ value: 'ok' })),
  }

  const props: WarningDialogProps = {
    title: 'Some Warning',
    content: 'Some Copy',
    confirmButtonText: 'Do it!',
    open: true,
    onConfirm: mock.confirmFn,
    onCancel: _.noop,
    onConfirmCallbackArgs: ['one', 'two'],
  }

  test('should display the modal with correct text', () => {
    renderComponent(props)
    const dialog = screen.getByRole('dialog')
    within(dialog.querySelector('.MuiDialogTitle-root')!).getByText(props.title)
    within(dialog.querySelector('.MuiDialogContent-root')!).getByText(
      props.content as string,
    )
    screen.getByRole('button', { name: props.confirmButtonText })
  })

  test('should call callback fn with correct arguments', async () => {
    const spy = jest.spyOn(mock, 'confirmFn')
    renderComponent(props)
    const btn = screen.getByRole('button', { name: props.confirmButtonText })
    await userEvent.click(btn)
    expect(spy).toHaveBeenCalledWith('one', 'two')
  })
})
