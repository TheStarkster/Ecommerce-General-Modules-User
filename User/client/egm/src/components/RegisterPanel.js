import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import './dist/styles/Panels.css'
import axios from 'axios'
import $ from 'jquery'

class RegsiterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
        axios.get('https://ipapi.co/json')
            .then(u => {
                console.log(u)
                axios.post("http://3.87.22.103:2024/signup", {
                    name: this.state.name,
                    email: this.state.email,
                    pass: this.state.pass,
                    region: u.data.city + ', ' + u.data.country_name
                })
                    .then(result => {
                        if (result.data.message === "200: Registered") {
                            this.props.history.push({
                                pathname: '/login',
                                state: { message: "Registered Successfully!" }
                            });
                        }
                    });
            })
    }
    // input handlers
    NameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    EmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    PasswordHandler = (event) => {
        this.setState({ pass: event.target.value });
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
                                <Card.Title>Enter Your Details</Card.Title>
                                <Card.Title className="UnderTitle">To Register</Card.Title>
                                <Card.Text>
                                    <input type="text" className="form-control Panelinput" id="name" name="txtname" placeholder="Full Name" onChange={this.NameHandler} />
                                    <input type="email" className="form-control Panelinput" id="email" name="txtemail" placeholder="email@example.com" onChange={this.EmailHandler} />
                                    <input type="password" className="form-control Panelinput" id="pass" name="txtpassword" placeholder="Password" onChange={this.PasswordHandler} />
                                </Card.Text>
                                <Button variant="primary" className="Panelbutton" type="submit">Sign Up</Button>
                                <Button type="button" variant="outline-secondary" className="NextPanel Panelbutton" onClick={() => { this.props.history.push('/login') }}>Sign In</Button>
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
            </div>
        )
    }
}
export default RegsiterPanel