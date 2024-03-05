import React from "react";
import './auth-component.css'
import logo from "../../assets/public/uiu_logo.png";


const AuthComponent = ()=>{
    return(
        <div className="container">
            <img src={logo} alt="UIU Logo" className="image"/>
            <div className="input-container">
                <input placeholder="email" className="text-input"/>
                <input placeholder="password" className="pass-input" type="password"/>
                <button className="submit-button"> SUBMIT </button>
            </div>
        </div>
    )
}

export default AuthComponent;