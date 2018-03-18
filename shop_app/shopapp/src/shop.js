import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import Items from './items';



class Shop extends Component {
  render() {
    const { match, location } = this.props
    //conditional rendering for shop page to display only brand images with /shop endpoint
    const shopPage = (path) => {
      if (path === '/shop') {
        return (<div>
          <h2 className="subMenuTitle top2 centerText">
            Special: Buy one pack of wheels, get the second half off!!!!
          </h2>
          <h3 className="shopText centerText space">
            We carry a variety of top brands!!!
          </h3>
          <div className="row">
            <div className="col-lg-4 space space">
              <img className="img-fluid pictureSize pictureCenter pictureCenter" src="/images/antik_logo.png" />
            </div>
            <div className="col-lg-4 space">
              <img className="img-fluid pictureSize pictureCenter" src="images/bontlogo.jpg" />
            </div>
            <div className="col-lg-4 space">
              <img className="img-fluid pictureSize pictureCenter" src="images/reidell_logo.jpg" />
            </div>
            <div className="col-lg-4 space">
              <img className="img-fluid pictureSize pictureCenter" src="images/atom_logo.jpg" />
            </div>
            <div className="col-lg-4 space">
              <img className="img-fluid pictureSize pictureCenter" src="images/sure-Grip_logo.png" />
            </div>
            <div className="col-lg-4 space">
              <img className="img-fluid pictureSize pictureCenter" src="images/reckless_logo.jpg" />
            </div>
          </div>
        </div>)
      }
    }
    return (
      <div className="container-fluid">
        <div className='subButtonsDiv'>
          <button type="button" className="btn catagoryButton">
            <Link className="catButtonText" to={match.url + "/skates"}>Skates</Link>
          </button>
          <button type="button" className="btn">
            <Link className="catButtonText" to={match.url + '/wheels'}>wheels</Link>
          </button>
        </div>
        {shopPage(location.pathname)}
        <Switch>
          <Route path={match.url + "/skates"} render={(props) => <Items
            items={this.props.cartItems}
            add={this.props.addToCart}
            inventory={this.props.skatesList}{...props} />} />
          <Route path={match.url + "/wheels"}  render={(props) => <Items
            items={this.props.cartItems}
            add={this.props.addToCart}
            inventory={this.props.wheelsList}{...props} />} />
        </Switch>
      </div>
    )
  }
}
export default Shop