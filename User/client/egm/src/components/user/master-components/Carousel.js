import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import '../../dist/styles/carousel.css'

class ReactCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={require('../../../components/assets/images/Carousel/1.jpg')}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={require('../../../components/assets/images/Carousel/1.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={require('../../../components/assets/images/Carousel/1.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default ReactCarousel