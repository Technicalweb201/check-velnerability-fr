import React from 'react';

const AppScan = ({ active }) => {
  return (
    <div className={` ${active === 'mobile' ? 'opacity-100 flex' : 'opacity-0 hidden'} justify-center items-center h-full bg-slate-100 mx-10 w-full`}>
      <h1 className='text-2xl font-bold'>Comming Soon...</h1>
    </div>
  );
}

export default AppScan;
