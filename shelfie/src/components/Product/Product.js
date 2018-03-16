import React from "react";
export default function Product(props) {
  let {product, name, price, image} = props
  return(
    // 54C
  <div className="product">
    {/* //54E */}
    <img className='img' src= {product.img} />
    {/* 54F */}
    <h2>{name}</h2>
    <h3>Price:{priProduct.jsce}</h3>
  </div>
  );
}
