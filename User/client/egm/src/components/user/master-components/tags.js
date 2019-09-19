import React, { Component } from 'react';
import '../../dist/styles/chip.css'
import ChipInput from 'material-ui-chip-input'

class Tags extends Component {
    handleChange = (chips) => {
        console.log(chips);
    }
    render() {
        return (
            <ChipInput
                onChange={(chips) => this.handleChange(chips)}
            />
        )
    }
}

export default Tags