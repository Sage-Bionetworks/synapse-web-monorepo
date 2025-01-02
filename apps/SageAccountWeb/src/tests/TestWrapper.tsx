import { PropsWithChildren } from 'react'
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom'
import AppWrapper from '../AppWrapper'

export type TestWrapperProps = PropsWithChildren<{
  memoryRouterProps?: MemoryRouterProps
}>

export default function TestWrapper(props: TestWrapperProps) {
  return (
    <MemoryRouter {...props.memoryRouterProps}>
      <AppWrapper>{props.children}</AppWrapper>
    </MemoryRouter>
  )
}
