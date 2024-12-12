import NoData from '../../assets/icons/NoData'

export default function ThisTableIsEmpty() {
  return (
    <div className="text-center SRCBorderedPanel SRCBorderedPanel--padded2x">
      {NoData}
      <div style={{ marginTop: '20px', fontStyle: 'italic' }}>
        This table is currently empty
      </div>
    </div>
  )
}
