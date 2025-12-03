import React from 'react'
import { ReactComponent as LightDialPosition1 } from '../../assets/sustainability/dialPosition1.svg'
import { ReactComponent as LightDialPosition2 } from '../../assets/sustainability/dialPosition2.svg'
import { ReactComponent as LightDialPosition3 } from '../../assets/sustainability/dialPosition3.svg'
import { ReactComponent as LightDialPosition4 } from '../../assets/sustainability/dialPosition4.svg'
import { ReactComponent as DarkDialPosition1 } from '../../assets/sustainability/darkDialPosition1.svg'
import { ReactComponent as DarkDialPosition2 } from '../../assets/sustainability/darkDialPosition2.svg'
import { ReactComponent as DarkDialPosition3 } from '../../assets/sustainability/darkDialPosition3.svg'
import { ReactComponent as DarkDialPosition4 } from '../../assets/sustainability/darkDialPosition4.svg'
import DialLayout, { DialLayoutProps } from './DialLayout'

// Returns a SVG dial image corresponding to the score descriptor (e.g. "foundational", "intermediate", etc.)
type DialProps = {
  scoreDescriptor: string
  isScorecardSummary?: boolean
}

export type ScoreDescriptor =
  | 'Foundational'
  | 'Developing'
  | 'Maturing'
  | 'Stable'

const Dial = ({
  scoreDescriptor,
  isScorecardSummary,
}: DialProps): React.ReactNode => {
  const toolTipText: Record<ScoreDescriptor, string> = {
    Foundational:
      'Early-stage sustainability with opportunities for contributions',
    Developing: 'Strong in key sustainability areas',
    Maturing: 'Demonstrates strong sustainable practices',
    Stable: 'Maintained with long-term resilience in mind',
  }

  const lightDialComponents: Record<string, DialLayoutProps> = {
    foundational: { dial: <LightDialPosition1 />, label: 'Foundational' },
    developing: { dial: <LightDialPosition2 />, label: 'Developing' },
    maturing: { dial: <LightDialPosition3 />, label: 'Maturing' },
    stable: { dial: <LightDialPosition4 />, label: 'Stable' },
  }

  const darkDialComponents: Record<string, DialLayoutProps> = {
    foundational: { dial: <DarkDialPosition1 />, label: 'Foundational' },
    developing: { dial: <DarkDialPosition2 />, label: 'Developing' },
    maturing: { dial: <DarkDialPosition3 />, label: 'Maturing' },
    stable: { dial: <DarkDialPosition4 />, label: 'Stable' },
  }

  const key = scoreDescriptor.toLowerCase()

  const selectedMap = isScorecardSummary
    ? darkDialComponents
    : lightDialComponents

  const selected = selectedMap[key]

  if (!selected) return <LightDialPosition1 />

  return (
    <DialLayout
      dial={selected.dial}
      label={selected.label}
      toolTipText={isScorecardSummary ? undefined : toolTipText[selected.label]}
    />
  )
}

export default Dial
