import { render, screen } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import ConditionalWrapper from './ConditionalWrapper'

const WRAPPER_TEXT = 'Wrapper Text'
const WRAPPER_PROP_TEXT = 'Wrapper Prop Text'
const INNER_TEXT = 'Inner Text'

type WrapperProps = PropsWithChildren<{ showWrapperPropText: boolean }>

function Wrapper(props: WrapperProps) {
  return (
    <div>
      <p>{WRAPPER_TEXT}</p>
      {props.showWrapperPropText && <p>{WRAPPER_PROP_TEXT}</p>}
      {props.children}
    </div>
  )
}

describe('ConditionalWrapper', () => {
  it('should render the wrapper', () => {
    render(
      <ConditionalWrapper
        condition={true}
        // @ts-expect-error -- types don't work for the test component for some reason
        wrapper={Wrapper}
        wrapperProps={{ showWrapperPropText: true }}
      >
        {INNER_TEXT}
      </ConditionalWrapper>,
    )
    screen.findByText(WRAPPER_TEXT)
    screen.findByText(WRAPPER_PROP_TEXT)
    screen.findByText(INNER_TEXT)
  })

  it('should not render the wrapper', () => {
    render(
      <ConditionalWrapper
        condition={false}
        // @ts-expect-error -- types don't work for the test component for some reason
        wrapper={Wrapper}
      >
        {INNER_TEXT}
      </ConditionalWrapper>,
    )
    expect(screen.queryByText(WRAPPER_TEXT)).not.toBeInTheDocument()
    screen.findByText(INNER_TEXT)
  })
})
