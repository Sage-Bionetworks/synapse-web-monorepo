import { useEffect, useState } from 'react'

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value)

  // fire a storage event, so that elements on the same page are notified of the storage update
  // see https://stackoverflow.com/a/55349670
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: key,
      newValue: value,
    }),
  )
}

export function useLocalStorage(key: string) {
  const [value, setValue] = useState(localStorage.getItem(key))

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(localStorage.getItem(key))
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  })
  return value
}
