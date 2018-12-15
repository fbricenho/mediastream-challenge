import React from 'react';
import { Glyphicon } from 'react-bootstrap'

export default function Description (props) {
  const style = {
    color: 'white'
  }

  const addFavorites = {
    cursor: 'pointer'
  }

  const icon = {
    margin: '0 8px 0 0'
  }

  function handleClickEvent(e) {
    // TODO: MISSING SAVE TO FAVORITES
    console.log(props)
  };

  return(
    <div style={style}>
      <h3>{props.category}</h3>
      <span style={addFavorites} onClick={handleClickEvent}>
        <Glyphicon glyph='heart' style={icon}/>
        Add to favorites
      </span>
      <p>
        {props.movie.overview}
      </p>
    </div>
  );
}
