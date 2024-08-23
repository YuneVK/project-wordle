import React, { useState } from "react"

function GuessInput({ onGuessChange }) {
  const [guess, setGuess] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    setGuess("")

    console.log({ guess })
  }

  const handleGuessChange = (event) => {
    setGuess(event.target.value.toUpperCase())
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuessChange}
        minLength={5}
        maxLength={5}
        pattern="^[A-Za-z]{5}$"
        title="Must be exactly 5 alphanumeric characters"
        required
      />
    </form>
  )
}

export default GuessInput
