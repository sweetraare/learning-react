import React from 'react';


const Hello = () => {
    // return (
    //     <div className="miClase">
    //         <h1>
    //             Hellooow
    //         </h1>
    //     </div>
    // )

    return React.createElement('div', 
    { id: "hello",
      className: "miClase"} ,
    React.createElement('h1', null,'Holiiaiai') 
    )

}

export default Hello