'use client';
import React from 'react';
import ChangePassForm from '@/components/form/ChangePassForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePasswordPage = () => {

  return (
    <div className='min-h-screen bg-mainBg bg-cover grid grid-cols-1 computer:grid-cols-2'>
      
      <ChangePassForm />

      <div className='flex flex-col justify-center items-center'>
        <img className='w-96' src='/moon3.png'/>
      </div>

      <ToastContainer
        toastClassName={() =>
          "relative p-1 flex font-bold min-h-10 rounded-md bg-[#d3ecbc] justify-between overflow-hidden text-black cursor-pointer"
        }
        bodyClassName={() => "font-mainFont font-bold bg-[#d3ecbc] text-black p-3 font-med inline-flex block "}
        position="top-right"
        icon={false}
        autoClose={3000} />

    </div>
  );
}

export default ChangePasswordPage
