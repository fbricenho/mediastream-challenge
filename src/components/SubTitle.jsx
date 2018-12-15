import React  from 'react';

export default function SubTitle(props){
  const style = {
    color: 'white',
  };

  return(
    <h4 style={style}>{props.title}</h4>
  );
}