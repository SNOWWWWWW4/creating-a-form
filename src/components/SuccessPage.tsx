'use client';
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

const SuccessPage = () => {

    const router = useRouter();
    const handleHome = () => {
        router.push('/')
    }
  return (
    <div className='min-h-screen bg-blue-200 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold my-4 text-pretty  '>Thank you for your submission!</h1>
        <Button onClick={handleHome} className="mx-auto" variant="contained">Return to Home</Button>
    </div>
  )
}

export default SuccessPage
