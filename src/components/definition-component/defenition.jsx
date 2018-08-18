import React from 'react'

export default ({word, definition })=> {
    return (
      <div className="c-definition c-container">
        <p><strong>{word} :</strong>{definition}</p>
      </div>
    )
}
