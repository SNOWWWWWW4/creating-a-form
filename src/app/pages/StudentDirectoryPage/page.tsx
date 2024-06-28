import StudentTableComponent from '@/components/Student/StudentTableComponent'
import NavBarComponent from '@/components/navbar/NavBarComponent'
import React from 'react'

const StudentDirectoryPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#d9818f] to-[#bf8764] min-h-screen'>
      <NavBarComponent/>
      <div className='mx-4 lg:ms-[190px] lg:me-[26px] pt-14'>
        <h1 className='text-white text-[35px] font-thin mb-4'>Student Directory</h1>
        <div className='bg-[#ECD8D1] min-h-[500px] h-auto rounded-[10px]'>
          <div className='bg-[#533f41] h-20 grid grid-cols-5 text-white font-thin text-[16px] rounded-t-[10px]'>
            <div className='hover:bg-[#614e4f] cursor-pointer flex items-center justify-center'>
              Default
            </div>
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
          <div className='bg-[#ddc7cb] h-[40px] mt-6 mx-4 grid grid-cols-12 font-medium rounded-t-[10px]'>
            <div className='col-span-1 flex justify-center items-center'>
              First Name
            </div>
            <div className='col-span-1 flex justify-center items-center'>
              Last Name
            </div>
            <div className='col-span-2 flex justify-center items-center'>
              Birthday
            </div>
            <div className='col-span-4 flex justify-center items-center'>
              Email
            </div>
            <div className='col-span-2 flex justify-center items-center'>
              Phone #
            </div>
            <div className='col-span-2 flex justify-center items-center'>
              Address
            </div>
          </div>
          <div className='border-[#ddc7cb] border-[2px] h-[325px] mx-4 overflow-y-auto rounded-b-[10px]'>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
            <StudentTableComponent/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StudentDirectoryPage
