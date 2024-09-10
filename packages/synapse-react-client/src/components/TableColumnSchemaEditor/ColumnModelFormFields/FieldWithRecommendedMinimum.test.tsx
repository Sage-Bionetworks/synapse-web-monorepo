import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { verifyTooltipText } from '../TableColumnSchemaEditorTestUtils'
import {
  FieldWithRecommendedMinimum,
  FieldWithRecommendedValueProps,
} from './FieldWithRecommendedMinimum'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import userEvent from '@testing-library/user-event'

function setUp(props: FieldWithRecommendedValueProps) {
  const user = userEvent.setup()
  const component = render(<FieldWithRecommendedMinimum {...props} />)

  return { user, component }
}

describe('FieldWithRecommendedMinimum', () => {
  it('Shows no message when the current value matches the original value', async () => {
    const { user } = setUp({
      value: 200,
      originalValue: 200,
      columnType: ColumnTypeEnum.STRING,
    })
    const textField = await screen.findByRole('textbox')

    await waitFor(() => expect(textField).not.toBeDisabled())

    // Verify there is no tooltip
    await expect(
      verifyTooltipText(
        textField,
        /This value has changed since the table was last saved./,
        user,
        100,
      ),
    ).rejects.toThrow()
  })

  it('Shows no message when there is no existing value', async () => {
    const { user } = setUp({
      value: 200,
      originalValue: undefined,
      columnType: ColumnTypeEnum.STRING,
    })
    const textField = await screen.findByRole('textbox')

    await waitFor(() => expect(textField).not.toBeDisabled())

    // Verify there is no tooltip
    await expect(
      verifyTooltipText(
        textField,
        /This value has changed since the table was last saved./,
        user,
        100,
      ),
    ).rejects.toThrow()
  })

  it('Shows warning when form data size of annotation column is less than recommended size', async () => {
    const { user } = setUp({
      value: 200,
      recommendedValue: 250,
      originalValue: 200,
      columnType: ColumnTypeEnum.STRING,
    })
    const textField = await screen.findByRole('textbox')

    // Verify we have a warning in display on hover
    await verifyTooltipText(textField, /Recommended size is 250/, user)
  })

  it('Does not show warning when form data size of annotation column is equal to recommended size', async () => {
    const { user } = setUp({
      value: 200,
      recommendedValue: 200,
      originalValue: 200,
      columnType: ColumnTypeEnum.STRING,
    })
    const textField = await screen.findByRole('textbox')

    // Verify we have a warning in display on hover
    await expect(
      verifyTooltipText(textField, /Recommended size is 200/, user),
    ).rejects.toThrow()
  })

  it("Shows info when a column's maximum size was manually changed", async () => {
    const { user } = setUp({
      value: 200,
      recommendedValue: 200,
      originalValue: 300,
      columnType: ColumnTypeEnum.STRING,
    })
    const textField = await screen.findByRole('textbox')

    // Verify we have info displayed on hover
    await verifyTooltipText(
      textField,
      /This value has changed since the table was last saved.\s*The last saved value was 300./,
      user,
    )
  })
})
