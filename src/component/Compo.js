import { queryAllByRole } from '@testing-library/react';
import React, { Component } from 'react'

export default class Compo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greetings:"What is your name"
        }
    }
    
     display(){
     this.setState({greetings:"My Name is Basit"});
     }
    
    render() {
       
        return (
            <div>
                <h3>{this.state.greetings}</h3>
                <button onClick={()=>this.display()}>Yahhh</button> 
            </div>
        )
    }
}
