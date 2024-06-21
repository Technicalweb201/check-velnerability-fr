'use client'
import React, { useState } from 'react';
import Scanresponse from '../model/response';
import ScanLoader from './ScanLoader';

const attackNames1 = ['SQL Injection', 'XSS', 'Server Misconfig', ];
const attackNames2 = ['Insecure Design','Broken Access', 'Broken Authentication' ];
const attackName3 = ['Cryptographic Failures', 'Integrity Failures', 'Authentication Failures']

const WebScan = ({ active }) => {
  const [selectedAttacks, setSelectedAttacks] = useState([]);
  const [targetUrl, setTargetUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scanResponse, setScanresponse]= useState([])

  const handleCheckboxChange = (attackName) => {
    setSelectedAttacks(prevSelected => {
      if (prevSelected.includes(attackName)) {
        return prevSelected.filter(name => name !== attackName);
      } else {
        return [...prevSelected, attackName];
      }
    });
  };

  const handleScan = async () => {
    if (selectedAttacks.length === 0 || !targetUrl) {
      alert('Please select at least one attack and provide a target URL.');
      return;
    }

    const requestBody = {
      targetUrl: targetUrl,
      checks: selectedAttacks
    };
    console.log('request body', requestBody);
    setIsLoading(true);
    setIsVisible(false);

    try {
      const response = await fetch('https://api-scan.onrender.com/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Response data:', data);
      setScanresponse(data)
      // alert('Scan started successfully!');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to start scan.');
    } finally {
      setIsLoading(false);
      setIsVisible(true);
    }
  };

  return (
    <div className={`${active === 'web' ? 'opacity-100 flex' : 'opacity-0 hidden'} flex-col justify-center rounded-lg shadow-lg items-center h-full w-full`}>
      <div className='mx-20 mt-20 flex justify-center items-center bg-white h-full w-full'>
        <div className='flex flex-col space-y-10 w-[50%]'>
          <div className='w-full flex flex-wrap justify-evenly space-y-3 lg:space-y-0'>
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
          <div className='w-full flex flex-wrap justify-evenly space-y-3 lg:space-y-0'>
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
          <div className='w-full flex flex-wrap justify-evenly space-y-3 lg:space-y-0'>
            {attackName3.map((attackName, index) => (
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
      <div className='w-[95%] sm:w-[80%] h-full px-10 rounded-lg mt-4 flex flex-col justify-center items-center'>
        <div className='flex flex-col space-y-5'>
          <label htmlFor="inputField" className="text-lg font-semibold mb-2 text-[#EF454B]">Target Url</label>
          <input
            type="text"
            id="inputField"
            className="border w-full sm:w-[600px] rounded-md px-3 py-2 focus:outline-none"
            placeholder="http://www.example.com"
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
          />
          <button onClick={handleScan} className='px-4 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-all duration-200 ease-in-out'>Start Scanning</button>
        </div>
      </div>

      {isLoading &&
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
          <ScanLoader />
        </div>
      }
      {isVisible &&
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center flex-col justify-center z-50'>
          <div className='h-5 w-5 rounded-full mb-10 bg-slate-100 flex justify-center items-center cursor-pointer p-1' onClick={() => setIsVisible(false)}>X</div>
          <Scanresponse data={scanResponse} />
        </div>
      }
    </div>
  );
}

export default WebScan;
