import Axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { useLocation,useNavigate} from "react-router-dom";


function JobsInfo() {
  let location = useLocation();
  let navigate= useNavigate();
  const [jobs,setJobs]=useState([]);

    Axios.post("http://localhost:8000/FindJobs",{
      employment_status:location.state.employment_status,
      education:location.state.education,
      financial_situation:location.state.financial_situation,
      age:location.state.age
    }).then((res) => {
      setJobs(res.data)
       
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

        <div>
         {jobs.map((job)=>{
          {
            <p>
              {job.jobs}
            </p>
          }
         })

         }
        </div>
    </div>
  )
}

export default JobsInfo