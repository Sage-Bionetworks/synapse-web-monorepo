import * as React from 'react'

import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import {
  SliderItem,
  GetHandleProps,
  GetTrackProps,
} from 'react-compound-slider'
import { RangeValues } from './Range'
import { useState } from 'react'

/**************** RANGE SLIDER SUBCOMPONENTS *********************/

/***  handles ***/

interface IHandleProps {
  domain: number[]
  handle: SliderItem
  getHandleProps: GetHandleProps
}

export const Handle: React.FunctionComponent<IHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => (
  <div
    role="slider"
    className="RangeSlider__handle"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
    }}
    {...getHandleProps(id)}
  />
)

/***   track  ***/
interface ITrackProps {
  source: SliderItem
  target: SliderItem
  getTrackProps: GetTrackProps
}

export const Track: React.FunctionComponent<ITrackProps> = ({
  source,
  target,
  getTrackProps,
}) => (
  <div
    className="RangeSlider__track"
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
)

/***   tick  ***/
interface ITickProps {
  key: string
  tick: SliderItem
  count: number
  mode?: 'SHOWALL' | 'SHOWNONE' | 'SHOWMINMAX'
}

export const Tick: React.FunctionComponent<ITickProps> = ({
  tick,
  count,
  mode = 'SHOWMINMAX',
}) => (
  <div>
    <div
      className="RangeSlider__tick"
      style={{
        left: `${tick.percent}%`,
      }}
    />
    <div
      className="RangeSlider__tickInner"
      style={{
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`,
      }}
    >
      {(mode === 'SHOWALL' ||
        (mode === 'SHOWMINMAX' &&
          (tick.percent == 0 || tick.percent == 100))) &&
        tick.value}
    </div>
  </div>
)

/*************  RANGE SLIDER COMPONENT ****************/

export type RangeSliderProps = React.PropsWithChildren<{
  domain: string[]
  initialValues: RangeValues
  step: number
  doUpdateOnApply?: boolean
  maxTickCount?: number
  onChange: (values: RangeValues) => void
}>

export type RangeSliderState = {
  values: readonly number[]
}

function getInitialValues(initialValues: RangeValues, domain: string[]) {
  const result = [
    initialValues.min ? Number(initialValues.min) : Number(domain[0]),
    initialValues.max ? Number(initialValues.max) : Number(domain[1]),
  ]
  return result
}

export const RangeSlider = ({
  doUpdateOnApply = true,
  ...props
}: RangeSliderProps) => {
  const stringArrToNumArr = (inputArr: string[]) =>
    inputArr.map(value => Number(value))

  const [values, setValues] = useState<number[]>(() =>
    getInitialValues(props.initialValues, props.domain),
  )

  const numDomain = stringArrToNumArr(props.domain)

  const handleSliderChange = (
    values: readonly number[],
    callbackFn?: (values: RangeValues) => void,
  ) => {
    setValues([...values])
    if (callbackFn) {
      callbackFn({ min: values[0], max: values[1] })
    }
  }

  let ticksCount = numDomain[1] - numDomain[0]
  if (props.maxTickCount && ticksCount > props.maxTickCount) {
    ticksCount = props.maxTickCount
  }

  return (
    <div className="RangeSlider">
      <div className="RangeSlider__values">
        {values[0]} - {values[1]}
      </div>
      <div
        className={`RangeSlider__wrapper${
          doUpdateOnApply ? '--flex' : '--block'
        }`}
      >
        <Slider
          mode={1}
          step={props.step}
          domain={stringArrToNumArr(props.domain)}
          className="RangeSlider__slider"
          onChange={(values: readonly number[]) =>
            handleSliderChange(
              values,
              doUpdateOnApply ? undefined : props.onChange,
            )
          }
          values={getInitialValues(props.initialValues, props.domain)}
        >
          <Rail>
            {({ getRailProps }) => (
              <div className="RangeSlider__rail" {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id + handle.percent}
                    handle={handle}
                    domain={stringArrToNumArr(props.domain)}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={true} right={true}>
            {({ tracks, getTrackProps }) => (
              <div>
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={ticksCount}>
            {({ ticks }) => (
              <div>
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
        {doUpdateOnApply && (
          <button
            className="RangeSlider__btnApply"
            onClick={() => props.onChange({ min: values[0], max: values[1] })}
          >
            Apply
          </button>
        )}
      </div>
    </div>
  )
}
