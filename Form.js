import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import "./Form.css"

function Form() {

    
    const history = useHistory()
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [address,setAddress] = useState("")
    const [pin,setPin] = useState("")
    const [number,setNumber] = useState("")
    const [email,setEmail] = useState("")

    const AddPatient = ()=>{
        fetch("/addpatient",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                address,
                pin,
                number

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            history.push('/randomotp')
        }).catch(err=>{
            console.log(err)
        })
    }





    return (
        <div className="form_body">
            {/* <div>
            <h1>form</h1>

            <input type="text" placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
               

               <input type="text"  placeholder="age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}/>

                <input type="text" placeholder="gender" 
                value={gender} 
                onChange={(e)=>setGender(e.target.value)} />

                 <button className="signup_button"
                onClick={()=>AddPatient()}>Submit</button>
                </div> */}

<div class="form">

<h1 className="pease_enter_details">Please fill the patient details</h1>
        
        <p className="req_fields">* Required Fields</p>
<div className="details_flex">
  <h5>Name:<span class="star_red">*</span></h5>
  
  <input type="text"
  value={name}
  onChange={(e)=>setName(e.target.value)} />
  </div>
<div className="details_flex">
  <h5>Address:<span class="star_red">*</span></h5>
  <textarea name="address" id="address" cols="40" rows="5" placeholder="Enter house number, street and city" required
   value={address}
   onChange={(e)=>setAddress(e.target.value)}></textarea>
  </div>
<div class="details_flex">
  <h5>Email:</h5>
  <input type="text" 
   value={email}
   onChange={(e)=>setEmail(e.target.value)}/>
  </div>
<div class="details_flex">
  <h5>Pincode:</h5>
  <input type="text" 
   value={pin}
   onChange={(e)=>setPin(e.target.value)}/>
  </div>
<div class="details_flex">
  <h5>Mobile No.:<span class="star_red">*</span></h5>
  <input type="text"
   value={number}
   onChange={(e)=>setNumber(e.target.value)} />
  </div>

 

<div class="form_button">
  <button onClick={()=>AddPatient()}>Submit</button>
  
  </div>
  </div>
  


                


        </div>

    )
}

export default Form
