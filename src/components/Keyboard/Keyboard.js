import React from "react"

import getStatusByLetter from "./getStatusByLetter"
import { KEYS } from "./constants"

function Keyboard({ results }) {
  const statusByLetter = getStatusByLetter(results)

  return (
    <div className="keyboard">
      {KEYS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => (
            <span
              key={letter}
              className={`keyboard-key ${statusByLetter[letter]}`}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
