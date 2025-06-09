import {
  Box,
  FormControl,
  Input,
  InputLabel,
  InputProps,
  Typography,
} from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { ChangeEvent, ReactNode, useId, useState } from 'react'

// TODO: In MUI v6, use TextFieldProps and only add `minWords` and `maxWords`.
export type TextFieldWithWordLimitProps = InputProps & {
  label?: ReactNode
  helperText?: ReactNode
  minWords?: number
  maxWords?: number
}

export function getWordCount(s: string) {
  return (
    s
      .trim()
      .split(/\W+/)
      // remove empty string(s)
      .filter(s => !!s).length
  )
}

function DisplayedWordCount(props: {
  maxWords?: number
  minWords?: number
  wordCount: number
}) {
  const { wordCount, maxWords, minWords } = props

  let color = 'grey.700'
  if (
    wordCount > 0 &&
    ((minWords != null && wordCount < minWords) ||
      (maxWords != null && wordCount > maxWords))
  ) {
    color = 'error.main'
  } else if (wordCount > 0) {
    color = 'success.main'
  }

  let wordCountText = `${wordCount.toLocaleString()}`
  if (maxWords) {
    wordCountText += ` of ${maxWords.toLocaleString()}`
  }
  wordCountText += ' words'
  if (minWords) {
    wordCountText += ` (min. ${minWords.toLocaleString()})`
  }

  return (
    <Typography component={'div'} variant={'smallText1'} sx={{ color: color }}>
      {wordCountText}
    </Typography>
  )
}

/**
 * Wrapper around MUI input components that displays the word count of the input. The appearance of the word count changes
 * based on the validity of the current input.
 * @param props
 * @constructor
 */
export default function TextFieldWithWordLimit(
  props: TextFieldWithWordLimitProps,
) {
  const { minWords, maxWords, label, helperText, ...inputProps } = props
  const { value, onChange } = inputProps

  const generatedId = useId()
  const id = props.id ?? generatedId

  const helperTextId = id + '-helperText'

  const [trackedWordCount, setTrackedWordCount] = useState(0)

  const wordCount =
    typeof value === 'string' ? getWordCount(value) : trackedWordCount

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setTrackedWordCount(getWordCount(newValue))
    onChange?.(event)
  }

  const inputLabelWithWordCount = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%',
      }}
    >
      <InputLabel sx={{ position: 'static' }} htmlFor={id}>
        {label}
      </InputLabel>
      <DisplayedWordCount
        wordCount={wordCount}
        minWords={minWords}
        maxWords={maxWords}
      />
    </Box>
  )

  // TODO: In MUI v6, use MUI TextField and override slots.inputLabel with inputLabelWithWordCount.
  return (
    <FormControl required={props.required} fullWidth={props.fullWidth}>
      {inputLabelWithWordCount}
      <Input
        {...inputProps}
        aria-describedby={helperTextId}
        id={id}
        onChange={handleChange}
      />
      <FormHelperText id={helperTextId}>{props.helperText}</FormHelperText>
    </FormControl>
  )
}
