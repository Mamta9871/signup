import React from 'react'
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
    <div className='profile'>
        <p className='one'>Welcome to Expense Tracker!!!</p>
        <p className='two'>Your profile is incomplete.<Link to="/Cprofile">Complete now</Link></p>
    </div>
    </>
  )
}

export default Profile