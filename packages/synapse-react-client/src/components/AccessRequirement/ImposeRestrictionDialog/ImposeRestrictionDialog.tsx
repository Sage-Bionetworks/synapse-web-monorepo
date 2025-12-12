import { useCreateLockAccessRequirement } from '@/synapse-queries'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { ConfirmationDialog } from '../../ConfirmationDialog'
import FullWidthAlert from '../../FullWidthAlert/FullWidthAlert'
import { displayToast } from '../../ToastMessage/ToastMessage'
import HelpPopover from '@/components/HelpPopover'

export type ImposeRestrictionFormProps = {
  /* The ID of the entity that the user may choose to restrict */
  entityId: string
  open: boolean
  onClose: () => void
}

export default function ImposeRestrictionDialog(
  props: ImposeRestrictionFormProps,
) {
  const NOT_HUMAN_DATA_WARNING = (
    <Typography variant={'smallText1'}>
      Sage Bionetworks does not typically impose conditions for use on non-human
      data unless there is a legal, ethical or regulatory reason to do so. If
      you want to add conditions for use to this content, please contact the
      Synapse Access and Compliance Team (ACT) to discuss at{' '}
      <a href={'mailto:act@sagebase.org'}>act@sagebase.org</a>.
    </Typography>
  )

  const { entityId, open, onClose } = props
  const [isSensitiveHumanData, setIsSensitiveHumanData] = useState<
    boolean | null
  >(null)

  const {
    mutate: createLockedAccessRequirement,
    isPending: createLockedARIsPending,
  } = useCreateLockAccessRequirement({
    onSuccess: () => {
      displayToast('Successfully imposed restriction', 'success')
      // PORTALS-2664: Send the user to the ACT Service Desk
      // so they can tell ACT more information about what kind of
      // Conditions For Use (or Data Access Restriction) should be
      // added.
      window.open(
        'https://sagebionetworks.jira.com/servicedesk/customer/portal/8/group/15/create/134',
        '_blank',
      )
      onClose()
    },
    onError: e => {
      displayToast(`Failed to impose restriction: ${e.reason}`, 'danger')
    },
  })

  function okClickedHandler() {
    if (isSensitiveHumanData) {
      createLockedAccessRequirement(entityId)
    } else {
      onClose()
    }
  }

  function radioOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setIsSensitiveHumanData((event.target as HTMLInputElement).value === 'true')
  }

  return (
    <ConfirmationDialog
      title={'Conditions for Use'}
      onConfirm={() => okClickedHandler()}
      titleHelp={
        <HelpPopover
          markdownText="Conditions for use describes data use requirements that must be fulfilled before downloading."
          helpUrl="https://help.synapse.org/docs/Sharing-Settings,-Permissions,-and-Conditions-for-Use.2024276030.html#SharingSettings,Permissions,andConditionsforUse-ConditionsforUse"
        />
      }
      confirmButtonProps={{
        disabled: isSensitiveHumanData == null || createLockedARIsPending,
      }}
      cancelButtonProps={{
        disabled: createLockedARIsPending,
      }}
      onCancel={() => onClose()}
      open={open}
      content={
        <FormControl sx={{ width: '100%' }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Is this sensitive human data that must be protected?
          </FormLabel>
          <RadioGroup
            value={isSensitiveHumanData}
            onChange={radioOnChangeHandler}
          >
            <FormControlLabel control={<Radio />} label={'Yes'} value={true} />
            <FormControlLabel control={<Radio />} label={'No'} value={false} />
          </RadioGroup>
          {isSensitiveHumanData === false && (
            <FullWidthAlert
              variant={'warning'}
              isGlobal={false}
              description={NOT_HUMAN_DATA_WARNING}
            />
          )}
        </FormControl>
      }
    />
  )
}
