import React from "react"

function WonBanner({ numOfGuesses, onRestart }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button className="banner-action" onClick={onRestart}>
        Restart
      </button>
    </div>
  )
}

export default WonBanner
