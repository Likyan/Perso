import React, { Component } from 'react'

export default class Compo2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    increment(){
        this.setState({count:this.state.count + 1})
    }
    decreament(){
        this.setState({count:this.state.count - 1})
    }
    
    render() {
        return (
            <div>
            <h3>{this.state.count}</h3>  
            <button onClick={()=>this.increment()}>Additi</button>
            <button onClick={()=>this.decreament()}>Decrease</button>
            </div>
        )
    }
}
