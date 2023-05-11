import { useEffect } from 'react'
import { Thing, WithContext } from 'schema-dts'

const useJsonLdScriptElement = <T extends Thing>(
  jsonLdThing?: WithContext<T>,
) => {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    if (jsonLdThing) {
      script.setAttribute('type', 'application/ld+json')
      const textNode = document.createTextNode(JSON.stringify(jsonLdThing))
      script.appendChild(textNode)
      head?.appendChild(script)
    }

    return () => {
      if (jsonLdThing) {
        head?.removeChild(script)
      }
    }
  }, [jsonLdThing])
}

export default useJsonLdScriptElement
