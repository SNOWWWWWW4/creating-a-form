'use client';
import React from 'react';
import ChangePassForm from '@/components/form/ChangePassForm';

const ChangePasswordPage = () => {

  return (
    <div className='min-h-screen   bg-mainBg bg-cover grid grid-cols-1 computer:grid-cols-2'>
     <div className=' order-2  md:mt-0 grid items-center'>
     <ChangePassForm />
     </div>
      
      
      <div className='flex order-1  flex-col justify-center items-center'>
        <img className='w-96' src='/moon3.png'/>
      </div>
    </div>

  );
}

export default ChangePasswordPage
