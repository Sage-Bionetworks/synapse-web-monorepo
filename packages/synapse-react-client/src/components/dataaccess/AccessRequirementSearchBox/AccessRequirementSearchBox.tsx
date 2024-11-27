import { Skeleton } from '@mui/material'
import React from 'react'
import { components, GroupBase, SelectComponentsConfig } from 'react-select'
import AsyncSelect from 'react-select/async'
import SynapseClient from '../../../synapse-client'
import { useGetAccessRequirements } from '../../../synapse-queries/dataaccess/useAccessRequirements'
import { useSynapseContext } from '../../../utils/context/SynapseContext'

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

const customSelectComponents: Partial<
  SelectComponentsConfig<
    {
      id: string | number
      value: string | number
      label: string
    },
    false,
    GroupBase<{
      id: string | number
      value: string | number
      label: string
    }>
  >
> = {
  Control: props => {
    return (
      <components.Control
        {...props}
        className={`form-control ${props.className ?? ''}`}
      />
    )
  },
}

export default function AccessRequirementSearchBox(
  props: AccessRequirementSearchBoxProps,
) {
  const { inputId, initialId, onChange, placeholder } = props
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
      className="bootstrap-4-backport AsyncSelect"
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
        // Bootstrap's form-control class overrides the display value, manually set to flex (the default without Bootstrap)
        control: styles => ({ ...styles, display: 'flex !important' }),
        input: provided => ({
          ...provided,
          // SWC-6327 - Adjust the input style so a right-click focuses on the input field
          input: {
            gridArea: '1 / 2 / 4 / 4 !important',
          },
        }),
      }}
      components={customSelectComponents}
      loadOptions={loadOptions}
      onChange={option => {
        onChange(option?.id.toString())
      }}
      placeholder={placeholder}
    />
  )
}
