import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state={
            message:"Daddy"
        }
        // this.handleMessage=this.handleMessage.bind(this)
    }
    handleMessage=(replyDad) =>
    {
        alert(`${this.state.message} say Hello`);
    }
    render(){
    return (
        <div>
        <Child eventMsgHandler={this.handleMessage}/>
        </div> 
          )
    }
}


export default Parent
