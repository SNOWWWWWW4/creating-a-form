'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const NavBarComponent = () => {

    const router = useRouter();

  return (
    <div className='mt-[70px] lg:mt-0 w-full lg:w-[184px] h-[70px] lg:h-[100vh] bg-opacity-90 bg-[#2f2d2b] absolute lg:left-0 bottom-0'>
        <div className='grid grid-cols-3 text-center lg:grid lg:grid-cols-1 text-white'>
            <div className='hidden h-32 lg:flex items-center justify-center font-bold text-[40px]'>
                ADMIN
            </div>
            <div 
            onClick={() => {
                router.push('/pages/LandingPage');
            }}
            className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] lg:border-x-[#786e6e] lg:border-y-[0.15px] border-y-[0.15px] flex items-center justify-center lg:justify-start px-3'>
                Forms
            </div>
            <div 
            onClick={() => {
                router.push('/pages/StudentDirectoryPage');
            }}
            className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] lg:border-x-[#786e6e] lg:border-y-[0.15px] border-y-[0.15px] flex items-center justify-center lg:justify-start  px-3'>
                Student Directory
            </div>
            <div 
            onClick={() => {
                router.push('/pages/ManagementPage');
            }}
            className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] lg:border-x-[#786e6e] lg:border-y-[0.15px] border-y-[0.15px] flex items-center justify-center lg:justify-start  px-3'>
                User Management
            </div>
      </div>
    </div>
  )
}

export default NavBarComponent
