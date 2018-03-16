import React, { Component } from 'react';

export default class Form extends Component {
  constructor(){
    super();

    this.state = {
      img: "",
      productName: "",
      price: 0
    }
  }
  updateImg(value){
    this.setState({img: value.target.value})
  }
  updateName(value){
    this.setState({productName: value.target.value})
  }
  updatePrice(value){
    this.setState({price: value.target.value})
  }
  cancel(){
    this.setState({
    img: "",
    productName: "",
    price:0
  })
  }
    
  

  render(){
    return (
      <div className= 'form'>
        <div classname="inputs">
          Image URL:
          <input onChange={(e) => this.updateImg(e)}></input>
          Product Name:
          <input onChange={(e) => this.updateName(e)}></input>
          Price:
          <input onChange={(e) => this.updatePrice(e)}></input>
          <button onClick={() => this.cancel()}>Cancel</button>
          <button>Add to Inventory</button>
        </div>

      </div>
    )
  }
}