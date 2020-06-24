import React from "react";
import Product from "./Product";
import "./ProductsList.css";

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
    
  }
  selectChange(e){
    this.props.selectChange(e.target.value);
  }


  render() {
    return (
      <div className="products-list">
        <span>{this.props.products.length} Product(s) found</span>
        <div className="select">
          <p>Order by</p>
          <select name="order" id="order" onChange={this.selectChange}>
            <option value="select">Select</option>
            <option value="lth">Lowest to highest</option>
            <option value="htl">Highest to lowest</option>
          </select>
        </div>
        <div className="products-container">
          {this.props.products.map((product) => {
            return (
              <Product
                title={product.name}
                image={product.image}
                price={"$" + product.price}
                key={product.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
