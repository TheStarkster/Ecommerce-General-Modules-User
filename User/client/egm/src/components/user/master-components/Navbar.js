import React, { Component } from 'react';
import '../../dist/styles/navbar.css'
import $ from 'jquery'

class CustomNav extends Component {
    constructor(props) {
        super(props);
        this.state = { navExpanded: false }
    }
    HandlerExpand = () => {
        if (this.state.navExpanded === false) {
            $('.Navbar').css('height', 'inherit')
            this.setState({ navExpanded: true })
        } else {
            $('.Navbar').css('height', '60px')
            this.setState({ navExpanded: false });
        }
    }
    render() {
        return (
            <div>
                <div className="Navbar">
                    <div className="NavBarScreen">
                        <button className="btn btn-secondary expand" onClick={() => this.HandlerExpand()}>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        <div>
                            <ul>
                                <li className="BrandName">Dental Stall</li>
                                <li>Products</li>
                                <li>Catagory</li>
                                <li>Deals</li>
                            </ul>
                            <ul>
                                <li className="BrandName invisible Hamburger">B</li>
                                <li onClick={() => { this.props.history.push('/profile') }}>Guest</li>
                                <li>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomNav