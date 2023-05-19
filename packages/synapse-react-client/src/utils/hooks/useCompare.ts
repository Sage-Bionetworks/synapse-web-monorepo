import usePrevious from './usePrevious'

const useCompare = <T extends string | number | boolean | undefined>(
  val: T,
) => {
  const prevVal = usePrevious<T>(val)
  return prevVal !== val
}

export default useCompare
