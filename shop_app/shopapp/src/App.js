import React, { Component } from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom'
import './App.css';
import { inventory, derbyNames } from './object_data.js';
import Shop from "./shop"
import Home from './Home'
import axios from 'axios'
import Cart from './cart'

//main component-rendered in index.js
class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: inventory,
      cartItems: [],
      userName: "",
      randomName: ''
    }
  }
  //gets user name from local storage and mounts cart items stored on server
  componentDidMount() {
    let name = localStorage.getItem("userName")
    this.setState({ userName: name });
    axios.get('http://localhost:8080/cart')
      .then(res => {
        console.log(res)
        this.setState({
          cartItems: res.data
        })
      })
      .catch((error) => {
        console.log("error2")
        console.log(error)
      })
  };
  //used in home page to generate random derby names
  generateName = (e) => {
    let index = Math.floor(Math.random() * derbyNames.length + 1)
    let name = derbyNames[index];
    this.setState({ randomName: name })
  }
  //used on home page, enters new user name into local storage
  handleSubmit = (e) => {
    e.preventDefault()
    let user = e.target.userName.value;
    this.setState({ userName: user })
    localStorage.setItem("userName", e.target.userName.value)
    e.target.userName.value = "";
  }
  //used on items page to add item to cart and update server
  addToCart = (i) => {
    let item = this.state.inventory.find((el) => {
      return el.id === i;
    })
    axios.post('http://localhost:8080/cart', item)
      .then((res) => {
        this.setState({ cartItems: res.data })
      })
      .catch((error) => {
        console.log("error")
      })
  }
  //used on cart page to remove items and update server
  removeFromCart = (i) => {
    let index = this.state.cartItems.findIndex((e) => { return e.id === i });
    axios.delete('http://localhost:8080/cart', { data: this.state.cartItems[index] })
      .then((res) => {
        this.setState({ cartItems: res.data })
      })
      .catch((error) => {
        console.log("error")
        console.log(error)
      })
  }
  //loads skates info onto items oage
  skates = (item) => {
    return item.type === "skates"
  }
  //loads wheels info onto items page
  wheels = (item) => {
    return item.type === "wheels"
  }
  render() {
    let wheelsList = this.state.inventory.filter(this.wheels)
    let skatesList = this.state.inventory.filter(this.skates)
    return (
      <div className=" container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <h1 className="centerText storeTitle">
              Rink Rash Skate Shop
            </h1>
          </div>
          <div className="col-lg-3">
            <img className="logo" src="/images/rinkrash.jpg" />
          </div>
        </div>
        <nav className="navbar">
          <button type="button" className="btn navBarButtons">
            <Link className="buttonText" to="/shop">Shop</Link>
          </button>
          <button type="button" className="btn navBarButtons">
            <Link className="buttonText" to="/">Home</Link>
          </button>
          <div className='cartDiv'>
            <button type="button" className="btn navBarButtons">
              <i className=" icon fas fa-shopping-cart"></i>
              <Link className="buttonText" to="/cart"> Cart</Link>
            </button>
            <p className="cart">You have {this.state.cartItems.length} items in your cart.</p>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact render={(props) => <Home
            generateName={this.generateName}
            randomName={this.state.randomName}
            handleSubmit={this.handleSubmit}
            userName={this.state.userName}{...props} />} />
          <Route path="/shop" render={(props) => (
            !this.state.userName ? (
              <Redirect to='/' exact />
            ) : (<Shop
              cartItems={this.state.cartItems}
              addToCart={this.addToCart}
              skatesList={skatesList}
              wheelsList={wheelsList}{...props} />))} />
          <Route path={"/cart"} render={(props) => <Cart
            cartItems={this.state.cartItems} 
            remove={this.removeFromCart}{...props} />} />
        </Switch>
      </div>
    );
  }

}

export default App;
