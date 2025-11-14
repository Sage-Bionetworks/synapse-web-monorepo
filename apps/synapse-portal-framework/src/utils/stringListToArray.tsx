const stringListToArray = (input: string): string[] => {
  let inputArray: string[]

  if (Array.isArray(input)) {
    inputArray = input.map(String)
  } else {
    try {
      const parsed = JSON.parse(input ?? '[]')
      inputArray = Array.isArray(parsed) ? parsed.map(String) : [String(parsed)]
    } catch {
      inputArray = input ? [String(input)] : []
    }
  }
  return inputArray
}

export default stringListToArray
