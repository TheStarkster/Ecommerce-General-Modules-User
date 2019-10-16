import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import './dist/styles/Panels.css'
import $ from 'jquery'
import axios from 'axios'
import CustomMessage from './messages'
import Swal from 'sweetalert2'
class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            ShowSocialPanel: true
        }
        this.ChangeSocialPanelState = (e) => {
            if (e === "show") {
                this.setState({
                    ShowSocialPanel: true
                })
            }
            if (e === "hide") {
                this.setState({
                    ShowSocialPanel: false
                })
            }
        }
        this.componentDidMount = () => {
            $(window).trigger('load')
            var that = this
            $(window).on('load resize', function () {
                var win = $(this)
                if (win.height() >= 553) {
                    that.ChangeSocialPanelState("show")
                } else {
                    that.ChangeSocialPanelState("hide")
                }
            })
        }
    }

    SubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://3.87.22.103:2024/signin", {
            email: this.state.email,
            pass: this.state.pass
        })
            .then(result => {
                if (result.data.message === "200: User Authenticated") {
                    this.props.history.push({
                        pathname: '/home',
                        state: {
                            userdata: result.data
                        }
                    })
                }
                if (result.data.message === "Incorrect Password!") {
                    Swal.fire({
                        type: 'error',
                        title: 'Your Password is Incorrect!',
                        text: 'Please Try Again',
                    })
                }
                if (result.data.message === "User Not Registered") {
                    Swal.fire({
                        type: 'error',
                        title: 'Not Registered!',
                        text: 'Please Sign Up then Try again',
                    })
                }
            });
    }
    // input handlers
    EmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    PasswordHandler = (event) => {
        this.setState({ pass: event.target.value });
    }
    //misc handler
    static handleDismiss = () => {
        $('.alert').fadeOut("fast");
        // this.props.location.state.message = undefined;
    }
    render() {
        return (
            <div className="bg">
                <form onSubmit={this.SubmitHandler} method="POST">
                    <center>

                        {this.state.ShowSocialPanel ?
                            <div className="Panel-BrandName">
                                <img src={require('./assets/icons/logo-small.png')} alt="DentalStall" className="DentalStall-Logo img-adjusted"></img>
                                <div className="Panel-BrandName-Dental">Dental</div><div className="Panel-BrandName-Stall">Stall</div>
                            </div>
                            :
                            null
                        }
                        <Card style={{ width: '20rem' }} className="PanelCard">
                            <Card.Body>
                                <Card.Title>Enter Your Credentials</Card.Title>
                                <Card.Title className="UnderTitle">To SignIn</Card.Title>
                                <CustomMessage message={this.props.location.state === undefined ? "" : this.props.location.state.message} />
                                <Card.Text>
                                    <input type="email" className="form-control Panelinput" id="email" name="txtemail" placeholder="email@example.com" onChange={this.EmailHandler} />
                                    <input type="password" className="form-control Panelinput" id="pass" name="txtpassword" placeholder="Password" onChange={this.PasswordHandler} />
                                </Card.Text>
                                <Button variant="primary" className="Panelbutton" type="submit">Sign In</Button>
                                <Button variant="outline-secondary" type="button" className="NextPanel Panelbutton" onClick={() => { this.props.history.push('/') }}>Sign Up</Button>
                            </Card.Body>
                        </Card>
                        {this.state.ShowSocialPanel ?
                            <Card style={{ width: '18rem' }} className="SocailRegisterPanel">
                                <Card.Body>
                                    <Button variant="secondary" className="FbBtn" type="submit"><i className="fab fa-facebook-f fa-lg"></i>Sign-Up with Facebook</Button>
                                    <Button type="button" variant="secondary" className="GmailBtn"><i className="fab fa-google fa-lg"></i>Sign-Up with Gmail</Button>
                                </Card.Body>
                            </Card>
                            :
                            null
                        }
                    </center>
                </form>
            </div >
        )
    }
}



export default LoginPanel

