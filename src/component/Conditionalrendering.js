import React, { Component } from 'react'

export default class Conditionalrendering extends Component {
    constructor(props){
    super(props)
    this.state= {IsAvailable : true}
        }
    render()
    {
    let text=" ";
    if(this.state.IsAvailable){
        text="Yes I Am Available";
    }
    else{
        text=" Not Available ";
    }  
    return (
        <div>
            <h3>{text}</h3>
        </div>
    )
    }
}
