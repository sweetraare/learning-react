import React, {Component} from 'react';

class Message extends Component {

    constructor() {
        super()

        this.state = {
            mensaje: 'Bienvenido visitante'
        }
    }

    changeMensaje() {
        this.setState({mensaje: 'Nuevo Mensjae'})
    }

    render() {
         return(
            <div>
                <h1>{this.state.mensaje} </h1>
                <button onClick={() => this.changeMensaje()} >Subscribe</button>
            </div>
            
         )  
    }
}

export default Message