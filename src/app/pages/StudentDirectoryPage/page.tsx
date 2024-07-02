'use client';

import StudentEditsComponent from '@/components/Student/StudentEditsComponent';
import StudentTableComponent from '@/components/Student/StudentTableComponent';
import StudentDeleteComponent from '@/components/Student/StudentDeleteComponent';

import NavBarComponent from '@/components/navbar/NavBarComponent';
import React, { useEffect, useState } from 'react';
import { getAllStudents } from '@/utils/DataServices';

const StudentDirectoryPage = () => {

  const [studentArr, setStudentArr] = useState<any>();
  const [sortBy, setSortBy] = useState<number>(0);

  useEffect(() => {

    const getStudent = async () => {
      let studentsArr = await getAllStudents();
      console.log(studentsArr);
      setStudentArr(studentsArr);
    }

    getStudent();
  }, [sortBy])


  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div className='bg-studentBg bg-cover font-mainFont from-[#d9818f] to-[#bf8764] min-h-screen'>
      <NavBarComponent />
      {isDelete && <StudentDeleteComponent setIsDelete={setIsDelete} />}
      {isEdit && <StudentEditsComponent setIsEdit={setIsEdit} />}
      <div className='mx-4 lg:ms-[190px] lg:me-[26px] pt-14'>
        <h1 className='text-white text-5xl font-mainFont mb-4'>
          Student Directory
        </h1>
        <div className='bg-studentDirect min-h-[500px] h-auto rounded-[10px]'>
          <div className='h-20 grid grid-cols-5 text-white font-thin text-[16px] rounded-t-[10px]'>
            <div
              onClick={() => {
                setSortBy(0);
              }}
              className={sortBy == 0 ? `bg-studentDirect hover:bg-[#362833] hover:rounded-tl-[10px] cursor-pointer flex items-center justify-center rounded-tl-[10px] font-semibold` : `bg-[#584153] hover:bg-[#362833] hover:rounded-tl-[10px] cursor-pointer flex items-center justify-center rounded-tl-[10px]`}>
              Default
            </div>
            <div
              onClick={() => {
                setSortBy(1);
              }}
              className={sortBy == 1 ? `bg-studentDirect hover:bg-[#362833] cursor-pointer flex items-center justify-center font-semibold` : `bg-[#584153] hover:bg-[#362833] cursor-pointer flex items-center justify-center`}>
              First Name A-Z
            </div>
            <div
              onClick={() => {
                setSortBy(2);
              }}
              className={sortBy == 2 ? `bg-studentDirect hover:bg-[#362833] cursor-pointer flex items-center justify-center font-semibold` : `bg-[#584153] hover:bg-[#362833]  cursor-pointer flex items-center justify-center`}>
              First Name Z-A
            </div>
            <div
              onClick={() => {
                setSortBy(3);
              }}
              className={sortBy == 3 ? `bg-studentDirect hover:bg-[#362833] cursor-pointer flex items-center justify-center font-semibold` : `bg-[#584153] hover:bg-[#362833] cursor-pointer flex items-center justify-center`}>
              Last Name A-Z
            </div>
            <div
              onClick={() => {
                setSortBy(4);
              }}
              className={sortBy == 4 ? `bg-studentDirect hover:bg-[#614e4f] hover:rounded-tr-[10px] cursor-pointer flex items-center justify-center rounded-tr-[10px] font-semibold` : `bg-[#584153] hover:bg-[#362833] hover:rounded-tr-[10px] cursor-pointer flex items-center justify-center rounded-tr-[10px]`}>
              Last Name Z-A
            </div>
          </div>
          <div className='bg-[#83677e] h-[40px] mt-6 mx-4 hidden lg:grid font-medium rounded-t-[10px]'>
            {/* hidden lg:grid grid-cols-7 border-y-[#ddc7cb] border-y-[1px] */}
            <div className='lg:grid grid-cols-8'>
              <div className='col-span-1 flex px-1.5 items-center font-bold truncate'>
                First Name
              </div>
              <div className='col-span-1 flex px-1.5 items-center font-bold truncate'>
                Last Name
              </div>
              <div className='col-span-1 flex px-1.5 items-center font-extrabold truncate'>
                Birthday
              </div>
              <div className='col-span-2 flex px-1.5 items-center font-bold truncate'>
                Email
              </div>
              <div className='col-span-1 flex px-1.5 items-center font-bold truncate'>
                Address
              </div>
              <div className='col-span-2 flex px-1.5 items-center font-bold truncate'>
                Phone #
              </div>
            </div>
          </div>
          <div className='border-[#83677e] lg:border-[2px] h-[325px] mx-4 overflow-y-auto rounded-b-[10px]'>
            {
              studentArr && studentArr.map((student: any, idx: number) => {
                return (
                  <div key={idx}>
                    <StudentTableComponent
                      studentInfo={student}
                      setIsDelete={setIsDelete}
                      setIsEdit={setIsEdit}
                    />
                  </div>

                )
              }


              )
            }


          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDirectoryPage;
