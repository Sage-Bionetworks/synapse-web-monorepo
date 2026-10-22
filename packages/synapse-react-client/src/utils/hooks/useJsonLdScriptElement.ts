import { useEffect } from 'react'

const useJsonLdScriptElement = (jsonLdString: string | undefined) => {
  useEffect(() => {
    if (!jsonLdString) return
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    const textNode = document.createTextNode(jsonLdString)
    script.appendChild(textNode)
    head?.appendChild(script)
    return () => {
      script.remove()
    }
  }, [jsonLdString])
}

export default useJsonLdScriptElement
