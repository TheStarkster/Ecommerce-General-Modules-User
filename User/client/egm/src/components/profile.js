import React, { Component } from 'react'
import './dist/styles/profile.css'
import CustomNav from './user/master-components/Navbar'

class Profile extends Component {
    render() {
        return (
            <div>
                <CustomNav history={this.props.history}></CustomNav>
                <div className="ProfileRoot">
                    <div className="UserAvatarCard">
                        <center>
                            <div className="Avatar">
                                {/* <img src={require('./assets/images/icons8-male-user-500.png')} ></img> */}
                            </div>
                            <div className="UserName">
                                <h2>Full Name</h2>
                            </div>
                        </center>
                    </div>
                    <div className="container">
                        <div className="UserDetailCard">
                            <center>
                                <div className="UserDetail">
                                    <div className="UserDetailUsername">
                                        <h4>Username</h4>
                                        <h5>This Is User Name</h5>
                                    </div>
                                    <div className="UserDetailUsername">
                                        <h4>Email</h4>
                                        <h5>This Is User Name</h5>
                                    </div>
                                    <div className="UserDetailUsername">
                                        <h4>Address</h4>
                                        <h5>This Is User Name</h5>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile