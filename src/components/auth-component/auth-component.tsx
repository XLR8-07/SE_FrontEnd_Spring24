import React, { useState } from "react";
import './auth-component.css'
import logo from "../../assets/public/uiu_logo.png";


const AuthComponent = ()=>{
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const submitHandler = () =>{
        console.log(userEmail)
        console.log(userPassword)
    }

    const handleEmailChange = (event: any)=>{
        setUserEmail(event.target.value)
    }

    const handlePassChange = (event: any)=>{
        setUserPassword(event.target.value)
    }

    return(
        <div className="container">
            <img src={logo} alt="UIU Logo" className="image"/>
            <div className="input-container">
                <input placeholder="email" value={userEmail} onChange={handleEmailChange} className="text-input"/>
                <input placeholder="password" value={userPassword} onChange={handlePassChange} className="pass-input" type="password"/>
                <button className="submit-button" onClick={submitHandler}> SUBMIT </button>
            </div>
        </div>
    )
}

export default AuthComponent;