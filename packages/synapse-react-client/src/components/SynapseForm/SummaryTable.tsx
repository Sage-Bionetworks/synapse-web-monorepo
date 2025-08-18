import { UiSchema } from '@rjsf/utils'
import { FormSchema, Step, SummaryFormat } from './types'
import {
  cloneDeep,
  find,
  first,
  get,
  isArray,
  isDate,
  isObject,
  isString,
  keys,
} from 'lodash-es'

export interface SummaryTableProps {
  isWizard?: boolean
  formData: any
  callbackFn?: (screenId: string) => void
  steps: Step[]
  schema: FormSchema
  uiSchema: UiSchema
}

function findLabel(key: string, schema: any, uiSchema: UiSchema): string {
  const regex1 = /\[\d+\]\./g
  const regex3 = /\.(\d)+/g

  key = key.replace(regex3, '[$1]')

  const propArr = key.split('.')
  // some things require labels in schema (e.g. checkboxes) so this is preferred
  const labelFromSchema = `${propArr.join('.properties.')}.title`
  //can be overriden by label in UI
  const labelFromUi = `${key}.ui:title`
  //for array fields we need to change the property e.g.
  //  ld50.experiments[0].species_other should look like 'ld50.experiments.items.species_other'
  const arrayLabelFromSchema = labelFromSchema.replace(regex1, '.items.')
  const arrayLabelFromUiSchema = labelFromUi.replace(regex1, '.items.')
  const indexMatch = labelFromSchema.match(regex1)
  let index = first(indexMatch)

  if (index) {
    index = index.substring(1, index.length - 2)
    index = !isNaN(parseInt(index)) ? `${parseInt(index) + 1}` : ''
  }

  const label =
    get(uiSchema, labelFromUi) ||
    get(schema.properties, labelFromSchema) ||
    get(uiSchema, arrayLabelFromUiSchema) ||
    get(schema.properties, arrayLabelFromSchema) ||
    `${arrayLabelFromSchema}`
  return `${index ? '[' + index + '] ' : ''}${label}`
}

export function getFlatData(
  formData: any,
  steps: Step[],
  schema: FormSchema,
  uiSchema: UiSchema,
): SummaryFormat[] {
  //takes nested json and converts it into flattened item list

  function flatten(
    object: Record<string, any>,
    flattenedObject: Record<string, any>,
    prefix: string,
  ): Record<string, any> {
    const separator = '.'
    Object.keys(object).forEach(key => {
      if (object[key] === null) {
        flattenedObject[prefix + key] = ''
      } else if (
        //if the value is a proper array
        isArray(object[key]) &&
        !isString(object[key])
      ) {
        object[key].forEach((item: any, i: number) => {
          if (isArray(item) || (isObject(object[key]) && !isString(item))) {
            flatten(item, flattenedObject, `${prefix}${key}[${i}]${separator}`)
          } else {
            let prevVal = flattenedObject[`${prefix}${key}`]
            prevVal = prevVal ? `${prevVal}, ` : ''
            flattenedObject[`${prefix}${key}`] = prevVal + item
          }
        })
      } else if (isObject(object[key]) && !isDate(object[key])) {
        flatten(object[key], flattenedObject, `${prefix}${key}${separator}`)
      } else {
        flattenedObject[prefix + key] = object[key]
      }
    })
    return flattenedObject
  }

  const flatData = flatten(cloneDeep(formData), {}, '')
  console.log(flatData)
  const flatFormData = keys(flatData)
    .map(key => {
      let val = flatData[key]
      if (flatData[key] === false) {
        val = 'false'
      }
      if (flatData[key] === true) {
        val = 'true'
      }
      const boundary = key.indexOf('.')
      return {
        screen: find(steps, { id: key.substring(0, boundary) }),
        label: findLabel(key, schema, uiSchema),
        value: val,
      }
    })
    .filter(item => item.label.indexOf('.properties.included.title') === -1) //included is the property we generate to help with validation of optional forms

  const result = flatFormData
    .filter(item => item.screen && typeof item.value !== 'undefined')
    .map(item => {
      return {
        label: item.label,
        value: item.value,
        screen: item.screen!,
      }
    })
    .sort((a, b) => a.screen.order - b.screen.order)

  return result
}

export default function SummaryTable(props: SummaryTableProps) {
  let flatFormData: SummaryFormat[] = []

  flatFormData = getFlatData(
    cloneDeep(props.formData),
    props.steps,
    props.schema,
    props.uiSchema,
  )

  let prevScreenId = ''
  const table = (
    <>
      <table className="table summary-table-header">
        <thead>
          <tr>
            <th>Step</th>
            <th>Label</th>
            <th>Value</th>
          </tr>
        </thead>
      </table>

      <div className="scroll-area table-body">
        <table className="table summary-table">
          <tbody>
            {flatFormData.map((line: SummaryFormat, i: number) => {
              return (
                <tr key={`${i}-${line.screen.id}-${line.label}`}>
                  <td>
                    {prevScreenId !== line.screen.id &&
                      (prevScreenId = line.screen.id) && (
                        <span>{line.screen.title}</span>
                      )}
                  </td>
                  <td>{line.label}</td>

                  <td>{line.value}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )

  return (
    <>
      <p className="step-exclude-directions">
        Below is all of the data you have entered. Before submitting, click
        &quot;Validate&quot; to ensure that all of the required data has been
        entered.
      </p>
      <button className="nav-link pull-right" onClick={() => window.print()}>
        Print this data
      </button>
      <div className="panel panel-default padding-full wrap">
        <div className="summary scroll-area">{table}</div>
      </div>
    </>
  )
}
