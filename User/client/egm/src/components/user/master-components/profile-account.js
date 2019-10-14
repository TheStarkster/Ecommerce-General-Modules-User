import React, { Component } from 'react'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import BookmarksTwoToneIcon from '@material-ui/icons/BookmarksTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import PersonPinCircleTwoToneIcon from '@material-ui/icons/PersonPinCircleTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import PhoneAndroidTwoToneIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import $ from 'jquery'
class ProfileAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuIcon: "menu",
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
            console.log(this.state.menuIcon)
            $('menu-mobile').click(function () {
                alert("clicked")
            })
        }
    }
    OpenInputForEdit() {

    }
    ExpandMenu() {
        if ($('.menu-main').hasClass('expand-menu')) {
            $('.menu-main').removeClass('expand-menu')
            this.setState({
                menuIcon: "menu"
            }, () => {
                $('.menu-items').css({
                    "transition": "0s",
                    'opacity': '0'
                })
            })
        } else {
            $('.menu-main').addClass('expand-menu')
            this.setState({
                menuIcon: "close"
            }, () => {
                setTimeout(() => {
                    $('.menu-items').css({
                        "transition": "0.4s",
                        'opacity': '1'
                    })
                }, 500)
            })
        }
    }
    render() {
        return (
            <div className="custom-flex-row">
                <div className="profile-detail-root-mobile">
                    <div className="user-image-container">
                        <div className="menu-main">
                            <div className="menu-items">
                                <div className="option icon-mobile">
                                    <AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
                                    <h6>Account</h6>
                                </div>
                                <div className="option icon-mobile">
                                    <AccountBalanceWalletTwoToneIcon></AccountBalanceWalletTwoToneIcon>
                                    <h6>Payments</h6>
                                </div>
                            </div>
                            <div className="menu-items">
                                <div className="option icon-mobile">
                                    <AssignmentTurnedInTwoToneIcon></AssignmentTurnedInTwoToneIcon>
                                    <h6>Orders</h6>
                                </div>
                                <div className="option icon-mobile">
                                    <NotificationsNoneTwoToneIcon></NotificationsNoneTwoToneIcon>
                                    <h6>Notification</h6>
                                </div>
                            </div>
                            <div className="menu-items">
                                <div className="option icon-mobile">
                                    <BookmarksTwoToneIcon></BookmarksTwoToneIcon>
                                    <h6>Wishlist</h6>
                                </div>
                                <div className="option icon-mobile">
                                    <SettingsTwoToneIcon></SettingsTwoToneIcon>
                                    <h6>Settings</h6>
                                </div>
                            </div>
                        </div>
                        <div className="menu-mobile" onClick={() => this.ExpandMenu()}>
                            {this.state.menuIcon === "menu" ?
                                <MenuIcon></MenuIcon>
                                :
                                <CloseIcon></CloseIcon>
                            }
                        </div>
                        <div className="user-image">
                            <img src={require('../../assets/icons/user-dp.jpg')} alt="user"></img>
                        </div>
                    </div>
                    <div className="profile-name"><h3>{this.state.userdata.name}</h3></div>
                </div>
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
                    <div className="Acc-Details-Root">
                        <div className="acc-detail-container-1">
                            <h6>Other Shipping Addresses</h6>
                        </div>
                        <div className="acc-detail-container-2">
                            <div className="Personal-Detail-1">
                                <h8>Default</h8>
                            </div>
                            <div className="Personal-Detail-2">
                                <h8>{this.state.userdata.shipping_add.default.name + "'s"}</h8>
                                <h8 className="AddNewAddress">Add New +</h8>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileAccount