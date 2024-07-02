'use client';
import React from 'react';
import ChangePassForm from '@/components/form/ChangePassForm';

const ChangePasswordPage = () => {

  return (
    <div className='min-h-screen grid grid-cols-1 computer:grid-cols-2'>
      
      <ChangePassForm />

      <div className='flex flex-col justify-center items-center'>
        <h1>Hello there</h1>
      </div>
    </div>
  );
}

export default ChangePasswordPage
