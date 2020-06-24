import React from 'react';
import './Product.css';

export default function Product(props){
  return(
    <div className="product">
     <img alt="Barca" src={props.image}/> 
     <h3 className="product-title">{props.title}</h3>
     <hr />
     <h3 className='product-price'>{props.price}</h3>
     <button className="add-to-cart">Add to cart</button>
    </div>
  )
}