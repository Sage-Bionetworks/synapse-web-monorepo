import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '@/utils/functions/colorPalette'
import { Box, useTheme } from '@mui/material'

type DivColorTextProps = {
  color: string
}

function DivWithColorText({ color }: DivColorTextProps) {
  const theme = useTheme()
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: color,
          width: '100px',
          height: '20px',
          fontSize: '10px',
          color: color,
          '&:hover': {
            color: theme.palette.getContrastText(color),
          },
        }}
      >
        {color}
      </Box>
    </div>
  )
}

function ColorPaletteInspector() {
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
