import React, { useState } from 'react'
import './Form.css';
import { Link } from 'react-router-dom';
import {auth} from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confrmp,setConfrmp]=useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("Account Created");
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className='signup'> 
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder='Confirm Password'onChange={(e)=>setConfrmp(e.target.value)}/>
        <button type='submit'>Sign Up</button>
        <p>Already Registered? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Signup