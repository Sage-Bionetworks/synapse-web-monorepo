import { PropsWithChildren } from 'react'
import AccessApprovalCheckMark, {
  RequirementItemStatus,
} from '../AccessApprovalCheckMark'
import { Box, BoxProps, Button, ButtonProps, styled } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

export type RequirementItemProps = PropsWithChildren<{
  status: RequirementItemStatus
  actions?: ButtonProps[]
}>

const RequirementContainer: StyledComponent<BoxProps> = styled(Box, {
  label: 'RequirementContainer',
})({
  display: 'grid',
  gridTemplateRows: '50px auto auto',
  gridTemplateColumns: '30px auto',
  columnGap: '20px',
  alignItems: 'center',
  margin: '1rem 0 2rem',
})

const InlineButtonContainer: StyledComponent<BoxProps> = styled(Box, {
  label: 'InlineButtonContainer',
})(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  margin: `${theme.spacing(1)} 0`,
}))

/**
 * Renders a single requirement item, which includes a checkmark, the requirement text, and any required actions. This
 * component represents one condition (of potentially many) that a user must meet to gain access to data.
 *
 * This component does not make requests to external stores and is side-effect free. Variations in the displayed
 * component are controlled entirely by props
 */
export default function RequirementItem(props: RequirementItemProps) {
  const { actions, status, children } = props
  return (
    <RequirementContainer data-testid={'RequirementItem'}>
      <AccessApprovalCheckMark
        status={status}
        sx={{
          gridRow: '1 / span 1',
          gridColumn: '1 / span 1',
          margin: 'auto',
        }}
      />
      <Box
        sx={{
          gridColumn: '2 / span 1',
          gridRow: '1 / span 2',
          alignSelf: 'start',
          mt: '12px',
        }}
      >
        {children}
      </Box>
      {actions && !!actions.length && (
        <>
          {/* This Box renders a vertical line beneath the icon that spans the 2nd row */}
          <Box
            sx={{
              gridColumnStart: 1,
              gridRow: '2 / span 1',
              width: '1px',
              height: '100%',
              backgroundColor: 'grey.400',
              margin: 'auto',
            }}
          />
          {/*
            This Box renders the 'L' shaped line, which is visually connected to the vertical line in the 3rd row
            Placing this in the 3rd row vertically aligns this with the InlineButtonContainer actions
            */}
          <Box
            sx={theme => ({
              gridColumnStart: 1,
              gridRow: '3 / span 1',
              width: '50%',
              height: '60%',
              borderLeft: `1px solid ${theme.palette.grey[400]}`,
              borderBottom: `1px solid ${theme.palette.grey[400]}`,
              marginLeft: 'auto',
              marginBottom: 'auto',
              marginRight: '0',
            })}
          />
        </>
      )}
      {actions && !!actions.length && (
        <InlineButtonContainer
          sx={{ gridColumnStart: 2, gridRow: '3 / span 1', mt: 2 }}
        >
          {actions.map((buttonProps, i) => (
            <Button
              key={i}
              disabled={status === RequirementItemStatus.LOADING}
              {...buttonProps}
            />
          ))}
        </InlineButtonContainer>
      )}
    </RequirementContainer>
  )
}
