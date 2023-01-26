export type UserPreferenceInterface = {
  name: string // The name of the user preference.
  concreteType: string
}

export type UserPreferenceBoolean = {
  name: string // The name of the user preference.
  concreteType: string
  value: boolean // the value of the user preference
}

export type UserPreference = UserPreferenceInterface & UserPreferenceBoolean
