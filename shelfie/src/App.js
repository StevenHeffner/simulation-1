import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios"

class App extends Component {
  constructor(){
    super();

    this.state = {
      products: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/inventory')
    .then(res => {
      this.setState({products: res.data})
    }) 
  }
  render() {
    return (
      <div className="App">
      {/* 54G */}
        <Header />
        <div className='content'>
        <Dashboard products={this.state.products}/>
        <Form />
        </div>
      </div>
    );
  }
}

export default App;
