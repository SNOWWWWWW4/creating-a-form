'use client';
import React from 'react';
import ChangePassForm from '@/components/form/ChangePassForm';

const ChangePasswordPage = () => {

  return (
    <div className='min-h-screen bg-mainBg bg-cover grid grid-cols-1 computer:grid-cols-2 p-4 lg:p-0'>
      
      <ChangePassForm />

      <div className='flex flex-col pt-3 justify-center items-center'>
        <img className='lg:w-96 md:w-80 w-60' src='/moon3.png'/>
      </div>
    </div>
  );
}

export default ChangePasswordPage
