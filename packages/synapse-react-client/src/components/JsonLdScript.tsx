import useJsonLdScriptElement from '@/utils/hooks/useJsonLdScriptElement'
import React from 'react'
import { Thing, WithContext } from 'schema-dts'

export type JsonLdScriptProps = {
  thing: WithContext<Thing>
}

/**
 * This component will add a json ld script tag to the page when rendered.
 */
export function JsonLdScript({ thing }: JsonLdScriptProps): React.JSX.Element {
  useJsonLdScriptElement(JSON.stringify(thing))
  return <></>
}
