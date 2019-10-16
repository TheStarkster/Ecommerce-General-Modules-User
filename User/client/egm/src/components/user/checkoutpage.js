import React, { Component } from 'react'
import { Dropdown, DropdownItem, DropdownButton } from 'react-bootstrap'
import '../dist/styles/checkout.css'
import PersonPinCircleTwoToneIcon from '@material-ui/icons/PersonPinCircleTwoTone';
import ShoppingBasketTwoToneIcon from '@material-ui/icons/ShoppingBasketTwoTone';
import Axios from 'axios'
import CustomNav from './master-components/navbarv2'
class CheckoutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemCount: 1,
            cartTotal: this.props.location.state.cartdata.cartTotal,
            cart: this.props.location.state.cartdata.cart
        }
        this.RemoveProduct = (item) => {
            var tempArray = this.state.cart.filter(
                function (obj) {
                    return obj.productID !== item.productID
                }
            )
            this.setState({
                cart: tempArray
            }, () => {
                this.CalculateCartSummary()
            })
        }
        this.ReCalculateCart = (event) => {
            var cart_total = 0
            var arr = event.target.id.split('-').map(function (item) {
                return item.trim()
            })
            var itemCount = event.target.value === NaN || event.target.value < 0 || event.target.value === "" ? 0 : event.target.value
            var itemID = arr[2]
            this.state.cart.forEach(element => {
                if (element.productID === itemID) {
                    cart_total += parseFloat(element.price) * itemCount
                } else {
                    cart_total += parseFloat(element.price)
                }
            })
            this.setState({
                cartTotal: cart_total
            })
        }
        this.CalculateCartSummary = () => {
            var cart_total = 0
            this.state.cart.forEach(element => {
                cart_total += parseFloat(element.price)
            });
            this.setState({
                cartTotal: cart_total
            })
        }
        this.RenderCartSumary = () => {
            this.cartsummarr = []
            var inp_id = 1
            this.state.cart.forEach(element => {
                this.cartsummarr.push(
                    <div className="checkout-cart-item-root">
                        <div className="row">
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <img className="checkout-cart-item-image" src={element.image} alt="Product Image"></img>
                            </div>
                            <div className="col-8 checkout-items">
                                <div className="col-12 checkout-item-name">
                                    {element.name}
                                </div>
                                <div className="col-12">
                                    Rs.{element.price}
                                </div>
                                <div className="col-12">
                                    <input type="number" id={"inc-inp-" + element.productID} placeholder="1" onChange={this.ReCalculateCart} className="qty-inp"></input>
                                </div>
                                <div className="col-12">
                                    <i class="fas fa-times-circle" onClick={() => this.RemoveProduct(element)}> Remove Product</i>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                inp_id += 1
            });
            return this.cartsummarr
        }
    }
    RequestOrderPayment = () => {
        // let amntTxt = document.getElementById('amount').value
        Axios.post('http://3.87.22.103:2024/api/razorpay/create-order', { amount: (parseFloat(this.props.location.state.price) + 28) * parseFloat(this.state.itemCount) * 100, receipt: "gurkaran_order_54654" })
            .then(response => {
                this.setState({
                    orderID: response.data.id
                })
                var options = {
                    "key_id": "rzp_test_hcBEyLK2rKpWkS",
                    "key_secret": "AilD2hmREnc2HEDIuIBYzu6O",
                    "amount": (parseFloat(this.props.location.state.price) + 28) * parseFloat(this.state.itemCount) * 100,
                    "currency": "INR",
                    "name": "DentalStall",
                    "description": this.props.location.state.name,
                    "order_id": this.state.orderID,
                    handler: function (response) {
                        alert(response.razorpay_payment_id);
                    },
                    "prefill": {
                        "name": document.getElementById('name').value,
                        "email": document.getElementById('email').value,
                        "contact": document.getElementById('phone').value,
                    },
                    "notes": {
                        "address": "note value",
                    },
                    "theme": {
                        "color": "#c9eafb"
                    }
                };
                var rzp1 = new window.Razorpay(options)
                rzp1.open();
            })
    }
    render() {
        return (
            <div className="checkout-root">
                <CustomNav history={this.props.history} userdata={this.props.location.state.userdata}></CustomNav>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 checkout-detail-col">
                            <div className="row">
                                <div className="col-12">
                                    <h2>Checkout</h2>
                                </div>
                                <div className="col-12 checkout-detail-label">
                                    SHIPPING DETAILS
                                </div>
                                <div className="hr"></div>
                                <div className="col-12">
                                    {this.props.shipping_details ?
                                        this.props.shipping_details.default
                                        :
                                        <div>
                                            <h6 className="warning">No Address Found!</h6>
                                            <button className="address-btn btn btn-primary"><PersonPinCircleTwoToneIcon></PersonPinCircleTwoToneIcon>Add New Address</button>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 checkout-detail-label">
                                    PAYMENT DETAILS
                            </div>
                                <div className="hr"></div>
                                <div className="col-12">
                                    <input className="form-control checkout-input" placeholder="Full Name"></input>
                                    <input className="form-control checkout-input" placeholder="Email"></input>
                                    <input className="form-control checkout-input" placeholder="Contact"></input>
                                    <button className="purchase-btn btn btn-success"><ShoppingBasketTwoToneIcon></ShoppingBasketTwoToneIcon>PURCHASE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-4 checkout-detail-label">
                                                YOUR ORDER
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="col-10 checkout-items-all">
                                        {this.RenderCartSumary()}
                                    </div>
                                    <div className="hr"></div>
                                    <div className="col-12 checkout-items-calc">
                                        <div className="row">
                                            <div className="col-6 calc-label">
                                                SUBTOTAL
                                            </div>
                                            <div className="col-6">
                                                Rs. {this.state.cartTotal}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 calc-label">
                                                SHIPPING
                                            </div>
                                            <div className="col-6">
                                                Rs. 0
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 calc-label">
                                                TAXES
                                            </div>
                                            <div className="col-6">
                                                Rs. 0
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 calc-label">
                                                TOTAL
                                            </div>
                                            <div className="col-6">
                                                Rs. {this.state.cartTotal}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutPage


// orderID: "",
//             userdata: {
//                 name: "Gurkaran Singh",
//                 email: "sgurkaran2000@gmail.com",
//                 contact: "+91 9953579196",
//                 gender: "n/a",
//                 citizen: "New Delhi, India",
//                 shipping_add: {
//                     default: {
//                         name: "Gurkaran Singh",
//                         address: "F-19/91, Sector-15, Rohini",
//                         city: "New Delhi",
//                         state: "Delhi",
//                         country: "India",
//                         zipcode: "110089"
//                     }
//                 }
//             },