import HomeFormComponent from '@/components/form/HomeFormComponent'
import NavBarComponent from '@/components/navbar/NavBarComponent'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-r from-[#d9818f] to-[#bf8764] h-screen'>
      <NavBarComponent/>
      <div className='mx-4 lg:ms-[190px] lg:me-[26px] pt-14'>
        <div className='grid justify-center'>
          <HomeFormComponent/>

        </div>
      </div>
    </div>
  )
}

export default HomePage
