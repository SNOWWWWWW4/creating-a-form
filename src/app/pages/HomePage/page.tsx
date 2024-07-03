import HomeFormComponent from '@/components/form/HomeFormComponent'
import NavBarComponent from '@/components/navbar/NavBarComponent'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-studentBg bg-cover font-mainFont h-screen'>
      <NavBarComponent/>
      
      <div className='lg:ms-[190px] lg:me-[26px] pt-20 md:pt-32  '>
      <h1 className='text-center text-5xl text-white mb-4'>Edit Form</h1>
       
        <div className=' md:grid md:justify-center px-5 lg:grid lg:justify-center   '>
          <HomeFormComponent/>

        </div>
      </div>
    </div>
  )
}

export default HomePage
