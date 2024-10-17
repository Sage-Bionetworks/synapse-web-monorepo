import React, { useEffect, useState } from 'react'
import { LoadingItem, tcItem } from './TermsAndConditionsItem'
import TermsAndConditionsItem from './TermsAndConditionsItem'
import { Button, Link } from '@mui/material'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  URL_TERMS_CONDITIONS_AGREEMENT,
} from '../../utils/SynapseConstants'
import { useGetFullTableQueryResults } from '../../synapse-queries'

export type TermsAndConditionsProps = {
  onFormChange: (formComplete: boolean) => void
  termsAndConditionsTableID?: string
  termsAndConditionsTableVersion?: string
  hideLinkToFullTC?: boolean
}

const TermsAndConditions: React.FunctionComponent<TermsAndConditionsProps> = ({
  termsAndConditionsTableID = 'syn51718002',
  termsAndConditionsTableVersion = '5',
  onFormChange,
  hideLinkToFullTC = false,
}) => {
  const [tcList, setTcList] = useState<tcItem[]>([])
  // Fetch the table data
  const { data, isLoading } = useGetFullTableQueryResults(
    {
      entityId: termsAndConditionsTableID,
      query: {
        sql: `SELECT * FROM ${termsAndConditionsTableID}.${termsAndConditionsTableVersion} ORDER BY order asc`,
      },
      partMask: BUNDLE_MASK_QUERY_RESULTS,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    },
    { staleTime: Infinity },
    true, // force this query to be run as the anonymous user (without an access token)
  )

  // update tcList when data changes (transform)
  useEffect(() => {
    if (data && data.queryResult && data.queryResult.queryResults) {
      const { rows, headers } = data.queryResult.queryResults
      const iconColIndex = headers.findIndex(col => col.name === 'icon')
      const labelColIndex = headers.findIndex(col => col.name === 'label')
      const descriptionColIndex = headers.findIndex(
        col => col.name === 'description',
      )
      const newTcList: tcItem[] = []
      rows.forEach(row => {
        const { values } = row
        const item: tcItem = {
          iconFileHandleId: values[iconColIndex] ?? '',
          label: values[labelColIndex] ?? '',
          description: values[descriptionColIndex] ?? '',
        }
        newTcList.push(item)
      })
      setTcList(newTcList)
      const checkboxCount = newTcList.length
      setCheckboxChecked(getInitialCheckboxState(checkboxCount))
      // disabled all checkbox except the first one
      setCheckboxEnabled(
        getInitialCheckboxState(checkboxCount).fill(true, 0, 1),
      )
    }
  }, [data])

  const governancePolicy =
    'https://help.synapse.org/docs/Synapse-Governance.2004255211.html'
  const getInitialCheckboxState = (checkboxCount: number) =>
    Array.from(Array(checkboxCount).fill(false))
  let mounted = true

  // State variables
  const [checkboxChecked, setCheckboxChecked] = useState<boolean[]>([])
  const [checkboxEnabled, setCheckboxEnabled] = useState<boolean[]>([])

  useEffect(() => {
    if (mounted) {
      checkFormCompleted()
    }
    return () => {
      mounted = false
    }
  }, [checkboxEnabled, checkboxChecked])

  // Placeholder function to check if all checkboxes are checked and agreement is signed
  const checkFormCompleted = () => {
    const allCheckboxChecked =
      checkboxChecked.length > 0 && !checkboxChecked.includes(false)
    onFormChange(allCheckboxChecked)
  }

  const updateCheckboxState = (id: number) => {
    const newState = !checkboxChecked[id]
    const checkboxCount = checkboxChecked.length
    if (newState) {
      // if the checkbox is checked (i.e. newState is true)
      setCheckboxChecked(
        getInitialCheckboxState(checkboxCount).fill(true, 0, id + 1),
      )
      if (id + 2 <= tcList.length) {
        setCheckboxEnabled(
          getInitialCheckboxState(checkboxCount).fill(true, 0, id + 2),
        )
      }
    } else {
      setCheckboxChecked(
        getInitialCheckboxState(checkboxCount).fill(true, 0, id),
      )
      setCheckboxEnabled(
        getInitialCheckboxState(checkboxCount).fill(true, 0, id + 1),
      )
    }
  }

  return (
    <section className="terms-conditions">
      <h3 className="page-header">Synapse Pledge</h3>
      <form>
        <label>
          I affirm my commitment to all{' '}
          <Link target="_blank" href={governancePolicy}>
            Sage Governance policies
          </Link>{' '}
          for responsible research and data handling (linked below), including:
        </label>
        <ul className="term-list">
          {isLoading && <LoadingItem numLoadingItems={6} />}
          {tcList.length > 0 &&
            tcList.map((item, i) => {
              return (
                <TermsAndConditionsItem
                  key={`tc-item-${i}`}
                  item={item}
                  id={i}
                  checked={checkboxChecked[i]}
                  enabled={checkboxEnabled[i]}
                  termsAndConditionsTableID={termsAndConditionsTableID}
                  onChange={updateCheckboxState}
                />
              )
            })}
        </ul>
        {!hideLinkToFullTC && (
          <div className="view-terms">
            <Button
              variant={'contained'}
              href={URL_TERMS_CONDITIONS_AGREEMENT}
              target="_blank"
            >
              View Complete Terms and Conditions for Use
            </Button>
          </div>
        )}
      </form>
    </section>
  )
}

export default TermsAndConditions
