import axios from 'axios';
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { api } from '../../Services/api';
import { setItemToLocalStorage } from '../../Services/localStorage';

export const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('null');
    const navigation = useNavigate()
    const handleSubmit = ()=>{
        
    api.post('/login', { email: email, password:password}).then(({data})=>{
      console.log(data)
      if(data?.success){
        setItemToLocalStorage('token', data.token)
        setItemToLocalStorage('user', data.user)
      }
      if(data?.message){
        setError(data.message)
      }
    }).catch(error=>console.log(error))
   
    navigation('/books')
  };
  
  return (
    <div className="container flex items-center justify-center min-h-screen w-full mt-5">
    <div className='w-1/3 p-4 rounded-lg bg-white shadow-md'>
        <h3 className='text-3xl text-center mb-4'>Library-Login</h3>
        <input className='form-input' name='email' type="email" required placeholder='Email' onChange={(event)=>setEmail(event.target.value)} /><br/>
        <input className='form-input' name='password' type="password" required placeholder='password' onChange={(event)=>setPassword(event.target.value)} /><br/>
        <div className='flex items-center justify-end'>

        <button className='form-button' onClick={handleSubmit}>Login</button>
        </div>
        <p className='text-center mt-5'>If you don't have account <Link to="/register" className='underline text-lg mx-1 text-green-600 hover:text-green-700'> Register Here</Link></p>
    </div>
    </div>

  )
}
