import { useEffect } from 'react'

const useJsonLdScriptElement = (jsonLdString: string | undefined) => {
  useEffect(() => {
    if (jsonLdString) {
      const head = document.querySelector('head')
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      const textNode = document.createTextNode(jsonLdString)
      script.appendChild(textNode)
      head?.appendChild(script)
      return () => {
        head?.removeChild(script)
      }
    }
  }, [jsonLdString])
}

export default useJsonLdScriptElement
