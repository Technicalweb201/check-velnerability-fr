'use client'
import React, { useState } from 'react';

const attackNames1 = ['SQL Injection scanning', 'Identification Auth', 'Cross-site Scripting', 'Data Encryption', 'Network Firewall'];
const attackNames2 = ['Session Hijacking', 'Data Masking', 'Input Validation', 'Password Hashing', 'Access Control'];

const WebScan = ({ active }) => {
  const [selectedAttacks, setSelectedAttacks] = useState([]);
  const handleCheckboxChange = (attackName) => {
    setSelectedAttacks(prevSelected => {
      if (prevSelected.includes(attackName)) {
        return prevSelected.filter(name => name !== attackName);
      } else {
        return [...prevSelected, attackName];
      }
    });
  };
  console.log(selectedAttacks);
  return (
    <div className={`${active === 'web' ? 'opacity-100 flex' : 'opacity-0 hidden'} flex-col justify-center rounded-lg shadow-lg items-center h-full  w-full`}>
      <div className='mx-20 mt-20  bg-white h-full w-full'>
        <div className='flex flex-col space-y-4'>
          <div className='w-full flex  flex-wrap justify-evenly space-y-3 lg:space-y-0'>
            {attackNames1.map((attackName, index) => (
              <div key={index} className='h-32 w-32 bg-slate-300 rounded-lg shadow-xl cursor-pointer flex flex-col justify-start items-center px-2 py-2 space-y-4'>
                <p className='font-bold h-12'>{attackName}</p>
                <div>
                  <label className="container">
                    <input type="checkbox" onChange={() => handleCheckboxChange(attackName)} checked={selectedAttacks.includes(attackName)} />
                    <svg viewBox="0 0 64 64" height="2em" width="2em">
                      <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                    </svg>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex  flex-wrap justify-evenly  space-y-3 lg:space-y-0'>
            {attackNames2.map((attackName, index) => (
              <div key={index} className='h-32 w-32 bg-slate-300 rounded-lg shadow-xl cursor-pointer flex flex-col justify-start items-center px-2 py-2 space-y-4'>
                <p className='font-bold h-12'>{attackName}</p>
                <div>
                  <label className="container">
                    <input type="checkbox" onChange={() => handleCheckboxChange(attackName)} checked={selectedAttacks.includes(attackName)} />
                    <svg viewBox="0 0 64 64" height="2em" width="2em">
                      <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                    </svg>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-[80%] h-full px-10 rounded-lg mt-4 flex flex-col justify-center items-center'>
        <div className='flex flex-col space-y-5'>
        <label htmlFor="inputField" className="text-lg font-semibold mb-2 text-[#EF454B]">Target Url</label>
        <input
          type="text"
          id="inputField"
          className="border  w-[600px] rounded-md px-3 py-2 focus:outline-none "
          placeholder="http://www.example.com"
        />
        <button className='px-4 py-2 bg-yellow-400 rounded-lg  hover:bg-yellow-500 transition-all duration-200 ease-in-out'>Start Scanning</button>
        </div>
      </div>

    </div>
  );
}

export default WebScan;
