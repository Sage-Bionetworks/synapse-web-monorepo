import { WithContext, Thing } from 'schema-dts'
import useJsonLdScriptElement from '../utils/hooks/useJsonLdScriptElement'

export type JsonLdScriptProps = {
  thing: WithContext<Thing>
}

/**
 * This component will add a json ld script tag to the page when rendered.
 */
export function JsonLdScript({ thing }: JsonLdScriptProps) {
  useJsonLdScriptElement(thing)
  return <></>
}
