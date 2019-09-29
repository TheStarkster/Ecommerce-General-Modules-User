import React, { Component } from 'react'
import CustomNav from './user/master-components/Navbar'
import ReactCarousel from './user/master-components/Carousel'
// import Tags from './user/master-components/tags'
import SearchBar from './user/master-components/searchbar'
import ProductGrid from './user/ProductGrid'

class Home extends Component {
    render() {
        return (
            <div>
                <CustomNav history={this.props.history} loggedIn={false}></CustomNav>
                <ReactCarousel></ReactCarousel>
                <SearchBar></SearchBar>
                {/* <Tags></Tags> */}
                <ProductGrid history={this.props.history}></ProductGrid>
            </div>
        )
    }
}

export default Home