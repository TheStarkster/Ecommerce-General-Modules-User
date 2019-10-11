import React, { Component } from 'react'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import '../../dist/styles/profile-payments.css'
import $ from 'jquery'

class ProfilePayement extends Component {
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
        this.componentDidMount = () => {

        }
    }
    render() {
        return (
            <div>
                {/* <div className="custom-bg-dark"></div> */}
                <div className="profile-payment-root">
                    <div className="columify">
                        <div className="custom-row-visa">
                            <div className="custom-col-2">
                                <div className="credit-card-root-visa">
                                    <div className="custom-row">
                                        <div className="custom-col-2 top-row">
                                            <div className="chip-root">
                                                <img src={require('../../assets/icons/chip.png')} width="60px" alt="visa"></img>
                                            </div>
                                            <div className="visa-root">
                                                <img src={require('../../assets/icons/visa-logo.png')} width="60px" alt="visa"></img>
                                            </div>
                                        </div>
                                        <div className="custom-col-2 card-number">
                                            <h5>5484 6523 4789 6513</h5>
                                        </div>
                                        <div className="card-detail-lb">
                                            <div className="card-holder-lb">
                                                CARD HOLDER
                                        </div>
                                            <div className="card-expiry-lb">
                                                EXPIRY
                                        </div>
                                        </div>
                                        <div className="card-detail-value">
                                            <div className="card-holder-value">
                                                GURKARAN SINGH
                                        </div>
                                            <div className="card-expiry-value">
                                                02/23
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-row">
                            <div className="custom-col-2">
                                <div className="credit-card-root-master">
                                    <div className="custom-row">
                                        <div className="custom-col-2 top-row">
                                            <div className="chip-root">
                                                <img src={require('../../assets/icons/chip.png')} width="60px" alt="visa"></img>
                                            </div>
                                            <div className="visa-root">
                                                <img src={require('../../assets/icons/master-logo.png')} width="60px" alt="visa"></img>
                                            </div>
                                        </div>
                                        <div className="custom-col-2 card-number">
                                            <h5>5484 6523 4789 6513</h5>
                                        </div>
                                        <div className="card-detail-lb">
                                            <div className="card-holder-lb">
                                                CARD HOLDER
                                        </div>
                                            <div className="card-expiry-lb">
                                                EXPIRY
                                        </div>
                                        </div>
                                        <div className="card-detail-value">
                                            <div className="card-holder-value">
                                                GURKARAN SINGH
                                        </div>
                                            <div className="card-expiry-value">
                                                02/23
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card-detail-window-root">
                        <div className="card-detail-row">
                            <h5>Card Details</h5>
                        </div>
                        <div className="card-detail-row">
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="card-detail-row">
                            <input type="text" className="form-control"></input>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ProfilePayement