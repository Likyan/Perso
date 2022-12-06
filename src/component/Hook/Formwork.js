import React, {useState} from 'react'

function Formwork() {
    const[name,setName]=useState({firstName:"", lastName:"", email:"", password:"", tel:"", date:"", hobbies:"", gender:"",  country:"", about:"", submit:""})
    return (
        <div>
            <label>FirstName:</label>
            <input type="text" value={name.firstName} onChange={(e)=>setName({...name, firstName:e.target.value})}></input>
            <br/>

            <label>lastName:</label>
            <input type="text" value={name.lastName} onChange={(e)=>setName({...name, lastName:e.target.value})}></input>
            <br/>

            <label>Email:</label>
            <input type="email" value={name.email} onChange={(e)=>setName({...name, email:e.target.value})}></input>
            <br/>

            <label>Password:</label>
            <input type="password" value={name.password} onChange={(e)=>setName({...name, password:e.target.value})}></input>
            <br/>

            <label>Tel:</label>
            <input type="text" value={name.tel} onChange={(e)=>setName({...name, tel:e.target.value})}></input>
            <br/>

            <label>Date Of Birth:</label>
            <input type="date" value={name.date} onChange={(e)=>setName({...name, dod:e.target.value})}></input>
            <br/>

            <label>Hobbies:</label>
            Swimming<input type="checkbox" value={name.hobbies} onChange={(e)=>setName({...name, hobbies:e.target.value})}></input>
            Reading<input type="checkbox" value={name.hobbies} onChange={(e)=>setName({...name, hobbies:e.target.value})}></input>
            Coding<input type="checkbox" value={name.hobbies} onChange={(e)=>setName({...name, hobbies:e.target.value})}></input><br/>

            <label>Gender:</label>
            M<input type="radio" value={name.gender} onChange={(e)=>setName({...name, gender:e.target.value})}></input>
            F<input type="radio" value={name.gender} onChange={(e)=>setName({...name, gender:e.target.value})}></input><br/>
            
            <label>Country:</label>
            <select value={name.gender} onChange={(e)=>setName({...name, gender:e.target.value})}>
                <option>**Select Country**</option>
                <option>Gambia</option>
                <option>France</option>
                <option>Germany</option>
                <option>Brazil</option>
                <option>Argentina</option>    
            </select><br/>

            <label>About Yourself:</label>
            <textarea type="text" value={name.about} onChange={(e)=>setName({...name, about:e.target.value})}/><br/>

            <label>Submit</label>
            <input type="submit" value={name.submit} onChange={(e)=>setName({...name, submit:e.target.value})}></input><br/>


            <h3>{name.firstName}</h3>
            <h3>{name.lastName}</h3>
            <h3>{name.email}</h3>
            <h3>{name.password}</h3>
            <h3>{name.date}</h3>
            <h3>{name.hobbies}</h3>
            <h3>{name.gender}</h3>
            <h3>{name.country}</h3>
            <h3>{name.about}</h3>
            <h3>{name.submit}</h3>
            
            
        </div>
    )
}

export default Formwork
