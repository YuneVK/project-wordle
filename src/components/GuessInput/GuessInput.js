import React, { useState } from "react"

import { NUM_OF_LETTERS_PER_GUESS } from "../../constants"

function GuessInput({ disableInput, onSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmitGuess(tentativeGuess)
    setTentativeGuess("")
  }

  const handleGuessChange = (event) => {
    setTentativeGuess(event.target.value.toUpperCase())
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleGuessChange}
        minLength={NUM_OF_LETTERS_PER_GUESS}
        maxLength={NUM_OF_LETTERS_PER_GUESS}
        pattern={`^[A-Za-z]{${NUM_OF_LETTERS_PER_GUESS}}$`}
        title={`Must be exactly ${NUM_OF_LETTERS_PER_GUESS} alphanumeric characters`}
        disabled={disableInput}
        required
      />
    </form>
  )
}

export default GuessInput
