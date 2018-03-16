import React, { Component } from 'react';
import Product from "../Product/Product"


export default class Dashboard extends Component{
  render() {
    return (
      <div className='dash'>
      {this.props.products.map((product) => {
      return(
        <Product product={product} name={product.Name} price={product.price} />
      )})}
      </div>
    
    )
  }
}
