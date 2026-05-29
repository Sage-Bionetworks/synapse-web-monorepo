import {
  ComponentProps,
  ComponentType,
  PropsWithChildren,
  ReactNode,
} from 'react'

type ConditionalWrapperProps<
  TWrapper extends ComponentType<PropsWithChildren> = ComponentType<PropsWithChildren>,
> = {
  condition: boolean
  wrapper: TWrapper
  wrapperProps?: Omit<ComponentProps<TWrapper>, 'children'>
  children: ReactNode
}

export default function ConditionalWrapper(props: ConditionalWrapperProps) {
  const { condition, wrapper: Wrapper, wrapperProps, children } = props

  return condition ? (
    <Wrapper {...wrapperProps}>{children}</Wrapper>
  ) : (
    <>{children}</>
  )
}
