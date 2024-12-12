import $RefParser from '@apidevtools/json-schema-ref-parser'
import { render, screen, within } from '@testing-library/react'
import * as _ from 'lodash-es'
import SummaryTable, { SummaryTableProps } from './SummaryTable'
import { Step } from './types'
import {
  mockFormData as submissionData,
  mockFormSchema as formSchema,
  mockUiSchema as formUiSchema,
  stepsWithUserData,
} from '../../mocks/mock_drug_tool_data'

const stepsArray: Step[] = _.cloneDeep(stepsWithUserData)

const renderComponent = async (props: SummaryTableProps) => {
  const schema = await $RefParser.dereference(props.schema)
  const _props = { ...props, ...{ schema } }
  return render(<SummaryTable {..._props} />)
}

describe('SummaryTable', () => {
  const mock = {
    callbackFn: jest.fn(() => 'ok'),
  }

  const { efficacy, basic, naming } = submissionData

  const props: SummaryTableProps = {
    isWizard: true,
    schema: formSchema,
    uiSchema: formUiSchema,
    formData: {
      efficacy,
      basic,
      naming,
    },
    callbackFn: mock.callbackFn,
    steps: stepsArray,
  }
  const titles = {
    Efficacy: 'Efficacy',
    Basic: 'Basic',
    Naming: 'Naming',
  }

  test('should only display the properties that have values', async () => {
    const modifiedSubmissionData = _.cloneDeep(props.formData)
    modifiedSubmissionData.basic = {
      reqtextfield: undefined,
    }
    const _props = {
      ...props,
      ...{ formData: modifiedSubmissionData },
    }
    const { container } = await renderComponent(_props)
    expect(_props.steps[0].title).toBe(titles.Efficacy)
    expect(
      Object.values(_props.formData.efficacy).filter(
        value => value || value === false,
      ),
    ).not.toHaveLength(0)
    screen.getByText(titles.Efficacy)

    expect(_props.steps[1].title).toBe(titles.Basic)
    expect(
      Object.values(_props.formData.basic).filter(
        value => value || value === false,
      ),
    ).toHaveLength(0)

    expect(screen.queryByText(titles.Basic)).not.toBeInTheDocument()
    expect(_props.steps[2].title).toBe(titles.Naming)
    expect(
      Object.values(_props.formData.naming).filter(
        value => value || value === false,
      ),
    ).not.toHaveLength(0)
    screen.getByText(titles.Naming)
    expect(Object.keys(_props.formData.basic).indexOf('reqtextfield')).not.toBe(
      -1,
    )
    expect(_props.formData.basic.reqtextfield).toBeUndefined()
    expect(screen.queryByText('reqtextfield')).not.toBeInTheDocument()

    expect(
      Object.keys(_props.formData.naming).indexOf('chemical_name'),
    ).not.toBe(-1)
    expect(_props.formData.naming.chemical_name).not.toBeUndefined()
    screen.getByText('Chemical Name')

    const firstColumns = container.querySelectorAll('td:first-child')
    let result = 0
    for (let i = 0; i < firstColumns.length; i++) {
      if (firstColumns[i].textContent !== '') {
        result++
      }
    }
    expect(result).toBe(2)
    expect(firstColumns.length).toBeGreaterThan(2)
  })

  test('should flatten nested data', async () => {
    await renderComponent(props)

    expect(props.formData.efficacy.cell_line_efficacy[0].cell_line).toBe(
      'Cell Line Efficacy Value',
    )

    screen.getByRole('cell', {
      name: '[1] What cell line was used for the efficacy assay?',
    })
    screen.getByRole('cell', { name: 'Cell Line Efficacy Value' })
  })

  test('should not display delete button when isWizard is true', async () => {
    await renderComponent(props)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(1)
    within(buttons[0]).getByText('Print', { exact: false })
  })

  test('should not display delete button when isWizard is false', async () => {
    const _props = { ...props, ...{ isWizard: false } }
    await renderComponent(_props)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(1)
    within(buttons[0]).getByText('Print', { exact: false })
  })
})
