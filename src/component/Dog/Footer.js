import React from 'react'
import './Variant1.css'

function Footer() {
    return (
        <div>
            <div className="english">
            <div style={{width: '15%'}}>
                <b>&copy; 2021 wizsullivan</b>
            </div>
            <div style={{width: '15%',textDecoration: 'underline'}}>
                <p><b>Privacy Policy</b></p>
            </div>
            <div style={{width: '15%',textDecoration: 'underline'}}>
                <p><b>Terms of Service</b></p>
            </div>
            <div style={{width: '35%'}}>
                <p style={{color: 'darkslategray !important', margin: '-25px 10px 0px 0px !important'}}><b>Language</b></p>
                <select style={{width: '400px', height: '30px', borderRadius: '10px', margin: '15px 10px'}}><option><span style={{padding: '15px 10px'}}>English</span></option></select>
                
            </div>
            <div style={{width: '20%'}}>
                <p style={{margin: '-25px 10px 20px 0px !important', color: 'darkslategray'}}><b>Follow Us</b></p>
                <i className="icofont-twitter"></i>
                <i className="icofont-instagram"></i>
                <i className="icofont-meta"></i>
            </div>
        </div>
        </div>
    )
}

export default Footer
