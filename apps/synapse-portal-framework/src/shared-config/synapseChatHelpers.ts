/**
 * Process the chat response document to handle custom actions elements with redirect subelements.
 * This function handles navigation based on the response format:
 * <actions>
 *   <redirect>
 *     <target>/Explore</target>
 *     <query><![CDATA[
 *       { ... Query JSON ... }
 *     ]]></query>
 *   </redirect>
 * </actions>
 */
export function processResponseDocument(
  doc: Document,
  navigate?: (to: string) => void,
) {
  const actionsElements = doc.querySelectorAll('actions')
  actionsElements.forEach(actionsElement => {
    const redirectElement = actionsElement.querySelector('redirect')
    if (redirectElement) {
      const targetElement = redirectElement.querySelector('target')
      const queryElement = redirectElement.querySelector('query')

      if (targetElement && targetElement.textContent) {
        const target = targetElement.textContent.trim()
        let redirectPath = target

        // If there's a query element, format the path with encoded query
        if (queryElement) {
          // Use innerHTML to access CDATA content (textContent is empty for CDATA sections)
          // This is safe because we immediately extract just the text and URI-encode it
          let query = queryElement.innerHTML.trim()
          // Remove CDATA wrapper if present (<!--[CDATA[ ... ]]-->)
          query = query
            .replace(/^<!--\[CDATA\[/, '')
            .replace(/\]\]-->$/, '')
            .trim()
          // encodeURIComponent ensures any HTML/script content is safely encoded
          redirectPath = `${target}?QueryWrapper0=${encodeURIComponent(query)}`
        }

        // Navigate using React Router if available, otherwise use window.location
        if (navigate) {
          navigate(redirectPath)
        } else {
          window.location.href = redirectPath
        }
      }
    }
    // Remove the actions element from the displayed content
    actionsElement.remove()
  })
}
