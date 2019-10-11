import React, { Component } from 'react'
import '../../dist/styles/head-section.css'
import $ from 'jquery'
class HeadSection extends Component {
    constructor(props) {
        super(props)
        this.componentDidMount = () => {
            $(document).ready(function () {
                // document.getElementById('poster-container').style.width = $(window).width()
                // document.getElementById('poster-container').style.height = $(window).height()
            })
        }
    }
    render() {
        return (
            <div className="poster" id="poster-container">
                <h1>Let us Make People, Smile!</h1>
                <h5>DentalStall Helps Dentists To help People at Thier Most!
                    We got best Tools for the best Dentists!
                </h5>
            </div>
        )
    }
}

export default HeadSection