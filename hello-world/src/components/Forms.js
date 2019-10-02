import React, { Component } from 'react'

class Forms extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comentario: '',
             topic: 'react'
        }
    }
    
    handleUserNameChance = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handleComentarioChance = (event) => {
        this.setState(
            {
                comentario: event.target.value
            }
        )
    }

    handleTopicChance = (event) => {
        this.setState (
            {topic: event.target.value}
        )
        
        

    }

    handleSubmit = (event) => {
        alert(`${this.state.username}`)
        event.preventDefault() //funciona para q no se borre el formulario
    }

    render() {
        return (
            <div>
                <h1 class="display-1">This is a form</h1>
                <form>
                    <div class="form-group">
                        <label for= 'usrname'> Username:</label>
                        <input id='usrname' 
                                type= 'text' 
                                value={this.state.username} 
                                onChange={this.handleUserNameChance}
                                class="form-control"
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for= 'comentario'> Comentario:</label>
                        <textarea id='comentario' value={this.state.comentario} onChange={this.handleComentarioChance} class="form-control"></textarea>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="sleect">Escoge</label>
                        <select name="" id="select" class="form-control" value={this.state.topic} onChange={this.handleTopicChance}>
                            <option value="react">react</option>
                            <option value="angular">angular</option>
                            <option value="vue">vue</option>
                        </select>
                    </div>

                    <button type='submit' class="btn btn-primary" onClick={this.handleSubmit}>submit</button>

                </form>
            </div>
        )
    }
}

export default Forms
