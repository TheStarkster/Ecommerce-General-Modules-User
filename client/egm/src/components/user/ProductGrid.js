import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductsCard from './ProductsCard'

class ProductGrid extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm ">
                        <ProductsCard></ProductsCard>
                    </div>
                    <div class="col-sm">
                        <ProductsCard></ProductsCard>
                    </div>
                    <div class="col-sm">
                        <ProductsCard></ProductsCard>
                    </div>
                    <div class="col-sm">
                        <ProductsCard></ProductsCard>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductGrid