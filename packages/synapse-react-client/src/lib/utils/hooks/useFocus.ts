/**
 * How to use:
   const [inputRef, setInputFocus] = useFocus()
    return (
        <> 
            <button onClick={setInputFocus} >
               Click to ask input to request focus
            </button>
            <input ref={inputRef} />
        </>
    )
 */

import { useRef } from 'react'

const useFocus = () => {
  const ref = useRef<HTMLInputElement>()
  const setFocus = () => {
    ref.current?.focus()
  }
  return [ref, setFocus]
}

export default useFocus
