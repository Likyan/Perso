import React from 'react'

function Childrenprop(props) {
    return (
        <div>
            <h3>{props.name}{props.children}</h3>
        </div>
    )
}

export default Childrenprop
