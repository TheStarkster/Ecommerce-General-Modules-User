import React, { Component } from 'react'
import '../../dist/styles/searchbar.css'

class SearchBar extends Component {
    render() {
        return (

            <div className="container">
                <div className="input-wrapper">
                    <i className="fas fa-search"></i>
                    <input type="text" className="Searchbar" placeholder="What Are You Looking For?"></input>
                </div>
            </div>
        )
    }
}

export default SearchBar