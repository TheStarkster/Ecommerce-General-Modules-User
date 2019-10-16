import React, { Component } from 'react'
import { Dropdown, DropdownItem, DropdownButton } from 'react-bootstrap'
import './../../dist/styles/cart-items.css'
import Axios from 'axios'
class CartItemsModal extends Component {
    constructor(props) {
        super(props)
        this.GotoCheckout = () => {
            this.props.history.push({
                pathname: '/checkout',
                state: {
                    cartdata: {
                        cart: this.props.cartdata,
                        cartTotal: this.props.cartTotal
                    },
                    userdata: this.props.userdata,
                }
            })
        }
    }

    RenderCartItems() {
        var CartItems = []
        this.props.cartdata.forEach(element => {
            CartItems.push(
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <img src={element.image} alt="..." className="cart-product-image"></img>
                        </div>
                        <div className="col-8">
                            <div className="col-12 cart-product-name">
                                <h4>{element.name}</h4>
                            </div>
                            <div className="col-12 cart-product-price">
                                <h4>Rs.{element.price}</h4>
                            </div>
                            <div className="col-12 cart-product-price">
                                <i class="fas fa-times-circle" onClick={() => this.props.triggerRemoveItem(element)}> Delete Product</i>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (CartItems)
    }
    render() {

        return (
            <div>
                <div className="cart-items-root-bg"></div>
                {this.props.cartdata.length > 0 ?
                    <div className="cart-items-root">
                        <div className="close-btn" onClick={() => this.props.triggerHideModal()}>
                            <i class="fas fa-times-circle"></i>
                        </div>
                        <div className="items-root">
                            <div className="col-12 all-products">
                                <div className="row">
                                    {this.RenderCartItems()}
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 cart-total-root">
                            <div className="row">
                                <div className="col-4 cart-total">
                                    <h4>Cart Total</h4>
                                </div>
                                <div className="col-4 cart-total">
                                    <h4>Rs. {this.props.cartTotal}</h4>
                                </div>
                                <div className="col-4 cart-total">
                                    <button className="btn btn-success" onClick={() => this.GotoCheckout()}>Checkout</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12 cart-total-root">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 cart-total">
                                        <h4>Cart Total</h4>
                                    </div>
                                    <div className="col-6 cart-total">
                                        <h4>Rs. {this.props.cartTotal}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 cart-total">
                                <button className="btn btn-success" style={{ width: '100%' }} onClick={() => this.GotoCheckout()}>Checkout</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="empty-cart-root">
                        <div className="col-12">
                            <div className="close-btn" onClick={() => this.props.triggerHideModal()}>
                                <i class="fas fa-times-circle"></i>
                            </div>
                            <img src={require('../../assets/images/emptycart.png')} alt="empty cart"></img>
                            <h2>Oops! Your Cart is Empty</h2>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CartItemsModal