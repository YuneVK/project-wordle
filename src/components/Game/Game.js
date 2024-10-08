import React, { useState } from "react"

import GuessInput from "../GuessInput"
import GuessResults from "../GuessResults"
import Keyboard from "../Keyboard"
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

const getRandomWord = () => {
  const answer = sample(WORDS)

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer })

  return answer
}

function Game() {
  const [answer, setAnswer] = useState(() => getRandomWord())
  const [guesses, setGuesses] = useState([])
  const [results, setResults] = useState([])
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IN_PROGRESS)

  const onSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)

    const result = checkGuess(tentativeGuess, answer)
    setResults([...results, result])

    const isGameWon = result.every(({ status }) => status === "correct")
    const isGameLost = nextGuesses.length === NUM_OF_GUESSES_ALLOWED

    if (isGameWon) {
      setGameStatus(GAME_STATUS.WON)
    } else if (isGameLost) {
      setGameStatus(GAME_STATUS.LOST)
    }
  }

  const onRestart = () => {
    setGuesses([])
    setResults([])
    setGameStatus(GAME_STATUS.IN_PROGRESS)
    setAnswer(getRandomWord())
  }

  return (
    <>
      <GuessResults guesses={guesses} results={results} />
      <GuessInput
        onSubmitGuess={onSubmitGuess}
        disableInput={gameStatus !== GAME_STATUS.IN_PROGRESS}
      />
      <Keyboard results={results} />

      {gameStatus === GAME_STATUS.WON && (
        <WonBanner numOfGuesses={guesses.length} onRestart={onRestart} />
      )}

      {gameStatus === GAME_STATUS.LOST && (
        <LostBanner answer={answer} onRestart={onRestart} />
      )}
    </>
  )
}

export default Game
