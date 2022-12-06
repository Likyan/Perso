import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Breeds() {

    const [breedsList,setBreedsList] = useState([])

    useEffect(()=>{


        axios.get("https://dog.ceo/api/breeds/list")
        .then((result)=>{
        setBreedsList(result.data.message)
        }).catch((err)=>{

            
        })
    },[])

    return (
        <div>
            <select>
                <option>Breeds</option>
                  {breedsList.map((mess)=><option>{[mess]}</option>)}  
{/* { countryList.map((country,index)=> <option key={index} value={country.Country}>{country.Country}</option>)} */}
                <option></option>
            </select>
        </div>
    )
}

export default Breeds
