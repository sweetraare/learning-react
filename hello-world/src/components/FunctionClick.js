import React from 'react'

export default function FunctionClick() {
    
    function clickHandler() {
        console.log('click')
    }
    
    return (
        <div>
            <button onClick={clickHandler}>Click</button> 
            {/* tiene q ir sin parentisis xq sino no se llama a la funcion */}
        </div>
    )
}
