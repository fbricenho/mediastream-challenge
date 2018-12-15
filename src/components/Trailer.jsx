import React from 'react';
import { URL_YOUTUBE } from '../const';

/**
 * Represents a trailer 
 * @param {string} trailer - the address of trailer for YouTube api
 */
export default function Trailer({trailer}) {
  const style = {

  }
  return <iframe title={trailer} src={URL_YOUTUBE + trailer} allowFullScreen style={style} frameBorder="0"/>;
}
