import React, { Component } from 'react'

class RegComp extends Component {

    render() {
        console.log('reg comp')
        return (
            <div>
                Regular component {this.props.name}
            </div>
        )
    }
}

export default RegComp
