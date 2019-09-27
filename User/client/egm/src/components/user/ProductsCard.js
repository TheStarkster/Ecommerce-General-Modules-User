import React, { Component } from 'react'
import { Card, Badge } from 'react-bootstrap'
// import $ from 'jquery'
import '../dist/styles/productCard.css'

class ProductsCard extends Component {
    // BlurHandler = () => {
    //     $('.ProductImage').addClass('BlurInProductImage')
    //     $('.ProductPrice').addClass('BlurInProductPrice')
    //     $('.ProductName').addClass('BlurInProductName')
    //     $('.ProductBrief').addClass('BlurInProductBrief')
    // }
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Card style={{ width: '18rem' }} className="ProductCard">
                {/* <div className="CardOverlay"  onMouseEnter={() => this.BlurHandler()}></div> */}
                <Card.Body className="ProductCardBody">
                    <div className="ImageOverlay"></div>
                    <img
                        className="ProductImage card-img-top img-adjusted"
                        height="250px"
                        src={this.props.image}
                        alt="Product"
                    />
                    <Card.Title className="ProductName">{this.props.name}</Card.Title>
                    <Card.Title className="ProductBrief">{this.props.disc}</Card.Title>
                    <Card.Title>
                        <div className="ProductPrice">
                            Price <Badge variant="success">Rs. {this.props.price}</Badge>
                        </div>
                    </Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
export default ProductsCard