import React, { Component } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import ProductsCard from './ProductsCard'

class ProductGrid extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap justify-content-around">
                            <ProductsCard></ProductsCard>
                            <ProductsCard></ProductsCard>
                            <ProductsCard></ProductsCard>
                            <ProductsCard></ProductsCard>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductGrid