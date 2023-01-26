import * as React from 'react'
import * as _ from 'lodash-es'

import WarningModal, {
  WarningModalProps,
} from '../../../../lib/containers/synapse_form_wrapper/WarningModal'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const renderComponent = (props: WarningModalProps) => {
  return render(<WarningModal {...props} />)
}

describe('WarningModal', () => {
  const mock = {
    confirmFn: jest.fn(() => Promise.resolve({ value: 'ok' })),
  }

  const props: WarningModalProps = {
    title: 'Some Warning',
    modalBody: 'Some Copy',
    confirmButtonText: 'Do it!',
    show: true,
    onConfirm: mock.confirmFn,
    onCancel: _.noop,
    onConfirmCallbackArgs: ['one', 'two'],
  }

  test('should display the modal with correct text', () => {
    renderComponent(props)
    const dialog = screen.getByRole('dialog')
    within(dialog.querySelector('.modal-title.h4')!).getByText(props.title)
    within(dialog.querySelector('div.modal-body')!).getByText(
      props.modalBody as string,
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
