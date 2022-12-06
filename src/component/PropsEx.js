import React, { Component } from 'react'

export default class PropsEx extends Component {
    render() {
        return (
            <div>
                <h3>My name is {this.props.name}</h3>
            </div>
        )
    }
}


// 