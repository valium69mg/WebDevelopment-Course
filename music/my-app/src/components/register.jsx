import React from "react";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <div className="loginFormContainer">
            <label for="uname"> Username</label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            <label for="psw"> Password </label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <label for="psw"> Repeat Password </label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <button type="submit">Register</button>
            <Link to="/login">  Login </Link>
        </div>
    );
} 

export default RegisterForm;