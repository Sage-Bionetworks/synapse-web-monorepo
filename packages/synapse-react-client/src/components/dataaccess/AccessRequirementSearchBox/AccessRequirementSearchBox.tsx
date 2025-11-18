import SynapseClient from '@/synapse-client'
import { useGetAccessRequirements } from '@/synapse-queries/dataaccess/useAccessRequirements'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { Skeleton, useTheme } from '@mui/material'
import AsyncSelect from 'react-select/async'

export type AccessRequirementSearchBoxProps = {
  /* id for the input tag */
  inputId?: string
  initialId?: string | number
  onChange: (accessRequirementId?: string) => void
  placeholder?: string
}

export function getOptionLabel(id: string | number, name: string) {
  if (id.toString() === name) {
    return name
  } else {
    return `${name} (${id})`
  }
}

export default function AccessRequirementSearchBox(
  props: AccessRequirementSearchBoxProps,
) {
  const { inputId, initialId, onChange, placeholder } = props

  const { palette } = useTheme()
  const { accessToken } = useSynapseContext()
  const { data: initialAccessRequirement, isLoading: isLoadingInitialAR } =
    useGetAccessRequirements(initialId!, {
      enabled: !!initialId,
    })

  async function loadOptions(inputValue: string) {
    // Check to see if the entered text is an AR ID
    const parsedId = parseInt(inputValue)
    let data: Array<{ id: string | number; name: string }> | undefined =
      undefined
    if (parsedId) {
      data = [
        await SynapseClient.getAccessRequirementById(accessToken, parsedId),
      ]
    }

    // If the input wasn't an integer, or didn't match an existing AR ID, then search ARs
    if (!data) {
      data = (
        await SynapseClient.searchAccessRequirements(accessToken, {
          nameContains: inputValue,
        })
      )?.results
    }

    // Map the AR(s) to options for the select input component
    return (
      data?.map(item => ({
        id: item.id.toString(),
        value: item.id.toString(),
        label: getOptionLabel(item.id, item.name),
      })) ?? []
    )
  }

  if (initialId && isLoadingInitialAR) {
    return <Skeleton width="100%" />
  }

  return (
    <AsyncSelect
      className="AsyncSelect"
      defaultInputValue={
        initialId
          ? getOptionLabel(
              initialId,
              initialAccessRequirement?.name ?? initialId.toString(),
            )
          : undefined
      }
      defaultOptions={
        initialId
          ? [
              {
                id: initialId,
                value: initialId,
                label: getOptionLabel(
                  initialId,
                  initialAccessRequirement?.name ?? initialId.toString(),
                ),
              },
            ]
          : true
      }
      inputId={inputId}
      cacheOptions
      isClearable
      styles={{
        control: styles => ({ ...styles, backgroundColor: palette.grey[200] }),
        input: provided => ({
          ...provided,
          // SWC-6327 - Adjust the input style so a right-click focuses on the input field
          input: {
            gridArea: '1 / 2 / 4 / 4 !important',
          },
        }),
      }}
      loadOptions={loadOptions}
      onChange={option => {
        onChange(option?.id.toString())
      }}
      placeholder={placeholder}
    />
  )
}
