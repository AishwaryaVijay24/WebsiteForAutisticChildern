import React, { useState, useEffect } from "react";
import './LoginFile.css';

import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import password_icon from '../images/password.png';
import Navbar from "../Navbar";


const LoginSignupMain=()=>{

    const[action, setAction] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Validation Functions
    const validateName = (name) => {
        const regex = /^[A-Za-z]+$/;
        if (!regex.test(name)) {
            setNameError("Name should only contain alphabets");
        } else {
            setNameError("");
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (password) => {
        if (password.length < 8 || password.length > 32) {
            setPasswordError("Password should be between 8 and 32 characters");
        } else {
            setPasswordError("");
        }
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        validateName(newName);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const hasError = nameError || emailError || passwordError;

    return(
        <div>
            <Navbar/>
            
        <div className="outcont">
            <div className="container90">
                <div className="header90">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div></div>:
                        <div className="input">
                            <img src={user_icon} alt=""/>
                            <input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
                        </div>
                    }
                    {nameError && <div className="error">{nameError}</div>} {/* Display error */}
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder="Email id" value={email} onChange={handleEmailChange}/>
                    </div>
                    {emailError && <div className="error">{emailError}</div>} {/* Display error */}
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    {passwordError && <div className="error">{passwordError}</div>} {/* Display error */}
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                
                <div className="submit-container">
                    <div 
                        className={action==="Login"?"submit grey":"submit"} 
                        onClick={()=>{setAction("Sign Up")}}
                        disabled={hasError}
                    >
                        Sign Up
                    </div>
                    <div 
                        className={action==="Sign Up"?"submit grey":"submit"} 
                        onClick={()=>{setAction("Login")}}
                        disabled={hasError}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
}

export default LoginSignupMain;
