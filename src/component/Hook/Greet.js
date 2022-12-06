import React, {useState} from 'react'

function Greet() {
    const[salute, setSalute]= useState("Welcome To My World")
    return (
        <div>
            <h3>{salute}</h3>           
        </div>
    )
}


export default Greet
