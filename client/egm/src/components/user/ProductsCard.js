import React, { Component } from 'react'
import { Card, Badge } from 'react-bootstrap'
import '../dist/styles/productCard.css'

class ProductsCard extends Component {
    render() {
        return (
            <Card style={{ width: '20rem' }} className="ProductCard">
                <Card.Body className="ProductCardBody">
                    <img
                        className="ProductImage card-img-top img-adjusted"
                        src={require('../../productImages/pro1.jpg')}
                        alt="Product"
                    />
                    <Card.Title className="ProductName">Product Name</Card.Title>
                    <Card.Title>
                        Price: <Badge variant="success">4500Rs</Badge>
                    </Card.Title>
                    <Card.Title className="ProductBrief">This is Product Brief</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
export default ProductsCard