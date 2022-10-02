import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import FormComponent from './FormComponent';

function Home() {
    let navigate = useNavigate();
    let location=useLocation();
  return (
    <div style={{display:"flex",margin:"5vw",borderRadius:"20px",boxShadow:"1px 1px 20px black"}}>
       <div style={{backgroundColor:"#2196f3",padding:"7%",color:"white",fontWeight:"900",borderRadius:"20px"}}>
            <center>
             <h1>WELCOME</h1> 
            <br/>
            <br/>
            <br/>
            <img style={{width:"100px",height:"100px",borderRadius:"100px",boxShadow:"1px 1px 20px white"}} src={location.state.img}/>
            <br/>
            <br/>
            <br/>
            <h1>{location.state.name}</h1>
            </center>
            
       </div>
        <div style={{margin:"20px",backgroundColor:"whitesmoke",padding:"7%",margin:"0",borderRadius:"20px",width:"100%"}} >
               <FormComponent data={{"Name":location.state.name,"email":location.state.email}}/>
        </div>
    </div>
  )
}

export default Home