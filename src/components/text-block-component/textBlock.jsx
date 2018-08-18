import React from 'react'

export default ({title, body}) => {
    return (
      <div className="c-title-text c-container">
        <h1 className="s-title">{title}</h1>
        <p className="s-body">{body}</p>
      </div>
    )
  }
