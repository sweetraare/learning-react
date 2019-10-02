import React, {Component} from 'react';

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0.0
        }
    }

    incrementar() {
        //setState es una funcion asincrona!!
        // this.setState({count: 'asd'});
        // console.log(this.state.count);

        // this.setState(
        //     {
        //         count: this.state.count+1
        //     },
        //     () => {
        //         console.log('esto es un callback', this.state.count)
        //     }
        // );
        
        // la funcion tiene acceso al estado previo.
        this.setState(
            (prevState, props) => (
                {
                    count: prevState.count+ 1
                }
            ),
            () => {
                console.log('estoy en el callback', this.state.count)
            }
        )

        console.log(this.state.count);

    }

    incrementarMas() {
        
        //React agrupa los cambios de estado en un solo llamado
        //para evitar esto, se manda una funcion en el setState en lugar de el objeto

        this.incrementar();
        this.incrementar();
        this.incrementar();
        this.incrementar();
        this.incrementar();
    }

    render() {
        return(
            <div>
                Count: {this.state.count}
                <button onClick={() => this.incrementarMas()} > + </button>
            </div>
        )
    }
}

export default Counter