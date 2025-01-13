import { merge } from 'lodash-es'

/**
 * Gets or calculates the slot props for a component.
 *
 * Our component 'slots' are heavily inspired by MUI's slots and generally matches their design patterns.
 * See https://mui.com/x/common-concepts/custom-components/
 * @param propsOrFn
 * @param ownerState
 */
export function getSlotProps<TProps extends object, TOwnerState = unknown>(
  propsOrFn: TProps | ((ownerState: TOwnerState) => TProps),
  ownerState: TOwnerState,
): TProps {
  return typeof propsOrFn === 'function' ? propsOrFn(ownerState) : propsOrFn
}

type SlotPropsObject = Record<string, unknown>
type SlotPropsFunction<TArgs extends any[]> = (
  ...args: TArgs
) => SlotPropsObject

// A type that can be either an object or a function returning an object
type SlotProps<TArgs extends any[]> = SlotPropsObject | SlotPropsFunction<TArgs>

// Helper type to determine return type based on input types
type MergeReturn<
  TArgs extends any[],
  T1 extends SlotProps<TArgs>,
  T2 extends SlotProps<TArgs>,
> = T1 extends SlotPropsFunction<TArgs>
  ? SlotPropsFunction<TArgs>
  : T2 extends SlotPropsFunction<TArgs>
  ? SlotPropsFunction<TArgs>
  : SlotPropsObject

/**
 * Merges two slot props objects or functions so that a complex hierarchy of components can safely expose slots of
 * internal components as their own.
 * @param slotProps1
 * @param slotProps2
 */
export function mergeSlotProps<
  TArgs extends any[],
  T1 extends SlotProps<TArgs>,
  T2 extends SlotProps<TArgs>,
>(slotProps1: T1, slotProps2: T2): MergeReturn<TArgs, T1, T2> {
  if (typeof slotProps1 === 'function' || typeof slotProps2 === 'function') {
    const slotProps1Fn: SlotPropsFunction<TArgs> =
      typeof slotProps1 === 'function' ? slotProps1 : () => slotProps1
    const slotProps2Fn: SlotPropsFunction<TArgs> =
      typeof slotProps2 === 'function' ? slotProps2 : () => slotProps2

    return function (...args: TArgs) {
      return merge(slotProps1Fn(...args), slotProps2Fn(...args))
    } as MergeReturn<TArgs, T1, T2>
  } else {
    return merge(slotProps1, slotProps2) as MergeReturn<TArgs, T1, T2>
  }
}
