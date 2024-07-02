'use client';

import StudentDeleteComponent from '@/components/student/StudentDeleteComponent';
import NavBarComponent from '@/components/navbar/NavBarComponent';
import ManagementTableComponent from '@/components/student/ManagementTableComponent';
import StudentEditsComponent from '@/components/student/StudentEditsComponent';

import React, { useState } from 'react';

const ManagementPage = () => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div className='bg-gradient-to-r from-[#d9818f] to-[#bf8764] h-screen'>
      <NavBarComponent />
      {isDelete && <StudentDeleteComponent setIsDelete={setIsDelete} />}
      {isEdit && <StudentEditsComponent setIsEdit={setIsEdit} />}
      <div>
        <div className='mx-4 lg:ms-[190px] lg:me-[26px] pt-14'>
          <h1 className='text-white text-[35px] font-thin mb-4'>
            User Management
          </h1>
          <div className='bg-[#ECD8D1] min-h-[500px] h-auto rounded-[10px]'>
            <div className='bg-[#533f41] h-20 grid grid-cols-5 text-white font-thin text-[16px] rounded-t-[10px]'>
              <div className='hover:bg-[#614e4f] hover:rounded-tl-[10px] cursor-pointer flex items-center justify-center'>
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
              <div className='hover:bg-[#614e4f] hover:rounded-tr-[10px] cursor-pointer flex items-center justify-center'>
                Last Name Z-A
              </div>
            </div>
            <div className='bg-[#ddc7cb] h-[40px] mt-6 mx-4 hidden lg:grid font-medium rounded-t-[10px]'>
              {/* hidden lg:grid grid-cols-7 border-y-[#ddc7cb] border-y-[1px] */}
              <div className='lg:grid grid-cols-5'>
                <div className='col-span-1 flex px-1.5 items-center truncate'>
                  First Name
                </div>
                <div className='col-span-1 flex px-1.5 items-center truncate'>
                  Last Name
                </div>
                <div className='col-span-1 flex px-1.5 items-center truncate'>
                  Birthday
                </div>
                <div className='col-span-1 flex px-1.5 items-center truncate'>
                  Email
                </div>
                <div className='col-span-1 flex px-1.5 items-center truncate'></div>
              </div>
            </div>
            <div className='border-[#ddc7cb] lg:border-[2px] h-[325px] mx-4 overflow-y-auto rounded-b-[10px]'>
              <ManagementTableComponent
                setIsDelete={setIsDelete}
                setIsEdit={setIsEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
