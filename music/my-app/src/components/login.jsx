import React from "react";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="loginFormContainer">
            <label for="uname"> Username</label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            <label for="psw"> Password </label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <button type="submit">Login</button>
            <Link to="/register">  Register </Link>
        </div>
    )
}


export default LoginForm;

