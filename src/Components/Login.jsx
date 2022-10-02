import React, {useState, useEffect} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {gapi} from 'gapi-script';
import {useLocation, useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Login.scss"

function App() {
    let navigate = useNavigate();
    let location = useLocation();
    const [profile, setProfile] = useState([]);
    const [status, setStatus] = useState("");
    const clientId = '316466299912-nr5umh7iho0hsag07864a414fd2kl6hd.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({clientId: clientId, scope: ''});
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
        navigate("/Home",{state:{name: res.profileObj.name,email: res.profileObj.email,img: res.profileObj.imageUrl}})
        console.log(res.profileObj);
    };

    const onFailure = (err) => {
        setStatus("Authentication Failed");
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <div>

           <div className="Login">
            <div class="container">
                <main class="signup-container">
                <h1 class="heading-secondary">
                Welcome to
                <br/><em style={
                    {color: '#2196f3'}
                }>ERROR</em>
                <em style={
                    {color: 'black'}
                }>MAKERS</em>
            </h1>
            <br/>
            <br/>
                    <h1 class="heading-primary">Log in<span class="span-blue">.</span>
                    </h1>
                    <p class="text-mute">LOGIN to be a CHANGEMAKER </p>
                    <div class="login-wrapper">
                        <GoogleLogin 
                            className="btn-google"
                            clientId={clientId}
                            buttonText="Login in with Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                        <div class="line-breaker">
                        </div>
                    </div>
         
        </main>
    </div>


</div>
        </div>
    );
}
export default App;
