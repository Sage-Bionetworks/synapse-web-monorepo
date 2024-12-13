import { ProgramsDataProps } from './Programs'
import LargeButton from '../../components/styled/LargeButton'
import { ImageFileHandle } from '../widgets/ImageFileHandle'

export default function ProgramsDesktop({
  link,
  summary,
  title,
  color,
  fileHandleAssociation,
  exploreLink,
}: ProgramsDataProps) {
  return (
    <div className="Programs__Card">
      <div
        className="Programs__Card__header"
        style={{ backgroundColor: color.replace(')', ',.05)') }}
      >
        <div className="Programs__Card__header__icon">
          {fileHandleAssociation && (
            <ImageFileHandle fileHandleAssociation={fileHandleAssociation} />
          )}
        </div>
        <div className="Programs__Card__header__info">
          <span className="Programs__Card__header__info__title"> {title} </span>
          {link && (
            <p className="Programs__Card__header__info__link">
              <a
                className="highlight-link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Visit website
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="Programs__Card__summary">
        <p> {summary} </p>
        <LargeButton
          color="secondary"
          variant="contained"
          href={exploreLink}
          sx={{ width: '120px', marginLeft: 0 }}
        >
          Explore
        </LargeButton>
      </div>
    </div>
  )
}
