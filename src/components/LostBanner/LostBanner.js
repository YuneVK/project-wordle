import React from "react"

function LostBanner({ answer, onRestart }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="banner-action" onClick={onRestart}>
        Restart
      </button>
    </div>
  )
}

export default LostBanner
