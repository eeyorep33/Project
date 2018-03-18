import React, { Component } from 'react';

class Cart extends Component {
    render() {
        //displays total price
        const sum = (total, num) => {
            return total + num.price;
        }
        //conditional rendering for empty cart
        const emptyCart = (length) => {
            if (length === 0) {
                return <p className="centerText subMenuTitle">Your cart is empty</p>
            } else {
                return <div>
                    <h1 className="subMenuTitle centerText">Cart Items</h1>
                    {this.props.cartItems.map((item, i) =>
                        <div className='divBorder'>
                            <img className=" img-fluid cartImg space  top2 cartDisplay marLeft" src={item.img} />
                            <p className='itemInfo cartDisplay font marLeft'>{item.name}</p>
                            <div className="cartDiv2">
                                <p className='itemInfo cartDisplay top4 font marLeft2'>${item.price}</p>
                                <button onClick={() => this.props.remove(item.id)}
                                    className="cartDisplay btn catButtonText cartDiv top4">Remove Item</button>
                            </div>
                        </div>)}
                    <p className='itemInfo marLeft3 font'>Total ${this.props.cartItems.reduce(sum, 0)}</p>
                </div>
            }
        }
        return (
            <div>
                {emptyCart(this.props.cartItems.length)}
            </div>
        )
    }
}
export default Cart