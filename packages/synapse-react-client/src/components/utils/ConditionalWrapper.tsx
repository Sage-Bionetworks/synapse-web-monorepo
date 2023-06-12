import React from 'react'

type ConditionalWrapperProps<
  TWrapper extends React.ComponentType<React.PropsWithChildren> = React.ComponentType<React.PropsWithChildren>,
> = {
  condition: boolean
  wrapper: TWrapper
  wrapperProps?: Omit<React.ComponentProps<TWrapper>, 'children'>
  children: React.ReactNode
}

export default function ConditionalWrapper(props: ConditionalWrapperProps) {
  const { condition, wrapper: Wrapper, wrapperProps, children } = props

  return condition ? (
    <Wrapper {...wrapperProps}>{children}</Wrapper>
  ) : (
    <>{children}</>
  )
}
