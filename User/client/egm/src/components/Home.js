import React, { Component } from 'react'
import CustomNav from './user/master-components/Navbar'
import ReactCarousel from './user/master-components/Carousel'
// import Tags from './user/master-components/tags'
import $ from 'jquery'
import SearchBar from './user/master-components/searchbar'
import ProductGrid from './user/ProductGrid'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            RenderCarousel:false
        }
        this.ChangeCarouselState = () => {
            this.setState({
                RenderCarousel:true
            })
        }
        this.componentDidMount = () => {
            var that = this
            $(window).trigger('load')
            $(window).on('load',function(){
                var win = $(window)
                if(win.width() >= 425){
                    that.ChangeCarouselState()                    
                }
            })
            
        }
    }
    render() {
        return (
            <div>
                <CustomNav history={this.props.history} loggedIn={false}></CustomNav>
                {/* <ReactCarousel></ReactCarousel> */}
                { this.state.RenderCarousel ? <ReactCarousel /> : null}
                <SearchBar></SearchBar>
                {/* <Tags></Tags> */}
                <ProductGrid history={this.props.history}></ProductGrid>
            </div>
        )
    }
}

export default Home