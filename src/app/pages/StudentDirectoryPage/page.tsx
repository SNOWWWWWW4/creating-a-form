import NavBarComponent from '@/components/navbar/NavBarComponent'
import React from 'react'

const StudentDirectoryPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#d9818f] to-[#bf8764] h-screen'>
      <NavBarComponent/>
      <div className='mx-4 lg:ms-[210px] lg:me-[26px] pt-14'>
        <h1 className='text-white text-[35px] font-thin mb-4'>Student Directory</h1>
        <div className='bg-[#ECD8D1] min-h-[500px] h-auto'>
          <div className='bg-[#533f41] h-20 grid grid-cols-4 text-white font-thin text-[17px]'>
            <div className='hover:bg-[#614e4f] cursor-pointer flex items-center justify-center'>
              First Name A-Z
            </div>
            <div className='hover:bg-[#614e4f] cursor-pointer flex items-center justify-center'>
              First Name Z-A
            </div>
            <div className='hover:bg-[#614e4f] cursor-pointer flex items-center justify-center'>
              Last Name A-Z
            </div>
            <div className='hover:bg-[#614e4f] cursor-pointer flex items-center justify-center'>
              Last Name Z-A
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StudentDirectoryPage
