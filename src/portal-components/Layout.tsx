import * as React from 'react'

const Layout = ({
  children,
  containerClassName = '',
  outsideContainerClassName = '',
}: {
  children: any
  containerClassName?: string
  outsideContainerClassName?: string
}) => {
  const content = (
    <div className={`container-fluid ${containerClassName}`}>
      <div className="row">
        <div className="col-md-offset-1 col-md-10">{children}</div>
      </div>
    </div>
  )
  if (outsideContainerClassName) {
    return <div className={outsideContainerClassName}>{content}</div>
  } else {
    return content
  }
}

export default Layout
