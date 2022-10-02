import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Components/Login"
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Landing_Page from './Components/Landing_Page';
import JobsInfo from './Components/JobsInfo';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Landing_Page/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/AboutUs" element={<Aboutus/>} />
      <Route path="/AvailableJobs" element={<JobsInfo/>} />
      </Routes>
      </Router>
   
    </div>
  );
}

export default App;
