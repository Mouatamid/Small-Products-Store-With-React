import React, { Suspense } from "react";
import SizesContainer from "./Sizes/SizesContainer";
import { productsList } from "../products";
import "./App.css";

const ProductsList = React.lazy(() => import("./ProductsList/ProductsList"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "",
      products: productsList.products,
      orderBy: "select",
    };
    this.sizeChanged = this.sizeChanged.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }
  sizeChanged(size) {
    if (this.state.size === size) {
      this.setState({
        size: "",
        products: productsList.products,
      });
      return;
    }
    this.setState(prevState => ({
      size: size,
      products: productsList.products.filter((product) =>
        product.sizesArray.includes(size)
      ),
    }));
  }
  selectChange(value) {
    switch(value){
      case "select" :
        this.setState(prevState => ({
          orderBy : value,
        }));
        break;
      case "lth" :
        this.setState(prevState => ({
          orderBy : value,
          products : prevState.products.sort((a,b)=>{return a.price - b.price})
        }));
        break;
      case "htl" :
        this.setState(prevState => ({
          orderBy : value,
          products : prevState.products.sort((a,b)=>{return b.price - a.price})
        }));
        break; 
      default:
        return;
    }
  }

  render() {
    return (
      <div className="app">
        <SizesContainer
          selectedSize={this.state.size}
          sizeChanged={this.sizeChanged}
        />
        <Suspense fallback={<p>Loading...</p>}>
          <ProductsList
            selectedSize={this.state.size}
            products={this.state.products}
            selectChange={this.selectChange}
          />
        </Suspense>
      </div>
    );
  }
}

export default App;
