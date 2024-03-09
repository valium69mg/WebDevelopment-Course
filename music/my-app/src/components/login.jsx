import{ React, useState }from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

const LoginForm = () => {
    
    const [credentials,setCredentials] = useState({
        "username":"",
        "password":"",
    });

    function handleChangeUsername(event) {
        const value = event.target.value;
        setCredentials(prevValue => ({
            ...prevValue,
            username:value
        }));
    }

    function handleChangePassword(event) {
        const value = event.target.value;
        setCredentials(prevValue => ({
            ...prevValue,
            password:value
        }));
    }
    // REQUES TO THE SERVER FOR LOGIN 
    async function onLoginClick() {
        console.log(credentials);
        await axios.post(`http://localhost:3001/login?username=${credentials['username']}&password=${credentials['password']}`)
        .then(res => {
            console.log(res);
        }).catch(e =>{
            console.log(e);
        })
    }
    
    return (
        <div className="loginFormContainer">
            <label for="uname"> Username</label>
            <input 
                type="text" 
                placeholder="Enter Username" 
                name="username" required
                onChange={handleChangeUsername}
            />
            <label for="psw"> Password </label>
            <input 
                type="password" 
                placeholder="Enter Password" 
                name="psw" required
                onChange={handleChangePassword}
                />
            <button 
                type="submit"
                onClick={onLoginClick}
                >Login
            </button>
            <Link to="/register">  Register </Link>
        </div>
    )
}


export default LoginForm;

