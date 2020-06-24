import React from 'react';
import './Size.css';

export default function Size(props){

  let sizeClick = e => {
    props.clickedSize(e.target.textContent);
  }

  return(
    <div className={props.selected ? 'size selected-size' : 'size'} onClick={sizeClick}>{props.size}</div>
  )
}