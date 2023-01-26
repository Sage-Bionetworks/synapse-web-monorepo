import * as React from 'react'

type BookmarksProps = {
  footnotes: string
}

class Bookmarks extends React.Component<BookmarksProps, {}> {
  constructor(props: BookmarksProps) {
    super(props)
    this.renderBookmarks = this.renderBookmarks.bind(this)
  }

  /**
   * Returns bookmarks
   *
   * @returns JSX for the embedded bookmarks in the markdown passed in as a prop
   * @memberof Bookmarks
   */
  public renderBookmarks() {
    const copyFootnotes: string = String(this.props.footnotes)

    // find all the links embedded in the markdown below
    const regex = /Synapse widget&gt;<\/span>(.*)</g
    let matchedGroup: RegExpExecArray | null
    const output = []
    // below we use regex.exec to find the find matched group containing the citation source
    while ((matchedGroup = regex.exec(copyFootnotes))) {
      output.push(matchedGroup[1])
    }

    // return all the links formatted accordingly
    return output.map((el, index) => {
      const isBeforeLastElement = index < output.length - 1
      return (
        <React.Fragment key={index}>
          <button className="SRC-markdown-bookmark" id={`bookmark${index}`}>
            [{index + 1}]
          </button>
          <span dangerouslySetInnerHTML={{ __html: el }} />
          {isBeforeLastElement && <br />}
        </React.Fragment>
      )
    })
  }

  public render() {
    return (
      <React.Fragment>
        <hr />
        {this.renderBookmarks()}
      </React.Fragment>
    )
  }
}

export default Bookmarks
