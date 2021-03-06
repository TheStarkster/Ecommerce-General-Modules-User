import React, { Component } from 'react'
import { Card, Badge } from 'react-bootstrap'
import $ from 'jquery'
import '../dist/styles/productCard.css'
import axios from 'axios'
class ProductsCard extends Component {
    constructor(props) {
        super(props)
        this.componentDidMount = () => {
            $('.ProductOptionContainer').css('opacity', '0')
            $(window).trigger('load')
            $(window).on('load', function () {
                var win = $(this)
                if (win.width() <= 425 && win.width() >= 300) {
                    $('.ProductImage').css({
                        'height': '120px',
                        'padding': '4px',
                        'font-size': '12px'
                    })
                }
                if (win.width() >= 300) {
                    $('.ProductImage').css({
                        'height': '160px',
                        'padding': '4px',
                        'font-size': '12px'
                    })
                }
                if (win.width() >= 400) {
                    $('.ProductImage').css({
                        'height': '190px',
                        'padding': '12px',
                        'font-size': '16px'
                    })
                }
                if (win.width() >= 450) {
                    $('.ProductImage').css({
                        'height': '230px',
                        'padding': '16px',
                        'font-size': '18px'
                    })
                }
                if (win.width() >= 510) {
                    $('.ProductCard').removeClass('col-6')
                    $('.ProductCard').addClass('col-4')

                    $('.ProductImage').css({
                        'height': '160px',
                        'padding': '4px',
                        'font-size': '12px'
                    })
                }
                if (win.width() >= 600) {

                    $('.ProductImage').css({
                        'height': '190px',
                        'padding': '12px',
                        'font-size': '12px'
                    })
                }
                if (win.width() >= 690) {
                    $('.ProductCard').removeClass('col-4')
                    $('.ProductCard').addClass('col-3')

                    $('.ProductImage').css({
                        'height': '160px',
                        'padding': '4px',
                        'font-size': '12px'
                    })
                }
                if (win.width() >= 810) {
                    $('.ProductCard').removeClass('col-4')
                    $('.ProductCard').addClass('col-3')

                    $('.ProductImage').css({
                        'height': '190px',
                        'padding': '8px',
                        'font-size': '12px'
                    })
                }
                if (win.width() >= 900) {
                    $('.ProductCard').removeClass('col-4')
                    $('.ProductCard').addClass('col-3')

                    $('.ProductImage').css({
                        'height': '220px',
                        'padding': '12px',
                        'font-size': '16px'
                    })
                }
                if (win.width() >= 1100) {
                    $('.ProductCard').removeClass('col-3')
                    $('.ProductCard').addClass('col-2')

                    $('.ProductImage').css({
                        'height': '220px',
                        'padding': '12px',
                        'font-size': '16px'
                    })
                }
            })
        }
    }
    ShowProductOption = (id) => {
        $('#ProductOptionContainer' + id).css('opacity', '1')
        $('.ProductOption').css('transform', 'scale(1)')
    }
    HideProductOption = (id) => {
        $('#ProductOptionContainer' + id).css('opacity', '0')
        $('.ProductOption').css('transform', 'scale(0.4)')
    }
    // SendDetails(){

    // }
    render() {
        return (
            <Card style={{ width: '18rem' }} className="ProductCard col-6" id={"ProductCardRoot" + this.props.id} onMouseEnter={() => this.ShowProductOption(this.props.id)} onMouseLeave={() => this.HideProductOption(this.props.id)}>
                <Card.Body className="ProductCardBody">
                    <div className="ProductImageContainer" id="ProductImageContainer">
                        <div className="ProductOptionContainer d-flex justify-content-center" id={"ProductOptionContainer" + this.props.id} >
                            <img
                                className="ProductOption"
                                src={require('../assets/icons/icons8-buy-24.png')}
                                alt="Product"
                                onClick={() => {
                                    this.props.triggercart(this.props);
                                }}
                            />
                            <img
                                className="ProductOption"
                                src={require('../assets/icons/icons8-love-24.png')}
                                alt="Product"
                                onClick={() => {
                                    document.getElementById('show-wishlist-alert').click()
                                }}
                            />
                            <img
                                className="ProductOption"
                                src={require('../assets/icons/icons8-rupee-24.png')}
                                alt="Product"
                                onClick={() =>
                                    this.props.checkoutforsingle(this.props)
                                }
                            />
                        </div>
                        <img
                            className="ProductImage card-img-top img-adjusted"
                            height="250px"
                            src={this.props.image}
                            alt="Product"
                        />
                    </div>
                    <Card.Title className="ProductName" onClick={() => this.props.history.push({ pathname: '/product', state: { ProductName: this.props.name, ProductBrief: this.props.disc, ProductPrice: this.props.price, stock: true, ProductImage: this.props.image, userdata: this.props.userdata } })}>{this.props.name}</Card.Title>
                    <Card.Title className="ProductBrief" onClick={() => this.props.history.push({ pathname: '/product', state: { ProductName: this.props.name, ProductBrief: this.props.disc, ProductPrice: this.props.price, stock: true, ProductImage: this.props.image, userdata: this.props.userdata } })}>{this.props.disc}</Card.Title>
                    <Card.Title>
                        <div className="ProductPrice" onClick={() => this.props.history.push({ pathname: '/product', state: { ProductName: this.props.name, ProductBrief: this.props.disc, ProductPrice: this.props.price, stock: true, ProductImage: this.props.image, userdata: this.props.userdata } })}>
                            Rs. {this.props.price}<Badge variant="success">In Stock</Badge>
                        </div>
                    </Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
export default ProductsCard