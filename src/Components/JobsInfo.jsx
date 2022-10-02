import Axios  from 'axios';
import React,{useEffect} from 'react'
import { useLocation,useNavigate} from "react-router-dom";


function JobsInfo() {
  let location = useLocation();
  let navigate= useNavigate();

    Axios.post("http://localhost:8000/FindJobs",{
      employment_status:location.state.employment_status,
      education:location.state.education,
      financial_situation:location.state.financial_situation,
      age:location.state.age
    }).then((res) => {
        navigate("/AvailableJobs",{state:{age:res.data.age,financial_situation:res.data.financial_situation,education:res.data.education,employment_status:res.data.employment_status}})
    })




  return (
    <div>
        <div style={{margin:"20px"}}>
         <h1>All the available Jobs for you</h1>
         {location.state.age}<br/>
         {location.state.financial_situation}<br/>
         {location.state.education}<br/>
         {location.state.employment_status}<br/>
        </div>
    </div>
  )
}

export default JobsInfo