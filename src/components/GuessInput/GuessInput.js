import React, { useState } from "react"

import { GUESS_LENGTH } from "../../constants"

function GuessInput({ onSubmitGuess }) {
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
        minLength={GUESS_LENGTH}
        maxLength={GUESS_LENGTH}
        pattern={`^[A-Za-z]{${GUESS_LENGTH}}$`}
        title={`Must be exactly ${GUESS_LENGTH} alphanumeric characters`}
        required
      />
    </form>
  )
}

export default GuessInput
