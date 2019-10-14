import React, { Component } from 'react'
import { Dropdown, DropdownItem, DropdownButton } from 'react-bootstrap'
import '../dist/styles/checkout.css'
import Axios from 'axios'
import CustomNav from './master-components/navbarv2'
class CheckoutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemCount: 1,
            orderID: "",
            userdata: {
                name: "Gurkaran Singh",
                email: "sgurkaran2000@gmail.com",
                contact: "+91 9953579196",
                gender: "n/a",
                citizen: "New Delhi, India",
                shipping_add: {
                    default: {
                        name: "Gurkaran Singh",
                        address: "F-19/91, Sector-15, Rohini",
                        city: "New Delhi",
                        state: "Delhi",
                        country: "India",
                        zipcode: "110089"
                    }
                }
            },
        }
        console.log(this.props.location.state)
    }
    RequestOrderPayment = () => {
        // let amntTxt = document.getElementById('amount').value
        Axios.post('http://localhost:2024/api/razorpay/create-order', { amount: (parseFloat(this.props.location.state.price) + 28) * parseFloat(this.state.itemCount) * 100, receipt: "gurkaran_order_54654" })
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
            <div>
                <CustomNav history={this.props.history} userdata={this.props.location.state.userdata} loggedIn={false}></CustomNav>
                <div className="checkout-page-root container jumbotron">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Cart Summary</h3>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-4">
                                                Name:
                                            </div>
                                            <div className="col-8">
                                                <h6>{this.props.location.state.itempushed === 1 ? this.props.location.state.name : null}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-4">
                                                No. of Package:
                                            </div>
                                            <div className="col-6">
                                                <div className="row">
                                                    <div className="col-3 d-flex justify-content-center">
                                                        <button className="itemcount-btn" onClick={() => this.setState({ itemCount: parseInt(document.getElementById('item-count-txt').value) + 1 })}>+</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <input type="number" id="item-count-txt" value={this.state.itemCount} className="itemcount-input"></input>
                                                    </div>
                                                    <div className="col-3 d-flex justify-content-center">
                                                        <button className="itemcount-btn" onClick={() => parseInt(document.getElementById('item-count-txt').value) > 1 ? this.setState({ itemCount: parseInt(document.getElementById('item-count-txt').value) - 1 }) : null}>-</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="hr"></div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-4">
                                                <h7 className="sub-amounts">Tax (GST)</h7>
                                            </div>
                                            <div className="col-8">
                                                <h7 className="sub-amounts">Rs.28</h7>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-4">
                                                Total:
                                            </div>
                                            <div className="col-8">
                                                <h5>Rs.{(parseFloat(this.props.location.state.price) + 28) * parseFloat(this.state.itemCount)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="col-12">
                                    <input type="text" id="name" className="form-control chk-out-input" placeholder="First and Last Name"></input>
                                </div>
                                <div className="col-12">
                                    <input type="email" id="email" className="form-control chk-out-input" placeholder="Email"></input>
                                </div>
                                <div className="col-12">
                                    <input type="phone" id="phone" className="form-control chk-out-input" placeholder="Contact"></input>
                                </div>
                                {this.state.userdata.shipping_add ?
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <Dropdown>
                                                    <DropdownButton title={this.state.userdata.shipping_add.default.name + "'s"}>
                                                        <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Super-Admin" })}>Super-Admin</DropdownItem>
                                                        {/* <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Admin" })}>Admin</DropdownItem> */}
                                                        {/* <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Executive" })}>Executive</DropdownItem> */}
                                                        <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Developer" })}>Developer</DropdownItem>
                                                    </DropdownButton>
                                                </Dropdown>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-center">
                                                <button className="btn btn-success btn-pay-now" id="rzp-button1" onClick={() => this.RequestOrderPayment()}>Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                        <button className="btn btn-primary">Add Address</button>
                                        <div className="col-6 d-flex align-items-center justify-content-center">
                                            <button className="btn btn-success">Pay Now</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutPage