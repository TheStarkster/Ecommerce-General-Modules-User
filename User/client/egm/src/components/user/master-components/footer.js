import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../dist/styles/footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer-Root">
                <div className="Footer-BackTo-Top">
                    <h5>Back To Top</h5>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                            <h5>ABOUT</h5>
                            <h6>Contact Us</h6>
                            <h6>About Us</h6>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                            <h5>CONNECT</h5>
                            <h6><i class="fab fa-instagram"></i>Instagram</h6>
                            <h6><i class="fab fa-facebook"></i>Facebook</h6>
                            <h6><i class="fab fa-linkedin-in"></i>Linkedin</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                            <div className="Panel-BrandName">
                                <div className="Footer-BrandName-Dental">Dental</div><div className="Footer-BrandName-Stall">Stall</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 Footer-Office-Address d-flex justify-content-center align-items-center flex-column">
                            <h5>Registered Office Add.</h5>
                            <center>
                                This Is The Sample Text For Registered Office Address
                            New Delhi, India<br />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer