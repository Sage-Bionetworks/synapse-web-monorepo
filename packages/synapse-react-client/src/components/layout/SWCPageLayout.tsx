import SWCHeader, { SWCHeaderProps } from './SWCHeader'

/**
 * Page layout that uses CSS class names defined in SWC to match styling of SWC pages. This should not be used outside of SWC.
 */
export default function SWCPageLayout(props: {
  header: SWCHeaderProps
  children: React.ReactNode
}) {
  const { header, children } = props

  return (
    <>
      <SWCHeader {...header} />
      <div className="pageLayout">{children}</div>
    </>
  )
}
