export type SWCHeaderProps = {
  title: React.ReactNode
  description?: React.ReactNode
}

/**
 * Header that uses CSS class names defined in SWC to match styling of SWC pages.
 */
export default function SWCHeader(props: SWCHeaderProps) {
  const { title, description } = props
  return (
    <div className={'pageHeader'}>
      <h3 className={'pageHeaderTitle'}>{title}</h3>
      {description && <div className="description">{description}</div>}
    </div>
  )
}
