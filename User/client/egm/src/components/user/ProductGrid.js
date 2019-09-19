import React, { Component } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import ProductsCard from './ProductsCard'
import { Card } from 'react-bootstrap'
import '../dist/styles/ProductGrid.css'

class ProductGrid extends Component {
    constructor(props) {
        super(props)
        this.products = []
        this.state = {
            hasProduct: false
        }
    }
    componentWillMount = () => {
        axios.get('http://localhost:2024/User-fetch-products')
            .then(response => {
                this.products = [...response.data.products]
                console.log(this.products)
                this.setState({
                    hasProduct: true
                })
            })
    }
    FetchProducts = () => {
        axios.get('http://localhost:2024/User-fetch-products')
            .then(response => {
                this.products = [...response.data.products]
                console.log(this.products)
            })
    }
    RenderProducts() {
        var CardArray = []
        for (var i = 0; i < this.products.length; i++) {
            CardArray.push(<ProductsCard key={"Product:" + i}
                name={this.products[i].name}
                disc={this.products[i].disc}
                price={this.products[i].price}
                image={this.products[i].image}
            ></ProductsCard>)
        }
        return CardArray
    }
    render() {
        if(this.state.hasProduct){
            return (
                <div className="container-fluid">
                    <div className="row my-4">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap justify-content-around">
                                {this.RenderProducts()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap justify-content-around">
                        <Card style={{ width: '18rem' }} className="ProductCard">
                                <Card.Body className="ProductCardBody">
                                    <div className="box shine"></div>
                                    <Card.Title className="ProductName">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title className="ProductBrief">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title>
                                        <div className="ProductPrice">
                                            <div className="lines shine"></div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="ProductCard">
                                <Card.Body className="ProductCardBody">
                                    <div className="box shine"></div>
                                    <Card.Title className="ProductName">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title className="ProductBrief">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title>
                                        <div className="ProductPrice">
                                            <div className="lines shine"></div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="ProductCard">
                                <Card.Body className="ProductCardBody">
                                    <div className="box shine"></div>
                                    <Card.Title className="ProductName">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title className="ProductBrief">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title>
                                        <div className="ProductPrice">
                                            <div className="lines shine"></div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="ProductCard">
                                <Card.Body className="ProductCardBody">
                                    <div className="box shine"></div>
                                    <Card.Title className="ProductName">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title className="ProductBrief">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title>
                                        <div className="ProductPrice">
                                            <div className="lines shine"></div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="ProductCard">
                                <Card.Body className="ProductCardBody">
                                    <div className="box shine"></div>
                                    <Card.Title className="ProductName">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title className="ProductBrief">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title>
                                        <div className="ProductPrice">
                                            <div className="lines shine"></div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="ProductCard">
                                <Card.Body className="ProductCardBody">
                                    <div className="box shine"></div>
                                    <Card.Title className="ProductName">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title className="ProductBrief">
                                        <div className="lines shine"></div>
                                    </Card.Title>
                                    <Card.Title>
                                        <div className="ProductPrice">
                                            <div className="lines shine"></div>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProductGrid