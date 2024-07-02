'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AnimatedHamburgerButton from './AnimatedHamburgerButton';
import useLogin from '@/hooks/useLogin';
import { Button } from '@mui/material';

const NavBarComponent = () => {
  const [active, setActive] = useState<boolean>(false);
  const {
    admin,
  } = useLogin();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/')
    
  }

  return (
    <div>
      {
        active &&

        <div className='z-40 mb-[70px] lg:mt-0 w-full lg:hidden lg:w-[164px] h-full bg-opacity-90 bg-[#2f2d2b] absolute left-0'>
          <div className='text-center grid grid-cols-1 text-white'>
            {admin && <div className='h-32 flex items-center justify-center font-bold text-[40px]'>
              ADMIN
            </div>}
            <div
              onClick={() => {
                router.push('/pages/HomePage');
              }}
              className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] border-x-[#786e6e] border-y-[0.15px] flex items-center justify-center px-3'
            >
              Forms
            </div>
            <div
              onClick={() => {
                router.push('/pages/StudentDirectoryPage');
              }}
              className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] border-x-[#786e6e] flex items-center justify-center px-3'
            >
              Student Directory
            </div>
            <div
              onClick={() => {
                router.push('/pages/ManagementPage');
              }}
              className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] border-x-[#786e6e] border-y-[0.15px] flex items-center justify-center px-3'
            >
              User Management
            </div>
            <Button
              onClick={handleLogout}
              variant='contained'
              size='large'
              className='bg-fuchsia-600 hover:bg-fuchsia-800'
            >
              Logout
          </Button>
          </div>
        </div>
      }

      <div className='mb-[70px] lg:mt-0 w-full lg:w-[164px] hidden lg:block h-full bg-opacity-90 bg-[#2f2d2b] absolute left-0'>
        <div className='text-center grid grid-cols-1 text-white'>
          {admin && <div className='h-32 flex items-center justify-center font-bold text-[40px]'>
            ADMIN
          </div>}
          <div
            onClick={() => {
              router.push('/pages/HomePage');
            }}
            className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] border-x-[#786e6e] border-y-[0.15px] flex items-center justify-center px-3'>
            Forms
          </div>
          <div
            onClick={() => {
              router.push('/pages/StudentDirectoryPage');
            }}
            className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] border-x-[#786e6e] flex items-center justify-center px-3'>
            Student Directory
          </div>
          <div
            onClick={() => {
              router.push('/pages/ManagementPage');
            }}
            className='font-thin hover:bg-[#b2b2b2] cursor-pointer h-16 border-y-[#786e6e] border-x-[#786e6e] border-y-[0.15px] flex items-center justify-center px-3'>
            User Management
          </div>
        </div>
        <Button
              onClick={handleLogout}
              variant='contained'
              size='large'
              className='absolute bottom-20 left-7 bg-fuchsia-500 hover:bg-fuchsia-800'
            >
              Logout
          </Button>
      </div>
      <div className='flex lg:hidden ms-2 pt-2'>
        <div className='bg-opacity-90 bg-[#2f2d2b] w-[70px] h-[70px] rounded-full flex justify-center items-center'>
          <AnimatedHamburgerButton active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
