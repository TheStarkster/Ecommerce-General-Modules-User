import React, { Component } from 'react'
import { Dropdown, DropdownItem, DropdownButton } from 'react-bootstrap'
class CheckoutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            }
        }
    }
    render() {
        return (
            <div className="checkout-page-root container jumbotron">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="First and Last Name"></input>
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control" placeholder="Email"></input>
                            </div>
                            <div className="col-12">
                                <input type="phone" className="form-control" placeholder="Contact"></input>
                            </div>
                            {this.state.userdata.shipping_add ?
                                <div className="col-12 d-flex align-items-center justify-content-center">
                                    <Dropdown>
                                        <DropdownButton title={this.state.userdata.shipping_add.default.name + "'s"}>
                                            <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Super-Admin" })}>Super-Admin</DropdownItem>
                                            {/* <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Admin" })}>Admin</DropdownItem> */}
                                            {/* <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Executive" })}>Executive</DropdownItem> */}
                                            <DropdownItem onSelect={() => this.setState({ DropDownTitle: "Developer" })}>Developer</DropdownItem>
                                        </DropdownButton>
                                    </Dropdown>
                                </div>
                                :
                                <div className="col-12 d-flex align-items-center justify-content-center">
                                    <button className="btn btn-primary">Add Address</button>
                                </div>
                            }
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <button className="btn btn-success">Pay Now</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12">
                                <h3>Cart Summary</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutPage