import React from 'react'
import { Form } from 'react-bootstrap'
import { Button, Stack, Typography } from '@mui/material'
import {
  AccessorChange,
  AccessType,
  TYPE_FILTER,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import IconSvg from '../../IconSvg/IconSvg'
import { RadioGroup } from '../../widgets/RadioGroup'
import { useGetCurrentUserProfile } from '../../../synapse-queries'
import UserSearchBoxV2 from '../../UserSearchBox/UserSearchBoxV2'
import { UserBadge } from '../../UserCard/UserBadge'

export type DataAccessRequestAccessorsEditorProps = {
  /* The current set of accessor changes for a data access request */
  accessorChanges: AccessorChange[]
  /* Invoked when the set of accessors is updated */
  onChange: (updater: (prevValue: AccessorChange[]) => AccessorChange[]) => void
  /* Whether this request is a renewal */
  isRenewal: boolean
  /* Text to show to inform the user about requirements accessors may need to meet */
  helpText: React.ReactNode
}

/**
 * Component that handles adding/removing/revoking accessors for a data access request.
 */
export default function DataAccessRequestAccessorsEditor(
  props: DataAccessRequestAccessorsEditorProps,
) {
  const { accessorChanges, onChange, isRenewal, helpText } = props
  const { data: user } = useGetCurrentUserProfile()

  const onSelectUserCallback = (
    id: string | null,
    ugh: UserGroupHeader | null,
  ) => {
    if (ugh) {
      onChange(previousValue => {
        const currentAccessorIds = previousValue.map(ac => ac.userId)
        // if user is not already in the accessor list (prevent duplicates in accessor list)
        if (!currentAccessorIds.includes(ugh.ownerId)) {
          const selectedAccessor: AccessorChange = {
            userId: ugh.ownerId,
            type: AccessType.GAIN_ACCESS,
          }
          previousValue.push(selectedAccessor)
        }
        return previousValue
      })
    }
  }

  const onClearAccessor = (userId: string) => {
    onChange(previousValue => {
      return previousValue.filter(item => item.userId !== userId)
    })
  }

  // For renewal only
  const onAccessorAccessTypeChange = (
    accessType: AccessType,
    userId: string,
  ) => {
    onChange(previousValue => {
      const indexOfUser = previousValue.findIndex(
        item => item.userId === userId,
      )
      previousValue[indexOfUser].type = accessType
      return previousValue
    })
  }

  return (
    <>
      <Form.Group>
        <Typography variant={'headline3'} sx={{ mt: 4, mb: 2 }}>
          Data Requesters
        </Typography>
        <Typography
          variant={'body1'}
          sx={{ mb: 1 }}
          className={'requester-label'}
        >
          {helpText}
        </Typography>
        <UserSearchBoxV2
          inputId={'requesters'}
          typeFilter={TYPE_FILTER.USERS_ONLY}
          onChange={onSelectUserCallback}
          filterPredicate={userGroupHeader =>
            !accessorChanges
              .map(ac => ac.userId)
              .includes(userGroupHeader.ownerId)
          }
          value={null}
        />
      </Form.Group>
      <Form.Group>
        <Stack gap={1}>
          {accessorChanges.map((ac, i) => {
            return (
              <div className={'list-items'} key={`accessor-${i}`}>
                <UserBadge
                  userId={ac.userId}
                  showAccountLevelIcon={true}
                  disableLink={true}
                  showFullName={true}
                />
                {
                  // only display delete button if the user profile is not the current user and has not had access before
                  user?.ownerId !== ac.userId &&
                    ac.type === AccessType.GAIN_ACCESS && (
                      <Button
                        aria-label={`Remove user`}
                        variant={'text'}
                        sx={{
                          ml: 1,
                          px: 0,
                        }}
                        onClick={() => onClearAccessor(ac.userId)}
                      >
                        <IconSvg icon="clear" />
                      </Button>
                    )
                }
                {
                  // Renewal/Revoke data access, only display if isRenewal is true
                  // TODO: It's possible to that the accessors list is in an illegal state with no way to recover -- see PLFM-7893
                  isRenewal &&
                    user?.ownerId !== ac.userId &&
                    ac.type !== AccessType.GAIN_ACCESS && (
                      <>
                        <RadioGroup
                          value={ac.type}
                          options={[
                            {
                              label: 'Renew',
                              value: AccessType.RENEW_ACCESS,
                            },
                            {
                              label: 'Revoke',
                              value: AccessType.REVOKE_ACCESS,
                            },
                          ]}
                          onChange={(value: string) =>
                            onAccessorAccessTypeChange(
                              value as AccessType,
                              ac.userId,
                            )
                          }
                        ></RadioGroup>
                      </>
                    )
                }
              </div>
            )
          })}
        </Stack>
      </Form.Group>
    </>
  )
}
