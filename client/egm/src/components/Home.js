import React, { Component } from 'react'
import CustomNav from './user/master-components/Navbar'
import ReactCarousel from './user/master-components/Carousel'
// import HomeMain from './user/main'
import ProductGrid from './user/ProductGrid'

class Home extends Component {
    render() {
        return (
            <div>
                <CustomNav></CustomNav>
                <ReactCarousel></ReactCarousel>
                {/* <HomeMain></HomeMain> */}
                <ProductGrid></ProductGrid>
            </div>
        )
    }
}

export default Home