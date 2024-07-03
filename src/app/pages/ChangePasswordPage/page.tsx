'use client';
import React from 'react';
import ChangePassForm from '@/components/form/ChangePassForm';

const ChangePasswordPage = () => {

  return (
    <div className='min-h-screen bg-mainBg bg-cover grid grid-cols-1 computer:grid-cols-2'>
      
      <ChangePassForm />

      <div className='flex flex-col justify-center items-center'>
        <img className='w-96' src='/moon3.png'/>
      </div>
    </div>
  );
}

export default ChangePasswordPage
