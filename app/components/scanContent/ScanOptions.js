'use client'
import React, { useState } from 'react';
import { CgWebsite } from "react-icons/cg";
import { MdSettingsApplications } from "react-icons/md";
import WebScan from './WebScan';
import AppScan from './AppScan';

const Scanoptions = () => {
    const [activeOption, setActiveOption] = useState('web');

    return (
        <div className='min-h-screen flex  justify-center'>
            <div className='w-full items-center justify-center flex flex-col'>
                <div className='flex flex-row space-x-10 h-20'>
                    <div
                        className={`flex flex-col justify-center items-center space-x-2 cursor-pointer transition-all duration-300`}
                        onClick={() => setActiveOption('web')}
                    >
                        <div className={`flex flex-row justify-center items-center space-x-2`}>
                            <CgWebsite size={"25px"} className={`text-rose-400 ${activeOption === 'web' ? 'web' : 'text-amber-500'}`} />
                            <span className={`text-2xl font-sans ${activeOption === 'web' ? 'text-rose-400' : 'text-amber-500'}`}>Web app</span>
                        </div>
                        {/* {activeOption === 'web' && ( */}
                        <div className={`h-1 w-full bg-rose-500 mt-1 rounded-md transition-opacity duration-300 ${activeOption === 'web' ? 'opacity-100' : 'opacity-0'}`}></div>
                        {/* )} */}
                    </div>
                    <div
                        className={`flex flex-col justify-center items-center space-x-2 cursor-pointer transition-all duration-300`}
                        onClick={() => setActiveOption('mobile')}
                    >
                        <div className={`flex flex-row justify-center items-center space-x-2`}>
                            <MdSettingsApplications size={"25px"} className={`text-rose-400 ${activeOption === 'mobile' ? 'mobile' : 'text-amber-500'}`} />
                            <span className={`text-2xl font-sans ${activeOption === 'mobile' ? 'text-rose-400' : 'text-amber-500'}`}>Mobile app</span>
                        </div>
                        <div className={`h-1 w-full bg-rose-500 mt-1 rounded-md transition-opacity duration-300 ${activeOption === 'mobile' ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>
                </div>
                    <WebScan active={activeOption} />
                    <AppScan active={activeOption} />
            </div>
        </div>
    );
}

export default Scanoptions;
