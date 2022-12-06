import React from 'react'
import './Variant1.css'

function Nav() {
    return (
        <div>
            <div className="flex">
            <div className="dog" >
                <img src="images/Group 1.png" alt="Group1" style={{ margin: '0px 0px 0px 60px', fontsize: '20px',}}></img>
                <p style={{float: 'right', margin: '20px 70px 0px 0px'}}><b>DogHub</b></p>
            </div>
            <div className="var">
                <a href="variant1.html">Variant 1</a>
                <a href="variant2.html">Variant 2</a>
            </div>
            <div className="jan">
                <p>january 15, 2022</p>
            </div>
        </div>
        </div>
    )
}

export default Nav
