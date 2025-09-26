import React from 'react'

export const IdCell: React.FC<{ getValue: () => unknown }> = ({ getValue }) => (
  <span>{String(getValue())}</span>
)
