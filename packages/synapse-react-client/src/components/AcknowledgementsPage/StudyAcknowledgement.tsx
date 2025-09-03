import { useMemo, useState } from 'react'
import MarkdownCollapse from '../Markdown/MarkdownCollapse'
import { transformStringIntoMarkdownProps } from '../Markdown/MarkdownUtils'
import { AcknowledgementItem } from './AcknowledgementsPage'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'

export type StudyAcknowledgementProps = {
  studyName: string
  acknowledgementStatementWikiRef: string
  onSelectChange?: (item: AcknowledgementItem, checked: boolean) => void
}

export function StudyAcknowledgement({
  studyName,
  acknowledgementStatementWikiRef,
  onSelectChange,
}: StudyAcknowledgementProps) {
  const [acknowledgementItem, setAcknowledgementItem] = useState<
    AcknowledgementItem | undefined
  >()
  const [checked, setChecked] = useState(false)
  const setPlainTextResult = (plainText: string) => {
    setAcknowledgementItem({
      title: studyName,
      statement: plainText,
    })
  }
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setChecked(isChecked)
    if (acknowledgementItem && onSelectChange) {
      onSelectChange(acknowledgementItem, isChecked)
    }
  }
  const markdownCollapseProps = useMemo(() => {
    return transformStringIntoMarkdownProps(acknowledgementStatementWikiRef)
  }, [acknowledgementStatementWikiRef])
  return (
    <Box sx={{ mb: '20px' }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            disabled={!acknowledgementItem}
          />
        }
        label={<Typography variant="body1">{studyName}</Typography>}
      />
      <MarkdownCollapse
        {...markdownCollapseProps}
        setPlainTextResult={setPlainTextResult}
        showCopyPlainText={true}
      />
    </Box>
  )
}
