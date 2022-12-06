import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import CovidInfo from './Covid19/CovidInfo'

function ContriesDropDown() {

    // const change = (e) => {
    //     console.log(e.target.value)

    //     props.forE.Country = e.target.value  
    //     // onChange={(e)=>setName({...name, firstName:e.target.value})}  
    // }

    // const [cout,setCout] = useState("")

    // const countrySelected = (countries.map()) => {
    //     console.log(countries.map)
    // }

    const [countries,setCountries] = useState([]);
    useEffect(()=>{axios.get("https://api.covid19api.com/countries").then(res=>{setCountries(res.data)}).catch(err=>{console.log(err)})},[])  


    return (
        <div>

        <label>Select Country:</label>
        <select>

            <option>**Select Country**</option>
            {countries.map((forE)=><option>{forE.Country}</option>)}
        </select><br/>

        {/* <button className="sub">Take Data</button> */}

        

        </div>

    )
    
}

export default ContriesDropDown
