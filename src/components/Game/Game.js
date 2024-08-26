import React, { useState } from "react"

import GuessInput from "../GuessInput"
import GuessResults from "../GuessResults"
import LostBanner from "../LostBanner"
import WonBanner from "../WonBanner"

import { checkGuess } from "../../game-helpers"
import { sample } from "../../utils"
import { WORDS } from "../../data"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const GAME_STATUS = {
  IN_PROGRESS: "inProgress",
  WON: "won",
  LOST: "lost",
}

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IN_PROGRESS)

  const onSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)

    const result = checkGuess(tentativeGuess, answer)

    const isGameWon = result.every(({ status }) => status === "correct")
    const isGameLost = nextGuesses.length === NUM_OF_GUESSES_ALLOWED

    if (isGameWon) {
      setGameStatus(GAME_STATUS.WON)
    } else if (isGameLost) {
      setGameStatus(GAME_STATUS.LOST)
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        onSubmitGuess={onSubmitGuess}
        disableInput={gameStatus !== GAME_STATUS.IN_PROGRESS}
      />

      {gameStatus === GAME_STATUS.WON && (
        <WonBanner numOfGuesses={guesses.length} />
      )}

      {gameStatus === GAME_STATUS.LOST && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
