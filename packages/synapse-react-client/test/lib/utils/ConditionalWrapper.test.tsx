import React from 'react'
import { render, screen } from '@testing-library/react'
import ConditionalWrapper from '../../../src/lib/containers/utils/ConditionalWrapper'

describe('ConditionalWrapper', () => {
  const WRAPPER_TEXT = 'Wrapper Text'
  const WRAPPER_PROP_TEXT = 'Wrapper Prop Text'
  const INNER_TEXT = 'Inner Text'

  function Wrapper(
    props: React.PropsWithChildren<{ showWrapperPropText: boolean }>,
  ) {
    return (
      <div>
        <p>{WRAPPER_TEXT}</p>
        {props.showWrapperPropText && <p>{WRAPPER_PROP_TEXT}</p>}
        {props.children}
      </div>
    )
  }

  it('should render the wrapper', () => {
    render(
      <ConditionalWrapper
        condition={true}
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
      <ConditionalWrapper condition={false} wrapper={Wrapper}>
        {INNER_TEXT}
      </ConditionalWrapper>,
    )
    expect(screen.queryByText(WRAPPER_TEXT)).not.toBeInTheDocument()
    screen.findByText(INNER_TEXT)
  })
})
