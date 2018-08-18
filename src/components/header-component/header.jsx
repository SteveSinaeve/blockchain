import React from 'react';

export default ({title, description}) =>  {
    return (
      <div className="c-header c-container">
        <h1 className="s-header">{title}</h1>
        <p className="s-description">{description}</p>
      </div>
    );
}
