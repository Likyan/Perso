import React from 'react'

// function PropEx(props) {
    function PropEx({name}) {
      return (
        <div>
            <h3>My name is {name}</h3>
          {/* <h3>My name Is {props.name}</h3> */}
          {/* <h3>My name Is {name}</h3> */}
        </div>
    )
}

export default PropEx
