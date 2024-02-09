import React from 'react';
import Input from './Input';



function Login(props) {
    
        return (<div className='form'>
        <form className="formContainer"> </form>
            <Input
                type="text"
                placeholder="Username"
            />
            <Input
                type="text"
                placeholder="Password"
            />
            {props.isRegistered === false && (
                <Input
                type="text"
                placeholder="Confirmed Password"
            />)}
    
            
            <button type="submit"> {props.isRegistered ? "Login" : "Register"} </button>
        </div>)
      
}

export default Login;