import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import './dist/styles/Panels.css'
import axios from 'axios'

class RegsiterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', pass: '' }
    }
    SubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/signup", {
            name: this.state.name,
            email: this.state.email,
            pass: this.state.pass
        })
            .then(result => {
                if (result.data.message === "200: Registered") {
                    this.props.history.push({
                        pathname: '/login',
                        state: { message: "Registered Successfully!" }
                    });
                    console.log("Reached To 200")
                    // return(
                    //     <Redirect to="/LoginPanel"></Redirect>
                    // )   
                }
            });
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
            <form onSubmit={this.SubmitHandler} method="POST">
                <center>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Enter Your Details</Card.Title>
                            <Card.Title className="UnderTitle">To Register</Card.Title>
                            <Card.Text>
                                <input type="text" className="form-control" id="name" name="txtname" placeholder="Full Name" onChange={this.NameHandler} />
                                <input type="email" className="form-control" id="email" name="txtemail" placeholder="email@example.com" onChange={this.EmailHandler} />
                                <input type="password" className="form-control" id="pass" name="txtpassword" placeholder="Password" onChange={this.PasswordHandler} />
                            </Card.Text>
                            <Button variant="primary" type="submit">Sign Up</Button>
                            <Button type="button" variant="outline-secondary" className="NextPanel" onClick={() => { this.props.history.push('/login') }}>Sign In</Button>
                        </Card.Body>
                    </Card>
                </center>
            </form>
        )
    }
}
export default RegsiterPanel