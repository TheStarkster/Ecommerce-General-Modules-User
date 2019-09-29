import React, { Component } from 'react';
import '../../dist/styles/product.css'
import { Card } from 'react-bootstrap'
import $ from 'jquery'
class Product extends Component {
    constructor(props) {
        super(props)
        this.componentDidMount = () => {
            $(window).on('resize', function () {
                var win = $(this); //this = window
                if (win.width() <= 767.98) {
                    // Removing Col-6 classes and Adding Col-12...
                    $('.ProductMainImage').removeClass('col-6')
                    $('.ProductMainDetail').removeClass('col-6')

                    $('.ProductMainImage').addClass('col-12')
                    $('.ProductMainDetail').addClass('col-12')
                }
                if (win.width() >= 767.98) {
                    $('.ProductMainImage').addClass('col-6')
                    $('.ProductMainDetail').addClass('col-6')

                    $('.ProductMainImage').removeClass('col-12')
                    $('.ProductMainDetail').removeClass('col-12')
                }
            });
        }
    }
    render() {
        return (
            <div className="d-md-flex align-items-md-start">
                <div className="row">
                    <div className="col-6 d-flex flex-column align-items-center ProductMainImage"><img src={require('../../../productImages/pro1.jpg')} width="350px" /></div>
                    <div className="col-6 ProductMainDetail">
                        <div class="row">
                            <div class="col">
                                <h1 class="text-center d-xl-flex justify-content-xl-center ProductMainName">Product Name</h1>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ProductMainBrief">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                        </div>
                        </div>
                        <div className="row ProductMainPrice">
                            <div className="col">
                                Rs. 1400
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="badge badge-success ProductMainStockStatus">In Stock</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Card border="success" className="ProductMainFeature">
                                    <Card.Header>Features</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Primary Features</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product