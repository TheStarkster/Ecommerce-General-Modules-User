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
    constructor(props) {
        super(props)
        
    }
    componentWillMount = () =>{
        $('.ImageOverlay').hover(function(){
            alert('kfoid')
            $('.ImageOverlay > div > div > img').css('transform','scale(1.5)')
        })
    }
    render() {
        return (
            <Card style={{ width: '18rem' }} className="ProductCard">
                {/* <div className="CardOverlay"  onMouseEnter={() => this.BlurHandler()}></div> */}
                <Card.Body className="ProductCardBody">
                    <div className="ImageOverlay">
                        <div>
                            <div class="d-flex justify-content-center product-image-top-layer">
                                <img
                                    className="img-adjusted"
                                    src={require('../assets/icons/icons8-buy-24.png')}
                                    alt="Product"
                                />
                                <img
                                    className="img-adjusted"
                                    src={require('../assets/icons/icons8-love-24.png')}
                                    alt="Product"
                                />
                                <img
                                    className="img-adjusted"
                                    src={require('../assets/icons/icons8-rupee-24.png')}
                                    alt="Product"
                                />
                            </div>
                        </div>
                    </div>
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