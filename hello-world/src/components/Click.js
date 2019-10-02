import React, { Component } from 'react'

export class ClassClick extends Component {

    onClickHandler(){
        console.log('desde un class component');
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>Click meeee!</button>
            </div>
        )
    }
}

export default ClassClick
