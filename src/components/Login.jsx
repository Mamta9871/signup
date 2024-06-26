import React, { useState } from 'react'
import './Form.css';
import { Link } from 'react-router-dom';
import {auth} from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Login Successfully Created");
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className='signup'> 
      <form className='signup-form' onSubmit={handleSubmit} >
        <h2>Login </h2>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'><Link to="/profile" className='no-underline'>Login</Link></button>
        <p>Don't Have Account? <Link to="/signup">Register</Link></p>
      </form>
    </div>
  )
}

export default Login