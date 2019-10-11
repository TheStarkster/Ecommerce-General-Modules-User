import React, { Component } from 'react';
import '../../dist/styles/navbar.css'
import $ from 'jquery'

class CustomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false,
            showAuthPanel: false
        }
        this.CloseAuthPanel = this.CloseAuthPanel.bind(this)

        this.componentDidMount = () => {
            $(window).trigger('load')
            $(window).on('load resize', function () {
                var win = $(this)
                if (win.width() > 768) {
                    $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(2)').css('opacity', '1')
                    $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(3)').css('opacity', '1')
                } else {
                    $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(2)').css('opacity', '0')
                    $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(3)').css('opacity', '0')
                }
            })
        }
    }
    HandlerExpand = () => {
        if (this.state.navExpanded === false) {
            $('.Navbar').css('height', 'inherit')
            $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(2)').css('opacity', '1')
            $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(3)').css('opacity', '1')
            this.setState({ navExpanded: true })
        } else {
            $('.Navbar').css('height', '60px')
            $('.Navbar').css('opacity', '1')

            $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(2)').css('opacity', '0')
            $('.NavBarScreen > div > ul:nth-child(2) > li:nth-child(3)').css('opacity', '0')
            this.setState({ navExpanded: false });
        }
    }
    ValidateUserSession = () => {
        if (this.props.loggedIn === false) {
            this.setState({
                showAuthPanel: true
            })
        }
    }
    CloseAuthPanel = () => {
        this.setState({
            showAuthPanel: false
        })
    }
    render() {
        return (
            <div>
                {this.state.showAuthPanel === true ? <UserSessionCard history={this.props.history} closePanel={this.CloseAuthPanel} /> : null}
                <div className="Navbar">
                    <div className="NavBarScreen">
                        <button className="btn btn-secondary expand" onClick={() => this.HandlerExpand()}>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        <div>
                            <ul>
                                <li className="BrandName">DentalStall</li>
                                <li>Products</li>
                                <li>Catagory</li>
                                <li>Deals</li>
                            </ul>
                            <ul>
                                <li className="BrandName invisible Hamburger">B</li>
                                <li className="Other-li" onClick={() => {
                                    if (!this.props.userdata) { this.ValidateUserSession() } else {
                                        this.props.history.push({
                                            pathname: '/profile',
                                            state: {
                                                userdata: this.props.userdata
                                            }
                                        })
                                    }
                                }}>{this.props.userdata ? this.props.userdata.name : "Guest"}</li>
                                <li className="Other-li">Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomNav

class UserSessionCard extends Component {
    // constructor(props){
    // super(props)
    // }
    render() {
        return (
            <div className="SessionAuthCardRoot">
                <Login closePanel={this.props.closePanel} history={this.props.history}></Login>
            </div>
        )
    }
}
class Login extends Component {
    render() {
        return (
            <div className="LoginRoot">
                <div className="CloseBtn" onClick={() => { this.props.closePanel() }}>
                    <i className="fa fa-times"></i>
                </div>
                <div className="row">
                    <h3>Welcome Back!</h3>
                    <h5>Please Login To Continue</h5>
                </div>
                <div className="row">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="row">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="row">
                    <button className="form-control btn btn-primary">Login</button>
                </div>
                <hr></hr>
                <div className="row">
                    <h5>Or Login With</h5>
                </div>
                <div className="d-flex justify-content-center margin-15">
                    <img src={require('../../assets/icons/icons8-facebook-240.png')} alt="Facebook" width="64px" />
                    <img src={require('../../assets/icons/icons8-google-144.png')} alt="Google" width="64px" />
                </div>
                <div className="row">
                    <h6 onClick={() => this.props.history.push('/')}>New Here? Then Register</h6>
                </div>
            </div>
        )
    }
}