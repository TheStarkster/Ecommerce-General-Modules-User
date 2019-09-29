import React, { Component } from 'react';
import '../../dist/styles/product.css'
class Product extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="productRoot">
                <div>
                    <img className="ProductMainImage" src={require('../../../productImages/pro1.jpg')} alt="Product"></img>
                </div>
                <div>
                    <div className="ProductMainName">
                        Product Full Name
                    </div>
                    <div className="ProductMainBrief">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                    </div>
                    <div className="ProductMainPrice">
                        <span className="badge badge-success">1400 Rs.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product