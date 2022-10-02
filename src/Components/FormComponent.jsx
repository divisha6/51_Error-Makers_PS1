import React from 'react'
import { useEffect,useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";



function FormComponent(props) {
  let navigate = useNavigate();

  const [gender,setGender]=useState("1");
  const [age,setAge]=useState("0");
  const [financialCondition,setFinancialCondition]=useState("7000");
  const [educationalBackground,setEducationalBackground]=useState("9");
  const [employmentStatus,setEmploymentStatus]=useState("4");
  const [state,setState]=useState("Andhra Pradesh");

  let location=useLocation();
  const submit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/InsertData",{
      name:location.state.name,
      email:location.state.email,
      gender:gender,
      age:age,
      financialCondition:financialCondition,
      educationalBackground:educationalBackground,
      employmentStatus:employmentStatus,
      state:state
    }).then((res) => {
        if(res.data=="success")
        {
          navigate("/AvailableJobs")
        }
    })


  }
  return (
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Text style={{color:"black"}}>
            <h2>{props.data.Name}</h2>
        </Form.Text>
      </Form.Group>
           
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Text style={{color:"black"}}>
            <h2>{props.data.email}</h2>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Select onChange={e=>setGender(e.target.value)} >
          <option value="1">male</option>
          <option value="0">female</option>
        </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age"onChange={e=>setAge(e.target.value)}/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Financial Condition</Form.Label>
        <Form.Select onChange={e=>setFinancialCondition(e.target.value)}>
          <option value="7000">I can afford food and regular expenses, but nothing else</option>
          <option value="2000">I cannot afford enough food for my family</option>
          <option value="25000">I can comfortably afford food, clothes, and furniture, and I have savings</option>
          <option value="5000">I can afford food, but nothing else</option>
          <option value="12000">I can afford food, regular expenses and clothes but nothing else</option>
          <option value="15000">I can comfortably afford food, clothes, and furniture, and I don't have any savings</option>
        </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Educational Background</Form.Label>
        <Form.Select onChange={e=>setEducationalBackground(e.target.value)}>
          <option value="9">University or college degree completed</option>
          <option value="10">Technical school diploma or degree completed</option>
          <option value="12">Some technical education (e.g polytechnic school)</option>
          <option value="9">Some university or college</option>
          <option value="13">Secondary school/ high school completed</option>
          <option value="14">Primary school completed</option>
          <option value="14">Some primary education</option>
          <option value="13">Some secondary school / high school</option>
          <option value="16">No formal education</option>
        </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employment Status</Form.Label>
        <Form.Select onChange={e=>setEmploymentStatus(e.target.value)}>
          <option value="0">I am unemployed</option>
          <option value="4">I work full-time, either as an employee or self-employed</option>
          <option value="6">I do housework, fulfilling domestic tasks, looking after children</option>
          <option value="3">I work part-time, either as an employee or self-employed</option>
          <option value="8">I am retired</option>
          <option value="1">I am a student</option>
          <option value="2">I am a student and I work part-time</option>
          <option value="7">I am unable to work due to long-term illness or disability</option>

        </Form.Select>
      </Form.Group>


      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Select onChange={e=>setState(e.target.value)}>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madya Pradesh">Madya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Orissa">Orissa</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttaranchal">Uttaranchal</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadeep">Lakshadeep</option>
                        <option value="Pondicherry">Pondicherry</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" onClick={(e)=>{submit(e)}} type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default FormComponent