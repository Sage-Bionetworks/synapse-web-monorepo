import React from 'react'
import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '../../../src/utils/functions/colorPalette'
import { Box } from '@mui/material'
import tinycolor from 'tinycolor2'

type DivColorTextProps = {
  color: string
}

const DivWithColorText: React.FunctionComponent<DivColorTextProps> = ({
  color,
}) => {
  return (
    <div>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          background: color,
          width: '100px',
          height: '20px',
          fontSize: '10px',
          color: color,
          '&:hover': {
            color: tinycolor(color).isDark() ? 'white' : 'black',
          },
        }}
      >
        {color}
      </Box>
    </div>
  )
}

const ColorPaletteInspector: React.FunctionComponent = () => {
  return (
    <div>
      <h2>Odd Palette</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {COLOR_PALETTE_ODD.reduce(
          (rows: any, key, index) =>
            (index % 5 === 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,

          [],
        ).map((palette: string[], idx: number) => {
          return (
            <div key={'odd' + idx}>
              <p>Odd {idx}</p>
              {palette.map(color => (
                <DivWithColorText key={color} color={color}></DivWithColorText>
              ))}
            </div>
          )
        })}
      </div>
      <hr></hr>
      <h2>Even Palette</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {COLOR_PALETTE_EVEN.reduce(
          (rows: any, key, index) =>
            (index % 5 === 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,

          [],
        ).map((palette: string[], idx: number) => {
          return (
            <div key={'even' + idx}>
              <p>Even {idx}</p>
              {palette.map(color => (
                <DivWithColorText key={color} color={color}></DivWithColorText>
              ))}
            </div>
          )
        })}
      </div>{' '}
    </div>
  )
}

export default ColorPaletteInspector
