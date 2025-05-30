import Tooltip from '@mui/material/Tooltip'
import isArray from 'lodash-es/isArray'
import { ReactNode } from 'react'
import { MapValueToReactComponentConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import MatureStandardIcon from '@mui/icons-material/WorkspacePremiumTwoTone'

const mapping: Record<string, ReactNode> = {
  ['Yes']: (
    <Tooltip
      title={
        'This standard has one or more implementations appropriate for production use, or has undergone a review process and has been determined to be in a mature state.'
      }
    >
      <MatureStandardIcon sx={{ color: 'tertiary.main' }} />
    </Tooltip>
  ),
}

const IsMatureIconMap: MapValueToReactComponentConfig['Component'] = ({
  value,
}) => {
  let values = value

  if (value == null) {
    return <></>
  }
  if (!isArray(value)) {
    values = [value]
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {(values as string[]).map(val => mapping[val])}
    </div>
  )
}

export default IsMatureIconMap
