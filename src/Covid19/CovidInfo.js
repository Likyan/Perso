import axios from 'axios'
import React, {useState, useEffect} from 'react'

function CovidInfo() {

    const [covidData,setCovidData] = useState([])
    useEffect(()=>{axios.get("https://api.covid19api.com/total/country/india").then(res=>{setCovidData(res.data)}).catch(err=>{console.log(err)})},[])



    return (
        <div> 

            <button onClick="">Take Data</button>
            {covidData.map((forC)=><p>Total Cases:{forC.Country.length-1}</p>)}
            {covidData.map((forC)=><p>Total Active:{forC.Active.length-1}</p>)}
            {covidData.map((forC)=><p>Total Deaths:{forC.Deaths.length-1}</p>)}
            {covidData.map((forC)=><p>Total Recovered:{forC.Recovered.length-1}</p>)}
            <h1>Total Cases:{covidData.Active}</h1>

            


        </div>
    )
}

export default CovidInfo
