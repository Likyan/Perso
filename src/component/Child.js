import React from 'react'
import Grandchild from './Grandchild'

function Child(props) {
    return (
        <div>
            <Grandchild handlechild={props.eventHandler}/>
        </div>
    )
}

export default Child