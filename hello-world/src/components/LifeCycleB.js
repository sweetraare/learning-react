import React, { Component } from 'react'

class LifeCycleB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             mensaje: 'asda'
        }

        console.log('Consutructor B');

    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps B');
        return null;
    }
    
    componentDidMount() {
        console.log('componentDidMount B');
    }
    
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate B');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate B');
        return null
    }

    componentDidUpdate() {
        console.log('componentDidUpdate B');
    }


    render() {

        console.log('render A inicio');

        return (
            <div>
                Lifecicle
            </div>
        )
    }
}

export default LifeCycleB
