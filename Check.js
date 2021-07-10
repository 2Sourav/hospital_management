import React,{useState} from 'react'
import {useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Check.css"
import Bed from "./Bed.png"

function Check() {


   
    

    const [patient,setPatient] = useState([])
    const [avail,setAvail] = useState([])

     useEffect(()=>{
        fetch('/patientno')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPatient(data.patients)

          
        })

     },[])  

   



     
     
     




    return (
        // <div>
        //     <h1>check</h1>
        //     <h1>{patient.length}</h1>
        //     <Link to="/form"><button>book one</button></Link>
        // </div>
        <div class="main_div_admit_page">
<div className="box"><p>Currently we have {500 - patient.length} bed available.</p>
<h5>{avail}</h5>
<Link to="/form"   style={{ textDecoration: 'none' }}><button className="book_button">Books One</button></Link>
</div>
<div className="curvediv">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00cba9" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,128C480,117,600,139,720,160C840,181,960,203,1080,186.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C9,0,120,0,60,0L0,0Z"></path>
</svg>    
</div>

<img src={Bed} className="bed_img"/>
  
  </div>
    )
}

export default Check
