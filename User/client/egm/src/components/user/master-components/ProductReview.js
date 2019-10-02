import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../dist/styles/ProductReview.css'

class ProductReviewPanel extends Component {
    render() {
        return (
            <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                <Card className="Product-Review-Card-Root">
                    <Card.Body className="Product-Review-Card-Body">
                        <div className="User">
                            <div className="User-Dp">

                            </div>
                            <h6>Gurkaran Singh</h6>
                        </div>
                        <center><div className="Product-Review-Hr"></div></center>
                        <Card.Text>
                            <p>So installation in local mech shop took 20rs. I have been using it on my Dio fits perfectly, noSo installation in local mech shop took 20rs. I have been using it on my Dio fits perfectly, no issues grip on road is really good. I suggest this for back wheel although you can use it for front. It is tubeless and air remains constant for atleast a week.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default ProductReviewPanel