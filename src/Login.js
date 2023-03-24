import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");

  const signIn = e =>{
    e.preventDefault();

    // Some fancy firebass login shitttttttttt!
  }

  const register = e =>{
    e.preventDefault();

    // Some fancy firebass register shitttttttttt!
  }

  return (
    
    <div className='login'>
        <Link to="/">
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='' />
        </Link>
    
        <div className='login__container'>
            <h1>Sign-In</h1>
            <form >
                <h5>Email</h5>
                <input type="email"  value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit'  onClick={signIn} className='login__signInButton'>Sign in</button>
            </form>
            <p>By signin you agreed to Amazon's condition of Use & sale. Please see your privacy
                 notice our cookies notice and our interest based ads</p>
                 <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
   

  )
}

export default Login
