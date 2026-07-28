import { TaskStatusStateEnum } from '@sage-bionetworks/synapse-client'
import { describe, expect, it } from 'vitest'
import {
  DESTINATION_TASK_MISSING_MESSAGE,
  EXECUTABLE_TASK_NO_PERMISSION_MESSAGE,
  getExecutableTaskButtonState,
  RUN_AGENT_BUTTON_TEXT,
  RUNNING_BUTTON_TEXT,
  VIEW_RESULT_BUTTON_TEXT,
} from './getExecutableTaskButtonState'

describe('getExecutableTaskButtonState', () => {
  describe('NOT_STARTED', () => {
    it('offers to start the task when the user can execute', () => {
      const result = getExecutableTaskButtonState({
        state: TaskStatusStateEnum.NOT_STARTED,
        canExecute: true,
        isExecutePending: false,
        destinationTaskId: 456,
      })
      expect(result).toEqual({
        buttonText: RUN_AGENT_BUTTON_TEXT,
        action: 'start',
        disabled: false,
        loading: false,
        tooltip: undefined,
      })
    })

    it('is disabled with a tooltip when the user cannot execute', () => {
      const result = getExecutableTaskButtonState({
        state: TaskStatusStateEnum.NOT_STARTED,
        canExecute: false,
        isExecutePending: false,
        destinationTaskId: 456,
      })
      expect(result).toEqual({
        buttonText: RUN_AGENT_BUTTON_TEXT,
        action: 'none',
        disabled: true,
        loading: false,
        tooltip: EXECUTABLE_TASK_NO_PERMISSION_MESSAGE,
      })
    })
  })

  describe('running', () => {
    it('shows a loading Running button when the task is EXECUTING', () => {
      const result = getExecutableTaskButtonState({
        state: TaskStatusStateEnum.EXECUTING,
        canExecute: true,
        isExecutePending: false,
        destinationTaskId: 456,
      })
      expect(result).toEqual({
        buttonText: RUNNING_BUTTON_TEXT,
        action: 'none',
        disabled: true,
        loading: true,
        tooltip: undefined,
      })
    })

    it('shows a loading Running button while the execute mutation is pending, even when NOT_STARTED', () => {
      const result = getExecutableTaskButtonState({
        state: TaskStatusStateEnum.NOT_STARTED,
        canExecute: true,
        isExecutePending: true,
        destinationTaskId: 456,
      })
      expect(result).toEqual({
        buttonText: RUNNING_BUTTON_TEXT,
        action: 'none',
        disabled: true,
        loading: true,
        tooltip: undefined,
      })
    })
  })

  describe('finished (lenient)', () => {
    const finishedStates = [
      TaskStatusStateEnum.IN_PROGRESS,
      TaskStatusStateEnum.IN_REVIEW,
      TaskStatusStateEnum.COMPLETED,
      TaskStatusStateEnum.CANCELED,
    ]

    it.each(finishedStates)(
      'offers to view the result for state %s when the destination task is present',
      state => {
        const result = getExecutableTaskButtonState({
          state,
          canExecute: true,
          isExecutePending: false,
          destinationTaskId: 456,
        })
        expect(result).toEqual({
          buttonText: VIEW_RESULT_BUTTON_TEXT,
          action: 'viewResult',
          disabled: false,
          loading: false,
          tooltip: undefined,
        })
      },
    )

    it.each(finishedStates)(
      'is disabled with a tooltip for state %s when the destination task is missing',
      state => {
        const result = getExecutableTaskButtonState({
          state,
          canExecute: true,
          isExecutePending: false,
          destinationTaskId: undefined,
        })
        expect(result).toEqual({
          buttonText: VIEW_RESULT_BUTTON_TEXT,
          action: 'none',
          disabled: true,
          loading: false,
          tooltip: DESTINATION_TASK_MISSING_MESSAGE,
        })
      },
    )

    it('offers to view the result regardless of execute permission', () => {
      const result = getExecutableTaskButtonState({
        state: TaskStatusStateEnum.COMPLETED,
        canExecute: false,
        isExecutePending: false,
        destinationTaskId: 456,
      })
      expect(result.action).toBe('viewResult')
      expect(result.disabled).toBe(false)
    })
  })
})
