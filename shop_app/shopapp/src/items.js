import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import Details from './details'
//Component renders both skates and wheels items depending on data passed in
class Items extends Component {
    render() {
        const { match, location } = this.props
        const ItemPage = (path) => {
            if (path === '/shop/skates' || path === '/shop/wheels') {
                return <div>
                    <h2 className="centerText subMenuTitle">{this.props.inventory[0].type}</h2>
                    <div className="row">
                        {this.props.inventory.map((item, i) =>
                            <div className="col-lg-4">
                                <Link to={match.url + '/' + item.id}> <h4 className="centerText itemInfo" center>
                                    {item.name}
                                </h4></Link>
                                <img className="pictureCenter img-fluid pictureSize" src={item.img} />
                                <h5 className="centerText itemInfo">
                                    Price:${item.price}
                                </h5>
                                <button type="button" onClick={() => this.props.add(item.id)} className="btn catButtonText pictureCenter space">
                                    Add To Cart
                               </button>
                            </div>)}
                    </div>
                </div>
            }
        }
        return (<div>
            {ItemPage(location.pathname)}
            <Switch>
                <Route path={match.url + '/:id'} render={(props) => <Details
                    add={this.props.add}
                    items={this.props.inventory}
                    {...props} />} />
            </Switch>
        </div>
        )
    }
}
export default Items;

