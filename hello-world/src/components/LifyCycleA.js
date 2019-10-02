import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifyCycleA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             mensaje: 'asda'
        }

        console.log('Consutructor A');

    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps A');
        return null;
    }
    
    componentDidMount() {
        console.log('componentDidMount A');
    }
    
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate A');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate A');
        return null
    }

    componentDidUpdate() {
        console.log('componentDidUpdate A');
    }

    handleChange = (event) => {
        this.setState({mensaje: 'cambiado'})
    }

    render() {
        console.log('render A inicio');
        return (
            <div>
                Lifecicle

                <h1>{this.state.mensaje}</h1>

                <button onClick={this.handleChange}>Cambiar</button>

                <LifeCycleB></LifeCycleB>
            </div>
        )

    }
}

export default LifyCycleA
