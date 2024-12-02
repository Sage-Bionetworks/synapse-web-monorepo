import { useEffect } from 'react'

/**
 * Debounces execution of an effect based on a specified delay.
 * See https://stackoverflow.com/a/61127960
 * @param effect
 * @param deps
 * @param delay
 */
export const useDebouncedEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number,
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay)

    return () => clearTimeout(handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay])
}
