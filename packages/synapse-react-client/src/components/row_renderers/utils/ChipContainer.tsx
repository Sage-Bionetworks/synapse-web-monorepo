type ChipContainerProps = {
  chips: any[]
}

const ChipContainer = ({ chips }: ChipContainerProps) => {
  const chipsFormatted = chips.map((el, index) => {
    if (!el) {
      return false
    }
    return <span key={index}> {el}</span>
  })
  return <>{chipsFormatted}</>
}
export default ChipContainer
