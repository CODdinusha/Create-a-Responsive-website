import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/users.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/pass.png'
const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");
  return (
    <div className="top">
        <div className="top-text">
        <p> Create your account</p>
        </div>
        
    <div className='container'>
        
        
        <div className="inputs">
            
            <p> Full Name</p>
            {action==="Login"?<div></div>:<div className="input">
                
                
                <input type="text" placeholder="Name" />
            </div> }
           
            <p> your email</p>
            <div className="input">
            
                <input type="email" placeholder="Email Id"/>
            </div>  
            <p> password</p>
            <div className="input">
                
                <input type="password" placeholder="Password"/>
            </div>   
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
</div>
    
    
  )
}

export default LoginSignup
