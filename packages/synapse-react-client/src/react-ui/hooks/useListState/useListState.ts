import { Dispatch, SetStateAction, useState } from 'react'

export interface ListStateReturn<T> {
  // initial state of the list
  list: T[]
  // generates a function to update a specific index of the list
  handleListChange: (index: number) => (changedValue: T) => void
  // generates a function to remove a index from the list
  handleListRemove: (index: number) => () => void
  // generates a function to append to the end of the list
  appendToList: (...newItem: T[]) => void
  //changes the entire list state
  setList: Dispatch<SetStateAction<T[]>>
}
/**
 * This is used when a component's state uses a List<T> and has child components
 * that are responsible for creating, updating, deleting the objects within the List.
 *
 *
 * This should be used in conjunction with list.map() to generate child elements.
 *
 * The handle*() functions will generate a callback function for
 * the child to use to perform an item change, or removal on the list.
 *
 * Generally, appending items to the list will be handled by the parent
 * so appendToList() is just a regular function instead of a function generator
 * For Example:
 *
 * ```
 * export const ParentComponent: React.FunctionComponent<ParentComponentProps> = ({
 *  prop1,
 *  prop2,
 * }) => {
 *    const {list: myList,
 *           handleListChange: handleMyListChange,
 *           handleListRemove: handleMyListPush,
 *           appendToList: handleMyListRemove} = useListState<string>(['asdf','qwerty'])
 *
 *    return (
 *      <div>
 *        myList.map((item, index) => {
            return <ChildComponent
              value={item}
              onChange={handleMyListChange(index)}
              onRemove={handleMyListRemove(index)}
            />
          })
          <button onClick={(event) => {appendToList("some new value")} }> >Add Child</button>
 *      </div>
 *    )
 *
 * }
 * ```
 *
 *
 * @param initialState The initial value of the array
 * @returns an ListStateReturn object containing the useState value and additonal change/remove/push hnndlers. Use object destructuring
 */
const useListState = <T>(initialState: T[]): ListStateReturn<T> => {
  const [list, setList] = useState<T[]>(initialState)

  const handleListChange =
    (index: number) =>
    (changedValue: T): void => {
      const modifiedList = [...list]
      modifiedList[index] = changedValue
      setList(modifiedList)
    }

  const handleListRemove = (index: number) => (): void => {
    const modifiedList = list.filter((value, arr_index) => index !== arr_index)
    setList(modifiedList)
  }

  const appendToList = (...newItem: T[]): void => {
    const modifiedList = [...list]
    modifiedList.push(...newItem)
    setList(modifiedList)
  }
  return { list, handleListChange, handleListRemove, appendToList, setList }
}

export default useListState
