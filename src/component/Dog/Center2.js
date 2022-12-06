import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Variant1.css'

function Center2() {

    const [breedsList,setBreedsList] = useState([])
    const [disNumber,setDisNumber] = useState([])
    const [randoom,setRandoom] = useState([])
    const [breedsDisplayList,setBreedsDisplayList] = useState([])



    const  display= (event) =>{

         setDisNumber(event.target.value)

     }
    const  breedsDisplay= (event) =>{

        setBreedsDisplayList(event.target.value)

    }

    // const randoomm =() =>{
    //     {randoom.map(mm =><div><img src={mm} width="400" height="350" alt="Nnannanan"></img></div>)}
    // }    

    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/list")
        .then((result)=>{
        setBreedsList(result.data.message)
        }).catch((err)=>{            
        })
    },[])

    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/"+breedsDisplayList+"/images/random/"+disNumber)
        .then((result)=>{
        setRandoom(result.data.message)
   }).catch((err)=>{            
        })
    },[])


    







    return (
        <div>
            <div className="hound">
            <div>
                <select onChange={breedsDisplay} style={{width: '150px', height: '50px',}}>
                    <option><span>Breeds</span></option>
                    {breedsList.map((mess)=><option value={mess}>{[mess]}</option>)}
                </select>
            </div>
            <div>
                <select style={{width: '150px', height: '50px',}}><option><span>Sub-Breeds</span></option></select>
            </div>
            <div>
                <select onChange={display} style={{width: '150px', height: '50px',}}>
                    <option>** Display Number **</option>
                    <option><span>3</span></option>
                    <option><span>6</span></option>
                    <option><span>9</span></option>
                    <option><span>12</span></option>
                    <option><span>15</span></option>
                    <option><span>18</span></option>
                    <option><span>21</span></option>
                    <option><span>24</span></option>
                    <option><span>27</span></option>
                    <option><span>30</span></option>
                </select>
            </div>
            <div style={{marginLeft: '320px'}}>
                <button onClick={console.log(randoom.map)} style={{width: '250px', height: '50px', backgroundColor: 'black', color: 'white'}}>Randomize Breeds Image Display</button>
            </div> 
        </div>

        
        {/* {randoom.map(mm =><div><img src={mm} width="400" height="350" alt="Nnannanan"></img></div>)} */}

        </div>
    )
}

export default Center2
