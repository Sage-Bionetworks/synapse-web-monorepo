interface DataDebugProps {
  formData: any
  hidden: boolean
}

export default function DataDebug(props: DataDebugProps) {
  const myData = (
    <div>
      <h6>Data</h6>
      <pre>{JSON.stringify(props.formData, null, 2)}</pre>
    </div>
  )
  return <>{!props.hidden && myData}</>
}
