import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import './dist/styles/RegisterPanel.css'

class RegsiterPanel extends Component {
    
    render() {
        return (
            <form onSubmit={this.SubmitHandler}>
                <center>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Enter Your Details</Card.Title>
                            <Card.Text>
                                <input type="text" className="form-control" id="name" name="txtname" placeholder="Full Name" />
                                <input type="email" className="form-control" id="email" name="txtemail" placeholder="Email@example.com" />
                                <input type="password" className="form-control" id="pass" name="txtpassword" placeholder="**********" />
                            </Card.Text>
                            <Button variant="primary" type="submit">Sign Up</Button>
                        </Card.Body>
                    </Card>
                </center>
            </form>
        )
    }
}
export default RegsiterPanel