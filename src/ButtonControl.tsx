import * as React from 'react'

export type NamedRoute = {
  name: string
}

export type ButtonControlProps = {
  handleChanges: (text: string, index: number) => void
  isSelected: (name: string) => boolean
  customRoutes: string[]
  colors: string[]
}

export const ButtonControl: React.FunctionComponent<ButtonControlProps> = ({
  handleChanges,
  isSelected,
  customRoutes,
  colors,
}) => {
  const setActiveClass = (isSelected: boolean) =>
    isSelected ? 'active-button' : ''
  return (
    <div className="explore-buttons">
      {customRoutes.map((name, index) => {
        const handleClick = () => handleChanges(name, index)
        // have to set borderTopColor so that the pseudo element triangle can inherit
        // the color of the button
        const style = {
          background: colors[index],
          borderTopColor: colors[index],
        }
        return (
          <button
            style={style}
            key={name}
            className={`${setActiveClass(isSelected(name))}`}
            onClick={handleClick}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
