import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('purecomp')
        return (
            <div>
                 PureComponent {this.props.name}
            </div>
        )
    }
}

export default PureComp
