import React, { Component } from 'react'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

class ProfileAccount extends Component {
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
    OpenInputForEdit(){

    }
    render() {
        return (
            <div>
                {/* <div className="Edit-Personal-Detail">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <input className="form-control" type="text"></input>
                                <input className="form-control" type="text"></input>
                                <input className="form-control" type="text"></input>
                                <input className="form-control" type="text"></input>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="custom-flex-row">
                    <div className="bread-crumb-root">
                        <HomeTwoToneIcon></HomeTwoToneIcon>
                        <ChevronRightTwoToneIcon></ChevronRightTwoToneIcon>
                        <h6>Account</h6>
                    </div>
                    <div className="row-flex-1">
                        <h2>Account</h2>
                        <DeleteTwoToneIcon></DeleteTwoToneIcon>
                    </div>
                    <div className="card-containers">
                        <div className="Acc-Details-Root">
                            <div className="acc-detail-container-1" id="Edit-Personal-Detail">
                                <h6>Personal Details</h6>
                                <EditTwoToneIcon></EditTwoToneIcon>
                            </div>
                            <div className="acc-detail-container-2">
                                <div className="Personal-Detail-1">
                                    <h8>Full Name</h8>
                                    <h8>Email</h8>
                                    <h8>Password</h8>
                                    <h8>Contact</h8>
                                    <h8>Gender</h8>
                                </div>
                                <div className="Personal-Detail-2">
                                    <h8>{this.state.userdata.name}</h8>
                                    <h8>{this.state.userdata.email}</h8>
                                    <h8>*******</h8>
                                    <h8>{this.state.userdata.contact}</h8>
                                    <h8>{this.state.userdata.gender}</h8>
                                </div>
                            </div>
                        </div>
                        <div className="Acc-Details-Root">
                            <div className="acc-detail-container-1">
                                <h6>Shipping Details</h6>
                                <EditTwoToneIcon></EditTwoToneIcon>
                            </div>
                            <div className="acc-detail-container-2">
                                <div className="Personal-Detail-1">
                                    <h8>Name</h8>
                                    <h8>Address</h8>
                                    <h8>City</h8>
                                    <h8>Country</h8>
                                    <h8>State</h8>
                                    <h8>Zip Code</h8>
                                </div>
                                <div className="Personal-Detail-2">
                                    <h8>{this.state.userdata.shipping_add.default.name}</h8>
                                    <h8>{this.state.userdata.shipping_add.default.address}</h8>
                                    <h8>{this.state.userdata.shipping_add.default.city}</h8>
                                    <h8>{this.state.userdata.shipping_add.default.country}</h8>
                                    <h8>{this.state.userdata.shipping_add.default.state}</h8>
                                    <h8>{this.state.userdata.shipping_add.default.zipcode}</h8>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-containers">
                        <div className="Acc-Details-Root">
                            <div className="acc-detail-container-1">
                                <h6>Other</h6>
                            </div>
                            <div className="acc-detail-container-2">
                                <div className="Personal-Detail-1">
                                    <h8>Wishlist</h8>
                                    <h8>Order List</h8>
                                    <h8>Cart</h8>
                                    <h8>Referals</h8>
                                    <h8>Help Center</h8>
                                </div>
                                <div className="Personal-Detail-2">
                                    <h8>N/A</h8>
                                    <h8>N/A</h8>
                                    <h8>N/A</h8>
                                    <h8>N/A</h8>
                                    <h8>Contact Now</h8>
                                </div>
                            </div>
                        </div>
                        <div className="Other-Shipping-Details-Root">
                            <div className="acc-detail-container-1">
                                <h6>Other Shipping Addresses</h6>
                            </div>
                            <div className="custom-col">
                                <div className="Personal-Detail-1">
                                    <h8>No Addresses Found!</h8>
                                </div>
                                <div className="custom-col-full">
                                    <div className="jumbotron">
                                        <h6>Add New Address +</h6>
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

export default ProfileAccount