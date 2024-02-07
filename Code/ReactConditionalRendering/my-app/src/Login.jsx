import React from 'react';
import Input from './Input';

function Login() {
    return <div className='form'>
        <form className="formContainer"> </form>
            <Input
                type="text"
                placeholder="Username"
            />
            <Input
                type="text"
                placeholder="Password"
            />
            <button type="submit"> Login </button>
  </div>
    
}

export default Login;