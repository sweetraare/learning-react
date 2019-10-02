import React from 'react'

// function Greet() {
//     return <h1>Holaaa!!!</h1>
// }

//export const Greet = () => <h1>Holii</h1> 
//name export se debe importar con el mismo nombre

const Greet = (props) => {
    console.log(props);
    return (
    
        <div>
            <h1>Holii {props.name} y se hace llamar: {props.heroName} </h1>
            {props.children}
        </div>
    
    
    )
} 
export default Greet 
//con este de arriba se puede exportar en el app.js con cualquier nombre