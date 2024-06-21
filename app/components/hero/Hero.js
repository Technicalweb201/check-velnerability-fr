import React from 'react';

const Hero = () => {
  return (
    <div className='h-[70vh] w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center text-center'>
      <h1 className='text-6xl font-extrabold text-white drop-shadow-lg mb-4'>
        Welcome to Vulnpredator
      </h1>
      <p className='text-xl text-white drop-shadow-md mb-6'>
        Your go-to solution for web scanning and analysis
      </p>
  
    </div>
  );
}

export default Hero;
