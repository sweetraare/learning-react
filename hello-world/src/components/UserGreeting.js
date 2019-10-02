import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true   
        }
    }
    
    
    render() {

        return(
            <div>
            {this.state.isLoggedIn ? 
            <div>Welcome Usuario</div> :
            <div>Welcome Guest</div>}

            {this.state.isLoggedIn && <div>Es true</div>}
            </div>
            

        )

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Usuario</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div> Welcome Usuario </div>
        //         </div>
        //     )    
        // } else {
        //     return (
        //     <div>
        //         <div> Welcome Guest </div>
        //     </div>
        // )
        // }
        //if else no funciona en JSX

        // return (
        //     <div>
        //         <div> Welcome Usuario </div> 
        //         <div> Welcome Guest </div>
        //     </div>
        // )
    }
}

export default UserGreeting
