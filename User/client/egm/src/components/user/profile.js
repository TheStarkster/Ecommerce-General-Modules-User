import React, { Component } from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import BookmarksTwoToneIcon from '@material-ui/icons/BookmarksTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import PersonPinCircleTwoToneIcon from '@material-ui/icons/PersonPinCircleTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import PhoneAndroidTwoToneIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import '../dist/styles/profile2.css'
import ProfileAccount from '../user/master-components/profile-account'
import ProfilePayment from '../user/master-components/profile-payments'
import ProfileOrders from '../user/master-components/profile-orders'
import $ from 'jquery'
class Profile extends Component {
    constructor(props) {
        super(props)
        this.componentDidMount = () => {
            $(document).ready(function () {
                $(window).trigger("load")
                $(window).on("load", function () {
                    var win = $(this)
                    if (win.width() <= 768) {
                        $('.profile-detail-root').css('display', 'none')
                        // $('.product-image').addClass('col-6')
                    }
                })
            })

        }

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
            <div className="profile-root">
                <div className="sidebar-nav-root">
                    <div className="back-arrow-root">
                        <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
                    </div>
                    <div className="option icon">
                        <AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
                    </div>
                    <div className="option icon">
                        <AccountBalanceWalletTwoToneIcon></AccountBalanceWalletTwoToneIcon>
                    </div>
                    <div className="option icon">
                        <AssignmentTurnedInTwoToneIcon></AssignmentTurnedInTwoToneIcon>
                    </div>
                    <div className="option icon">
                        <NotificationsNoneTwoToneIcon></NotificationsNoneTwoToneIcon>
                    </div>
                    <div className="option icon">
                        <BookmarksTwoToneIcon></BookmarksTwoToneIcon>
                    </div>
                    <div className="option icon">
                        <SettingsTwoToneIcon></SettingsTwoToneIcon>
                    </div>
                </div>
                <div className="profile-detail-root">
                    <div className="user-image-container">
                        <div className="user-image">
                            <img src={require('../assets/icons/user-dp.jpg')} alt="user"></img>
                        </div>
                    </div>
                    <div className="user-name">
                        <h4>{this.state.userdata.name}</h4>
                    </div>
                    <div className="balance-root">
                        <div className="balance-container">
                            <h6>Credits</h6>
                            <h6>Rs.0</h6>
                        </div>
                    </div>
                    <div className="contact-details-icon">
                        <PersonPinCircleTwoToneIcon></PersonPinCircleTwoToneIcon>
                        <h6>{this.state.userdata.citizen}</h6>
                    </div>
                    <div className="contact-details-icon">
                        <EmailTwoToneIcon></EmailTwoToneIcon>
                        <h6>{this.state.userdata.email}</h6>
                    </div>
                    <div className="contact-details-icon">
                        <PhoneAndroidTwoToneIcon></PhoneAndroidTwoToneIcon>
                        <h6>{this.state.userdata.contact}</h6>
                    </div>
                </div>
                <ProfileAccount></ProfileAccount>
            </div>
        )
    }
}
export default Profile