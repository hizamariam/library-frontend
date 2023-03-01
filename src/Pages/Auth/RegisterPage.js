import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { api } from "../../Services/api";
import { setItemToLocalStorage } from "../../Services/localStorage";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    api.post('/register', {name: username, email: email, password:password}).then(({data})=>{
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
        <h3 className='text-3xl text-center mb-4'>Library-Register</h3>
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}
        <input className='form-input' name='name' type="text" required placeholder='name' onChange={(event)=>setUsername(event.target.value)} /><br/>
        <input className='form-input' name='email' type="email" required placeholder='Email' onChange={(event)=>setEmail(event.target.value)} /><br/>
        <input className='form-input' name='password' type="password" required placeholder='password' onChange={(event)=>setPassword(event.target.value)} /><br/>
        <div className='flex items-center justify-end'>

        <button className='form-button' onClick={handleSubmit}>Register</button>
        </div>
        <p className='text-center mt-5'>If you have account <Link to="/login" className='underline text-lg mx-1 text-green-600 hover:text-green-700'>Login here</Link></p>
    </div>
    </div>
  );
}

export default RegisterPage;
