import React from 'react';
import './Spinner.css';

function Spinner() {
  return (
    <div className='flex h-screen justify-center items-center flex-col '>
      <div className='spinner'></div>
      <p className='font-bold text-lg'>Loading...</p>
    </div>
  )
}

export default Spinner