import { render, screen, within } from '@testing-library/react'
import React from 'react'
import {
  ProjectStorageLimitAlert,
  ProjectStorageLimitAlertProps,
} from './ProjectStorageLimitAlert'

describe('ProjectStorageLimitAlert', () => {
  function renderComponent(props: ProjectStorageLimitAlertProps) {
    return render(<ProjectStorageLimitAlert {...props} />)
  }

  it('Shows nothing if there is no limit', () => {
    renderComponent({
      usage: {
        maxAllowedFileBytes: undefined,
        sumFileBytes: 0,
        storageLocationId: 0,
        isOverLimit: false,
      },
      didUploadsExceedLimit: false,
    })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('Shows nothing if the warning threshold is not crossed', () => {
    const limit = 1024 * 1024 * 100
    renderComponent({
      usage: {
        maxAllowedFileBytes: limit,
        sumFileBytes: limit / 2,
        storageLocationId: 0,
        isOverLimit: false,
      },
      didUploadsExceedLimit: false,
    })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('Shows an alert if the usage is over the warning threshold', () => {
    const limit = 1024 * 1024 * 100
    renderComponent({
      usage: {
        maxAllowedFileBytes: limit,
        sumFileBytes: limit * 0.9,
        storageLocationId: 0,
        isOverLimit: false,
      },
      didUploadsExceedLimit: false,
    })

    const alert = screen.getByRole('alert')
    within(alert).getByText('Warning: Your storage availability is limited')
  })

  it('Shows an alert if the usage is over the limit', () => {
    const limit = 1024 * 1024 * 100
    renderComponent({
      usage: {
        maxAllowedFileBytes: limit,
        sumFileBytes: limit * 1.1,
        storageLocationId: 0,
        isOverLimit: true,
      },
      didUploadsExceedLimit: false,
    })

    const alert = screen.getByRole('alert')
    within(alert).getByText('You have no data availability')
  })

  it('Shows an alert if uploads exceed the limit', () => {
    const limit = 1024 * 1024 * 100
    renderComponent({
      usage: {
        maxAllowedFileBytes: limit,
        sumFileBytes: limit * 0.9,
        storageLocationId: 0,
        isOverLimit: false,
      },
      didUploadsExceedLimit: true,
    })

    const alert = screen.getByRole('alert')
    within(alert).getByText('Selected files exceed available storage')
  })
})
