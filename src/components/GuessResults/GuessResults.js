import React from "react"

import Guess from "../Guess"

import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const ROWS = range(NUM_OF_GUESSES_ALLOWED)

function GuessResults({ guesses, results }) {
  return (
    <div className="guess-results">
      {ROWS.map((number) => (
        <Guess
          key={`row-${number}`}
          value={guesses[number]}
          result={results[number]}
        />
      ))}
    </div>
  )
}

export default GuessResults
