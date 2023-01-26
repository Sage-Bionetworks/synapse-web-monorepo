import React, { useState } from 'react'
import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '../../../lib/utils/functions/colorPalette'

type DivColorInputProps = {
  initialColor: string
}

const DivWithColorInput: React.FunctionComponent<DivColorInputProps> = ({
  initialColor,
}) => {
  const [color, setColor] = useState(initialColor)

  return (
    <div>
      <input
        value={color}
        style={{ width: '135px' }}
        onChange={event => setColor(event.target.value)}
      />

      <div
        style={{
          background: color,
          width: '135px',
          height: '135px',
          borderRadius: '150px',
        }}
      ></div>
    </div>
  )
}

const ColorPaletteInspector: React.FunctionComponent = () => {
  return (
    <div>
      <h2>Color Palette Odd</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {COLOR_PALETTE_ODD.reduce(
          (rows: any, key, index) =>
            (index % 5 === 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,

          [],
        ).map((palette: string[], idx: number) => {
          return (
            <div key={'odd' + idx} style={{ margin: '5px' }}>
              <h4>Odd palette {idx}</h4>
              {palette.map(color => (
                <DivWithColorInput
                  key={color}
                  initialColor={color}
                ></DivWithColorInput>
              ))}
            </div>
          )
        })}
      </div>
      <hr></hr>
      <h2>Color Palette Even</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {COLOR_PALETTE_EVEN.reduce(
          (rows: any, key, index) =>
            (index % 5 === 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,

          [],
        ).map((palette: string[], idx: number) => {
          return (
            <div key={'even' + idx} style={{ margin: '5px' }}>
              <h4>Even palette {idx}</h4>
              {palette.map(color => (
                <DivWithColorInput
                  key={color}
                  initialColor={color}
                ></DivWithColorInput>
              ))}
            </div>
          )
        })}
      </div>{' '}
    </div>
  )
}

export default ColorPaletteInspector
