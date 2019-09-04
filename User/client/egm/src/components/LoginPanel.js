import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import './dist/styles/Panels.css'
import $ from 'jquery'
import axios from 'axios'
import CustomMessage from './messages'
class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', pass: '' }
    }
    SubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:5000/signin", {
            email: this.state.email,
            pass: this.state.pass
        })
            .then(result => {
                if (result.message === "200: User Authenticated") {
                    
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
                        <Card style={{ width: '20rem' }} className="PanelCard">
                            <Card.Body>
                                <Card.Title>Enter Your Credentials</Card.Title>
                                <Card.Title className="UnderTitle">To SignIn</Card.Title>
                                <CustomMessage message={ this.props.location.state === undefined ? "": this.props.location.state.message } />
                                <Card.Text>
                                    <input type="email" className="form-control Panelinput" id="email" name="txtemail" placeholder="email@example.com" onChange={this.EmailHandler} />
                                <input type="password" className="form-control Panelinput" id="pass" name="txtpassword" placeholder="Password" onChange={this.PasswordHandler} />
                                </Card.Text>
                            <Button variant="primary" className="Panelbutton" type="submit">Sign Up</Button>
                            <Button variant="outline-secondary" type="button" className="NextPanel Panelbutton" onClick={() => { this.props.history.push('/') }}>Sign In</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className="SocailRegisterPanel">
                            <Card.Body>
                                <Button variant="secondary" className="FbBtn" type="submit"><i className="fab fa-facebook-f fa-lg"></i>Login with Facebook</Button>
                                <Button type="button" variant="secondary" className="GmailBtn"><i className="fab fa-google fa-lg"></i>Login with Gmail</Button>
                            </Card.Body>
                        </Card>
                    </center>
                </form>
            </div >
        )
    }
}



export default LoginPanel

