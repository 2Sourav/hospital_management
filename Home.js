import React from 'react'
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import "./Home.css"
import Doctors from "./Doctors.png";

function Home() {




    const [patient,setPatient] = useState([])

     useEffect(()=>{
        fetch('/patientno')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPatient(data.patients)
        })

     },[])   

     function avail(len) { 
        //statements 
        return 500-len; 
     }
     

    
   


    // useEffect(()=>{
    //     fetch('/patientno',{
    //         method: 'get',
    //         dataType: 'json',
    //         headers: {
    //         //   'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         }
    //     }).then(patients => { 
    //          patients.json()
    //     })
    //     .then((result)=>{
    //         console.log(result)
    //         // setProfile(result.posts)
    //         // setName(result.user)
            
    //     })
          

    //      //     .then((response) => 
    // //     {
    // //       response.json() // << This is the problem
    // //     })
    // //   .then((responseData) => { // responseData = undefined
  
    // //       console.log(responseData);
    // //    });
    // //    }).catch(function(err) {
    // //       console.log(err);
    // //     })
    // // },[]) 








    // },[]) 
    return (
       
        <div class="main_div_admit_page">
        <div className="box"><p>500+ patients treated and counting...</p>
        <Link to="/check" style={{ textDecoration: 'none' }}><button className="admit_btn">Admit</button></Link>
        </div>
        <div className="curve_div">
          <div className="curvediv">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#00cba9" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,128C480,117,600,139,720,160C840,181,960,203,1080,186.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C9,0,120,0,60,0L0,0Z"></path>
        </svg>
        </div>

        <img src={Doctors} className="home_img"/>
        </div>
          
          </div>
       
       








    )
}

export default Home



{/* <Link to="/check"><button>check</button></Link> */}
