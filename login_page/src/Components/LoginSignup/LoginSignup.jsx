import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/users.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/pass.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className="top">
            <div className="top-text">
                <p>
                    {action === "Sign Up" ? "Create your account" : "Login to your account"} 
                    <span className="toggle-text" onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}>
                        {action === "Sign Up" ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                    </span>
                </p>
            </div>
            
            <div className='container'>
                <div className="inputs">
                    {action === "Sign Up" && (
                        <>
                            <p>Full Name</p>
                            <div className="input">
                                <img src={user_icon} alt="user icon" />
                                <input type="text" placeholder="Name" />
                            </div>
                        </>
                    )}
                    <p>Your Email</p>
                    <div className="input">
                        <img src={email_icon} alt="email icon" />
                        <input type="email" placeholder="Email Id" />
                    </div>
                    <p>Password</p>
                    <div className="input">
                        <img src={password_icon} alt="password icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action === "Login" && <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                
                <div className="submit-container">
                    {action === "Sign Up" ? (
                        <div className="input-with-button">
                            <div className="submit" onClick={() => console.log("Sign Up Clicked")}>Sign Up</div>
                        </div>
                    ) : (
                        <div className="submit" onClick={() => console.log("Login Clicked")}>Login</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
