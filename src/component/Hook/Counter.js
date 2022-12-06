import React, {useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <button onClick={()=>setCount(count-1)}>Click Me</button>
        </div>
    )
}

export default Counter