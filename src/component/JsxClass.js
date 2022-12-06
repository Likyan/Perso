// import React from 'react'

// export const Class = () => {
//     return (
//         <div>
//             <h3> JSX Class</h3>
//         </div>
//     )
// }

// export default JSxclass

import React from 'react'

const JsxClass = () => {
    return (
        React.createElement('div',null,React.createElement('h3',{className:"demo"},React.createElement('i','null','Welcome To Jsx Class')))
    )
}

export default JsxClass

