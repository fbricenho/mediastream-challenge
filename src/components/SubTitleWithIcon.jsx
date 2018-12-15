import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default function SubTitleWithIcon(props){
  const style = {
    color: 'white',
  };

  return(
      <h4 style={style}><Glyphicon glyph={props.icon} /> {props.title}</h4>
  );
}
