import React from 'react'
import Person from './Person'

function NameList() {
    
    const nombres = ['Juan', 'Predro', 'carlos']
    const personas = [
        {id: 1,name: 'Alex', edad: 15},
        {id: 3,name: 'Juan', edad: 16},
        {id: 4,name: 'Pedro', edad: 17},
    ]

    //const listaPersonas = personas.map(persona => <Person key={persona.id} person={persona}></Person>) 
    const listaNombres = nombres.map((nombre, index) => <Person id={index} person={nombre}></Person>) 
    

    return (
        <div>
            {/* {
                personas.map(persona => <h2>{persona.name} con edad de: {persona.edad}</h2> )
            } */}

            {/* {listaPersonas} */}
            {listaNombres}

        </div>
    )
}

export default NameList
