import React from 'react'
import './Variant1.css'

function Center4() {
    return (
        <div>
            <div className="popular">
            <div style={{width: '30%', padding: '10px 10px 10px 10px'}}>
                <img src="images/Group 1.png" alt="Group1"></img>
                <p style={{float: 'right',margin: '20px 210px 0px 0px', fontSize: '18px'}}><b>DogHub</b></p>
                <p style={{color: 'rgb(114, 114, 189)', margin: '30px 0px 0px 0px'}}>The Dogs API was made by dog.ceo, you could 
                    buy the author a dog treat via this link <a href="#">https://www.paypal.com/paypalme/dogapi</a>, you could also view the project on Github via this link <a href="#">https://github.com/ElliottLandsborough/dog-ceo-api</a>
                </p>
            </div>
            <div style={{width: '20%'}}>
                <p style={{margin: '20px 20px 0px 0px', fontSize: '22px'}}><b>Popular</b></p>
                <div className="analysis">
                    <a href="#">Category</a>
                    <a href="#">New Analysis</a>
                    <a href="#">Popular</a>
                </div>
            </div>
            <div style={{width: '20%'}}>
                <p style={{margin: '20px 20px 0px 0px', fontSize: '22px'}}><b>Breeds</b></p>
                <div className="analysis">
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
            <div style={{width: '30%'}}>
                <p style={{margin: '20px 20px 0px 0px', fontSize: '22px'}}><b>Join NewsLetter</b></p>
                <p style={{color: 'rgb(114, 114, 189)', margin: '30px 0px 0px 0px'}}>To learn more and get major updates, subscribe to our newsletter</p>
                <p className="mail">Enter Your Email Address</p>
            </div>
        </div>
        </div>
    )
}

export default Center4
