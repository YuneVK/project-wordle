import React from "react"

import { checkGuess } from "../../game-helpers"
import { range } from "../../utils"
import { NUM_OF_LETTERS_PER_GUESS } from "../../constants"

const COLUMNS = range(NUM_OF_LETTERS_PER_GUESS)

function Guess({ answer, value = "" }) {
  const result = checkGuess(value, answer)

  return (
    <p className="guess">
      {COLUMNS.map((number) => (
        <span
          key={`cell-${number}`}
          className={`cell${
            Array.isArray(result) ? ` ${result[number].status}` : ""
          }`}
        >
          {value[number] ?? ""}
        </span>
      ))}
    </p>
  )
}

export default Guess
