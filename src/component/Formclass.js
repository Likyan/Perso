import React, { Component } from 'react'

export class Formclass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: "",
             lastName: "",
             email: "",
             phoneNumber: 0,
             country: "",
             hobbies: "",
             gender: "",
             aboutYourself: ""
        }
    }
    firstNameHandler=(event)=>{
        this.setState ({firstName:event.target.value});
    }
    lastNameHandler=(event)=>{
        this.setState ({lastName:event.target.value});
    }
    emailHandler=(event)=>{
        this.setState ({email:event.target.value});
    }
    phoneNumberHandler=(event)=>{
        this.setState ({phoneNumber:event.target.value});
    }
    countryHandler=(event)=>{
        this.setState ({country:event.target.value});
    }
    hobbiesHandler=(event)=>{
        this.setState ({hobbies:event.target.value});
    }
    genderHandler=(event)=>{
        this.setState ({gender:event.target.value});
    }
    aboutYourselfHandler=(event)=>{
        this.setState ({aboutYourself:event.target.value});
    }
    render() {
        return (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text" value={this.state.firstName} onChange={this.firstNameHandler} placeholder="First Name"></input><br></br>
                    <label>Last Name:</label>
                    <input type="text" value={this.state.lastName} onChange={this.lastNameHandler} placeholder="Last Name"></input><br></br>
                    <label>Email:</label>
                    <input type="email" value={this.state.email} onChange={this.emailHandler} placeholder="Email"></input><br></br>
                    <label>Phone Number:</label>
                    <input type="number" value={this.state.phoneNumber} onChange={this.phoneNumberHandler} placeholder="Phone Number"></input><br></br>
                    <label>Country</label>
                    <select value={this.state.country} onChange={this.countryHandler}>
                      <option>**select country**</option>
                      <option>Nigeria</option>
                      <option>Ghana</option>
                      <option>Co'tevior</option>
                      <option>Senegal</option>
                      <option>Egypt</option>    
                    </select><br></br>
                    <input type="checkbox" value={this.state.hobbies} onChange={this.hobbiesHandler}></input> Swimming
                    <input type="checkbox" value={this.state.hobbies} onChange={this.hobbiesHandler}></input> Reading
                    <input type="checkbox" value={this.state.hobbies} onChange={this.hobbiesHandler}></input> Football
                    <input type="checkbox" value={this.state.hobbies} onChange={this.hobbiesHandler}></input> Tenis <br></br>
                    <input type="radio" name="gend" value={this.state.gender} onChange={this.genderHandler}></input> Female
                    <input type="radio" name="gend" value={this.state.gender} onChange={this.genderHandler}></input> Male <br></br>
                    <label>About Yourself</label><br></br>
                    <textarea colspan="100px" rowspan="100px" value={this.state.aboutYourself} placeholder="About Your Self"></textarea>

                </form>
            </div>
        )
    }
}

export default Formclass
