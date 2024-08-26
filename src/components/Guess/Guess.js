import React from "react"

import { range } from "../../utils"
import { NUM_OF_LETTERS_PER_GUESS } from "../../constants"

const COLUMNS = range(NUM_OF_LETTERS_PER_GUESS)

function Guess({ value = "", result }) {
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
