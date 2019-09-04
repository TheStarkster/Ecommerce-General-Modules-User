import React, { Component } from 'react';
import LoginPanel from './LoginPanel';
import { Alert } from 'react-bootstrap';

class CustomMessage extends Component {
    render() {
        if (this.props.message === "") {
            return (
                <div></div>
            )
        }
        return (
            <Alert variant="success" dismissible onClick={() => LoginPanel.handleDismiss()}>
                    <p>{this.props.message}</p>
            </Alert>
        )
    }
}
export default CustomMessage