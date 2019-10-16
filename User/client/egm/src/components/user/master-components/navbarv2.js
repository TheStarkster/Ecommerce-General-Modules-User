import React, { Component } from 'react';
import '../../dist/styles/navbarv2.css'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import $ from 'jquery'

class CustomNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navExpanded: false,
            showAuthPanel: false
        }
        this.CloseAuthPanel = this.CloseAuthPanel.bind(this)
        this.componentDidMount = () => {
            var scrollState = 'top';
            $(window).scroll(function () {
                var scrollPos = $(window).scrollTop();

                if ((scrollPos != 0) && (scrollState === 'top')) {
                    $('.navbar').removeClass('scrolled')
                    $('.navbar').removeClass('default-scrolled')
                    scrollState = 'scrolled';
                }
                else if ((scrollPos === 0) && (scrollState === 'scrolled')) {
                    $('.navbar').addClass('scrolled')
                    scrollState = 'top';
                }
            })
        }
        this.componentWillMount = () => {
            $(window).trigger('load')
            $(window).on('resize load', function () {
                var win = $(this)
                if (win.width() <= 960) {
                    $('.cart').css('display', 'none')
                } else if (win.width() > 960) {
                    $('.cart-bottom-right-root').css('display', 'none')
                }
            })
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
            // <div>
            //     {this.state.showAuthPanel === true ? <UserSessionCard history={this.props.history} closePanel={this.CloseAuthPanel} /> : null}
            //     <div className="Navbar">
            //         <div className="NavBarScreen">
            //             <button className="btn btn-secondary expand" onClick={() => this.HandlerExpand()}>
            //                 <i className="fas fa-chevron-down"></i>
            //             </button>
            //             <div>
            //                 <ul>
            //                     <li className="BrandName">DentalStall</li>
            //                     <li>Products</li>
            //                     <li>Catagory</li>
            //                     <li>Deals</li>
            //                 </ul>
            //                 <ul>
            //                     <li className="Other-li" onClick={() => {
            //                         if (!this.props.userdata) { this.ValidateUserSession() } else {
            //                             this.props.history.push({
            //                                 pathname: '/profile',
            //                                 state: {
            //                                     userdata: this.props.userdata
            //                                 }
            //                             })
            //                         }
            //                     }}>{this.props.userdata ? this.props.userdata.name : "Guest"}</li>
            //                     <li className="Other-li">Cart</li>
            //                 </ul>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div>
                {
                    this.props.history.location.pathname === "/checkout" ?
                        null
                        :
                        <div className="cart-bottom-right-root" onClick={() => this.props.triggerShowModal()}>
                            <h7 className="cart-notify-mobile">{this.props.cart_item_count}</h7>
                            <ShoppingCartTwoToneIcon></ShoppingCartTwoToneIcon>
                        </div>
                }

                {this.state.showAuthPanel === true ? <UserSessionCard history={this.props.history} closePanel={this.CloseAuthPanel} /> : null}
                <nav class="navbar default-scrolled navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"><div className="Dental">Dental</div><div className="Stall">Stall</div></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Products <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Catagory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Deals</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-auto nav-actions cart">
                            <li class="nav-item">
                                <a class="nav-link"
                                    onClick={() => {
                                        if (!this.props.userdata) { this.ValidateUserSession() } else {
                                            this.props.history.push({
                                                pathname: '/profile',
                                                state: {
                                                    userdata: this.props.userdata
                                                }
                                            })
                                        }
                                    }}
                                >
                                    {this.props.userdata ? "Hi, " + this.props.userdata.name : "Guest"}
                                </a>
                            </li>
                            {
                                this.props.history.location.pathname === "/checkout" ?
                                    null
                                    :
                                    <li class="nav-item">
                                        <a class="nav-link nav-cart-icon" onClick={() => this.props.triggerShowModal()}>
                                            <h7 className="cart-notify">{this.props.cart_item_count}</h7>
                                            <ShoppingCartTwoToneIcon></ShoppingCartTwoToneIcon>
                                        </a>
                                    </li>
                            }

                        </ul>
                    </div>
                </nav>
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