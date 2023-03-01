import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen w-full mt-5">
      <div className="">
      <h1 className='text-4xl font-medium'>Welcome to Library Management</h1>
      <div className='mt-5 flex items-center justify-center space-x-3'>
          <Link to={'/login'} className='underline text-lg mx-1 text-green-600 hover:text-green-700'>Login</Link>
          <Link to={'/register'} className='underline text-lg mx-1 text-green-600 hover:text-green-700'>Register</Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
