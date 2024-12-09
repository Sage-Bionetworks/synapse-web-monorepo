export type HeaderProps = {
  isSubmitted?: boolean
  bodyText?: string //should never take user input only use cardcoded text from a parent component. Uses dangerouslySetInnerHTML
  title: string
}

export default function Header(props: HeaderProps) {
  let bodyText = <></>

  if (props.isSubmitted) {
    bodyText = <div>Your information has been submitted</div>
  } else {
    if (props.bodyText) {
      bodyText = (
        <div dangerouslySetInnerHTML={{ __html: props.bodyText }}></div>
      )
    }
  }

  return (
    <div
      className={`submission-header${props.isSubmitted ? ' submitted' : ''}`}
    >
      <h2>{props.title}</h2>
      {bodyText}
      <hr></hr>
    </div>
  )
}
