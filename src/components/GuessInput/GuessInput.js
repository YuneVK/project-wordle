import React, { useState } from "react"

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
