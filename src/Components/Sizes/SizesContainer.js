import React from 'react';
import Size from './Size';
import './SizesContainer.css';

const sizesArray = ["XS","S","M","ML","L","XL","XXL"];

export default function SizesContainer(props){

  let clickedSize = size => {
    props.sizeChanged(size);
  }


  return(
    <div className="sizes">
    <h3 className="sizes-title">Sizes :</h3>
    <div className="sizes-container">
    {
    sizesArray.map(size => {
      return(
        <Size size={size} selected={props.selectedSize === size} key={size} clickedSize={clickedSize}/>
      )
    })}
    </div>
    </div>
  )
}