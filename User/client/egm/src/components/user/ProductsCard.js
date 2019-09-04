import React, { Component } from 'react'
import { Card, Badge } from 'react-bootstrap'
import $ from 'jquery'
import '../dist/styles/productCard.css'

class ProductsCard extends Component {
    // BlurHandler = () => {
    //     $('.ProductImage').addClass('BlurInProductImage')
    //     $('.ProductPrice').addClass('BlurInProductPrice')
    //     $('.ProductName').addClass('BlurInProductName')
    //     $('.ProductBrief').addClass('BlurInProductBrief')
    // }
    render() {
        return (
            <Card style={{ width: '20rem' }} className="ProductCard">
                {/* <div className="CardOverlay"  onMouseEnter={() => this.BlurHandler()}></div> */}
                <Card.Body className="ProductCardBody">
                    <img
                        className="ProductImage card-img-top img-adjusted"
                        src={require('../../productImages/pro1.jpg')}
                        alt="Product"
                    />
                    <Card.Title className="ProductName">Product Name</Card.Title>
                    <Card.Title>
                        <div className="ProductPrice">
                            Price: <Badge variant="success">4500Rs</Badge>
                        </div>
                    </Card.Title>
                    <Card.Title className="ProductBrief">This is Product Brief</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
export default ProductsCard