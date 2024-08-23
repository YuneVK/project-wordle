import React from "react"

import Guess from "../Guess"

import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const ROWS = range(NUM_OF_GUESSES_ALLOWED)

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {ROWS.map((number) => (
        <Guess key={`row-${number}`} value={guesses[number]} />
      ))}
    </div>
  )
}

export default GuessResults
