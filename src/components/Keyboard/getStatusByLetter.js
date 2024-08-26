import { KEYS } from "./constants"

export default function getStatusByLetter(results) {
  const flatResults = results.flat()

  return KEYS.flat().reduce((results, key) => {
    const keyResults = flatResults
      .filter(({ letter }) => letter === key)
      .map(({ status }) => status)

    let result = ""

    if (keyResults.includes("incorrect")) {
      result = "incorrect"
    }

    if (keyResults.includes("misplaced")) {
      result = "misplaced"
    }

    if (keyResults.includes("correct")) {
      result = "correct"
    }

    return {
      ...results,
      [key]: result,
    }
  }, {})
}
