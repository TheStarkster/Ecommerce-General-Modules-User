import React, { Component } from 'react';
import '../../dist/styles/product.css'
import { Card, Button } from 'react-bootstrap'
import CustomNav from './navbarv2'
import $ from 'jquery'
import axios from 'axios'
import ProductReviewPanel from './ProductReview'
import Footer from './footer'
import CardCarousel from './CardCarousel'
import CartItemsModal from '../master-components/cart-items'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            OperationPanelBelowImage: false,
            NumberOfRecommendedCards: 2,
            cartTotal: this.props.location.state.userdata.cartTotal,
            cartitems: this.props.location.state.userdata.cart,
            showcart: false
        }
        console.log(this.state)
        this.componentWillMount = () => {

            this.RemoveProduct = (item) => {
                var tempArray = this.state.cartitems.filter(
                    function (obj) {
                        return obj.productID !== item.productID
                    }
                )
                this.setState({
                    cartitems: tempArray
                }, () => {
                    this.CalculateCartSummary()
                })
            }

            this.CalculateCartSummary = () => {
                var cart_total = 0
                this.state.cartitems.forEach(element => {
                    cart_total += parseFloat(element.price)
                });
                this.setState({
                    cartTotal: cart_total
                }, () => {
                    localStorage.setItem('cart-items', JSON.stringify(this.state.cartitems))
                    localStorage.setItem('cart-items-total', this.state.cartTotal)
                    axios.post('http://3.87.22.103:2024/user/remove-from-cart', {
                        id: this.props.location.state.userdata._id,
                        cart: this.state.cartitems,
                        cartTotal: this.state.cartTotal
                    })
                })
            }
            this.ShowCart = () => {
                this.setState({
                    showcart: true
                })
            }
            this.HideCart = () => {
                this.setState({
                    showcart: false
                })
            }
            console.log(this.props.location.state.userdata)
            if (this.props.location.state.stock) {
                $('.ProductMainStockStatus').addClass('badge-success')
            } else {
                $('.ProductMainStockStatus').addClass('badge-danger')
            }
            $(window).trigger('load');
            var that = this
            $(window).on('resize load', function () {
                var win = $(this); //this = window
                if (win.width() <= 767.98) {
                    // Removing Col-6 classes and Adding Col-12...
                    $('.ProductMainImage').removeClass('col-6')
                    $('.ProductMainDetail').removeClass('col-6')

                    $('.ProductMainImage').addClass('col-12')
                    $('.ProductMainDetail').addClass('col-12')

                    that.setState({
                        OperationPanelBelowImage: true
                    })
                }
                if (win.width() >= 767.98) {
                    $('.ProductMainImage').addClass('col-6')
                    $('.ProductMainDetail').addClass('col-6')

                    $('.BulkQuoteCard-col').removeClass('col-12')
                    $('.BulkQuoteCard-col').addClass('col-8')

                    $('.ProductMainImage').removeClass('col-12')
                    $('.ProductMainDetail').removeClass('col-12')
                }
                if (win.width() <= 1016) {
                    $('.desktop-mode').removeClass('col-6')
                    $('.desktop-mode').addClass('col-8')
                } else {
                    $('.desktop-mode').addClass('col-6')
                    $('.desktop-mode').removeClass('col-8')
                }
                if (win.width() >= 1024) {
                    $('.OperationPanel-col').removeClass('flex-column')
                } else {
                    $('.OperationPanel-col').addClass('flex-column')
                }
            });
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.showcart ?
                        <CartItemsModal cart_item_count={this.state.cartitems.length} triggerRemoveItem={this.RemoveProduct} userdata={this.props.location.state.userdata} history={this.props.history} triggerHideModal={this.HideCart} cartTotal={this.state.cartTotal} cartdata={this.state.cartitems} ></CartItemsModal>
                        :
                        null
                }
                <CustomNav triggerShowModal={this.ShowCart} ref={this.Childref} history={this.props.history} cart_item_count={this.state.cartitems.length} userdata={this.props.location.state.userdata}></CustomNav>
                <div className="col-lg Product-Main-Root">
                    <div className="row ProductRoot">
                        <div className="col-6 ProductMainImage">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <i class="fa fa-share-alt share" aria-hidden="true"></i>
                                    <img src={this.props.location.state.ProductImage} alt="Product" width="350px" />
                                </div>
                            </div>
                            {
                                this.state.OperationPanelBelowImage ? null
                                    :
                                    <div className="row OperationPanel-row">
                                        <div className=" OperationPanel-col col-12 d-flex justify-content-center align-items-center flex-column">
                                            <button className="ProductMainOptionAddToCart option-img"><img
                                                src={require('../../assets/icons/icons8-buy-24.png')}
                                                alt="Product"
                                            />Add to Cart</button>
                                            <button className="ProductMainOptionWishList option-img"><img
                                                src={require('../../assets/icons/icons8-love-24.png')}
                                                alt="Product"
                                            />Add To Wishlist</button>
                                            <button className="ProductMainOptionBuy option-img"><img
                                                src={require('../../assets/icons/icons8-rupee-24.png')}
                                                alt="Product"
                                            />Buy Now</button>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                                            <div className="col-12 BulkQuoteCard-col d-flex justify-content-center align-items-center flex-column">
                                                <Card text="white" className="ProductMainFeature BulkQuoteCard">
                                                    <Card.Header>Request Bulk Order</Card.Header>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            Please Provide Us Your Contact Details, So That We Can Personally Contact You For The Bulk Quote
                                                    </Card.Text>
                                                        <Button className="Send-Details-Btn">Send Details</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="col-6 ProductMainDetail">
                            <div className="row">
                                <div className="col">
                                    <h1 className="ProductMainName">{this.props.location.state.ProductName}</h1>
                                    by <h6 className="By-Company">Company Name</h6>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ProductMainBrief">
                                    {this.props.location.state.ProductBrief}
                                </div>
                            </div>
                            <div className="row ProductMainPrice">
                                <div className="Not-In-Price">
                                    M.R.P: <s>Rs. 1800</s>
                                </div>
                                <div className="col">
                                    Rs. {this.props.location.state.ProductPrice}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span className="badge ProductMainStockStatus">{this.props.location.state.stock ? "In Stock" : "Out Of Stock"}</span>
                                </div>
                            </div>
                            {
                                this.state.OperationPanelBelowImage === false ? null
                                    :
                                    <div className="row OperationPanel-row">
                                        <div className=" OperationPanel-col col-12 d-flex justify-content-center align-items-center flex-column">
                                            <button className="ProductMainOptionAddToCart option-img"><img
                                                src={require('../../assets/icons/icons8-buy-24.png')}
                                                alt="Product"
                                            />Add to Cart</button>
                                            <button className="ProductMainOptionWishList option-img"><img
                                                src={require('../../assets/icons/icons8-love-24.png')}
                                                alt="Product"
                                            />Add To Wishlist</button>
                                            <button className="ProductMainOptionBuy option-img"><img
                                                src={require('../../assets/icons/icons8-rupee-24.png')}
                                                alt="Product"
                                            />Buy Now</button>
                                        </div>
                                        <div className="col-12">
                                            <Card text="white" className="ProductMainFeature BulkQuoteCard">
                                                <Card.Header>Request Bulk Order</Card.Header>
                                                <Card.Body>
                                                    <Card.Text>
                                                        Please Provide Us Your Contact Details, So That We Can Personally Contact You For The Bulk Quote
                                                    </Card.Text>
                                                    <Button className="Send-Details-Btn">Send Details</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                            }
                            <div className="row d-flex justify-content-center align-items-center">
                                {/* <div className="col"> */}
                                <div className="Return-Policy-Container">
                                    <div className="Return-Policy">
                                        <img src={require('../../assets/icons/icons8-assignment-return-48.png')} alt="Return Policy"></img>
                                    </div>
                                    <h6>Return Policy</h6>
                                </div>
                                <div className="Cash-On-Delivery-Container">
                                    <div className="Cash-On-Delivery">
                                        <img src={require('../../assets/icons/icons8-cash-on-delivery-48.png')} alt="Cash On Delivery"></img>
                                    </div>
                                    <h6>Cash On Delivery</h6>
                                </div>
                                <div className="Warranty-Container">
                                    <div className="Warranty">
                                        <img src={require('../../assets/icons/icons8-shield-48.png')} alt="Warranty"></img>
                                    </div>
                                    <h6>Warranty</h6>
                                </div>
                                {/* </div> */}
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Card border="success" className="ProductMainFeature">
                                        <Card.Header>Features</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Primary Features</Card.Title>
                                            <Card.Text>
                                                <h6 className="Genuinecy"><i class="fa fa-check" aria-hidden="true"></i>100% Genuine Product</h6>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Card border="success" className="ProductMainFeature">
                                        <Card.Header>Features</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Key Features</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 recommended-product-container">
                            <CardCarousel NumberOfCard={this.state.NumberOfRecommendedCards}></CardCarousel>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <ProductReviewPanel></ProductReviewPanel>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default Product