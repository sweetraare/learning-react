import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Holii'
        }

        //this.clickHandler = this.clickHandler.bind(this); //asi dice la documentacion oficial

    }
    
    // clickHandler() {
    //     this.setState({message: 'chaus'})
    //     // esto da error si no se usa el .bind(this), esto genera q se vuelva a rendirizar
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({message: 'chaus'})
        // esto da error si no se usa el .bind(this), esto genera q se vuelva a rendirizar
        console.log(this);
    }
    // esta es otra forma
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click event</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click event</button> */}
                <button onClick={this.clickHandler}>Click event</button> 
                {/* el de arriba funciona con la documentacion oficial o con => */}
            </div>
        )
    }
}

export default EventBind
