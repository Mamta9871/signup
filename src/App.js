import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cprofile from './components/Cprofile';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/Cprofile' element={<Cprofile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App