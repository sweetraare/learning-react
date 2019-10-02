import React from 'react'

function MemoComp({name}) {
    console.log('memo')
    return (
        <div>
            {name}
        </div>
    )
}

export default MemoComp
