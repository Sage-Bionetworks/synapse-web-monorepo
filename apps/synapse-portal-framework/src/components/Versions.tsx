import React, { useState, useEffect } from 'react'
import { Tooltip } from '@mui/material'
import dayjs from 'dayjs'

// To test this component, create a deploy_date.txt in the public folder (just like the deploy jobs do):
// date +"%D %T" > ./public/deploy_date.txt

const Versions: React.FunctionComponent = () => {
  const [buildDate, setBuildDate] = useState<string>()
  const [deployDate, setDeployDate] = useState<string>()

  useEffect(() => {
    let isDeployDateFetchCancelled: boolean = false
    const getDeployDate = () => {
      try {
        fetch('/deploy_date.txt').then(v => {
          v?.text().then(txt => {
            // if file does not exist, the main html page might be returned.  version should not contain '<'
            if (!isDeployDateFetchCancelled && txt.indexOf('<') === -1) {
              setDeployDate(dayjs(txt).format('L LT'))
            }
          })
        })
      } catch (err) {
        if (!isDeployDateFetchCancelled) {
          setBuildDate('Error retrieving deploy info')
        }
      }
    }
    getDeployDate()
    return () => {
      isDeployDateFetchCancelled = true
    }
  }, [])

  useEffect(() => {
    let isBuildDateFetchCancelled: boolean = false
    const getBuildDate = () => {
      try {
        fetch('/build-date.txt').then(v => {
          v?.text().then(txt => {
            if (!isBuildDateFetchCancelled) {
              setBuildDate(dayjs(txt).format('L LT'))
            }
          })
        })
      } catch (err) {
        if (!isBuildDateFetchCancelled) {
          setBuildDate('Error retrieving build info')
        }
      }
    }
    getBuildDate()
    return () => {
      isBuildDateFetchCancelled = true
    }
  }, [])

  return (
    <>
      {(deployDate || buildDate) && (
        <Tooltip
          placement="top"
          title={
            <div style={{ textAlign: 'center' }}>
              {buildDate && <>Built: {buildDate}</>}
              <br />
              {deployDate && <>Deployed: {deployDate}</>}
            </div>
          }
        >
          <span>
            <a
              className="Versions"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Sage-Bionetworks/synapse-web-monorepo"
              style={{ opacity: 0.6 }}
            >
              Version Number
            </a>
          </span>
        </Tooltip>
      )}
    </>
  )
}

export default Versions
