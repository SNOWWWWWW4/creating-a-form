'use client';

import StudentEditsComponent from '@/components/Student/StudentEditsComponent';
import StudentTableComponent from '@/components/Student/StudentTableComponent';
import StudentDeleteComponent from '@/components/Student/StudentDeleteComponent';

import NavBarComponent from '@/components/navbar/NavBarComponent';
import React, { useEffect, useState } from 'react';
import { getAllStudents, removeStudent } from '@/utils/DataServices';
import { IStudent } from '@/Interfaces/Interfaces';

const StudentDirectoryPage = () => {

  const [studentArr, setStudentArr] = useState<IStudent[]>([]);
  const [sortBy, setSortBy] = useState<number>(0);

  useEffect(() => {

    const getStudent = async () => {
      let studentsArr = await getAllStudents();
      if(sortBy == 0){
        setStudentArr(studentsArr);
      }else if(sortBy == 1){
        let firstAZ = studentsArr.sort((a,b) => {
          if(a.first.toLowerCase()<b.first.toLowerCase()){
              return -1;
          }
          if(a.first.toLowerCase()>b.first.toLowerCase()){
              return 1;
          }
          return 0;
      })
      setStudentArr(firstAZ);


      }else if(sortBy == 2){
        let firstZA = studentsArr.sort((a,b) => {
          if(a.first.toLowerCase()>b.first.toLowerCase()){
              return -1;
          }
          if(a.first.toLowerCase()<b.first.toLowerCase()){
              return 1;
          }
          return 0;
      })
      setStudentArr(firstZA);


      }else if(sortBy == 3){
        let lastAZ = studentsArr.sort((a,b) => {
          if(a.last.toLowerCase()<b.last.toLowerCase()){
              return -1;
          }
          if(a.last.toLowerCase()>b.last.toLowerCase()){
              return 1;
          }
          return 0;
      })
      setStudentArr(lastAZ);



      }else if(sortBy == 4){
        let lastZA = studentsArr.sort((a,b) => {
          if(a.last.toLowerCase()>b.last.toLowerCase()){
              return -1;
          }
          if(a.last.toLowerCase()<b.last.toLowerCase()){
              return 1;
          }
          return 0;
      })
      setStudentArr(lastZA);
      }
    }

    getStudent();
  }, [sortBy])

  const handleDelete = async (email: string) => {
    await removeStudent(email);

    const updatedStudents = await getAllStudents();
    setStudentArr(updatedStudents);
  };

  const studentDefault = {
    id: 0,
    first: '',
    last: '',
    email: '',
    doB: '',
    phone: null,
    address: null,
  }


  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [currentStudent, setCurrentStudent] = useState<IStudent>(studentDefault);

  return (
    <div className='bg-studentBg bg-cover font-mainFont from-[#d9818f] to-[#bf8764] min-h-screen'>
      {isDelete && <StudentDeleteComponent setIsDelete={setIsDelete} />}
      {isEdit && <StudentEditsComponent setIsEdit={setIsEdit} 
      currentStudent={currentStudent}
      // setCurrentStudent={setCurrentStudent} 
      />}
      <NavBarComponent />
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
            className={sortBy == 0 ? `bg-studentDirect hover:bg-[#30252d] hover:rounded-tl-[10px] cursor-pointer flex text-black hover:text-white items-center justify-center rounded-tl-[10px] font-bold` : `bg-[#53404f] hover:bg-[#30252d] hover:rounded-tl-[10px] cursor-pointer flex items-center justify-center rounded-tl-[10px]`}>
              Default
            </div>
            <div 
            onClick={() => {
              setSortBy(1);
            }}
            className={sortBy == 1 ? `bg-studentDirect hover:bg-[#30252d] cursor-pointer flex items-center justify-center font-bold text-black hover:text-white` : `bg-[#53404f] hover:bg-[#30252d] cursor-pointer flex items-center justify-center`}>
              First Name A-Z
            </div>
            <div 
            onClick={() => {
              setSortBy(2);
            }}
            className={sortBy == 2 ? `bg-studentDirect hover:bg-[#30252d] cursor-pointer flex items-center justify-center font-bold text-black hover:text-white` : `bg-[#53404f] hover:bg-[#30252d]  cursor-pointer flex items-center justify-center`}>
              First Name Z-A
            </div>
            <div 
            onClick={() => {
              setSortBy(3);
            }}
            className={sortBy == 3 ? `bg-studentDirect hover:bg-[#3b2d2e] cursor-pointer flex items-center justify-center font-bold text-black hover:text-white` : `bg-[#53404f] hover:bg-[#30252d] cursor-pointer flex items-center justify-center`}>
              Last Name A-Z
            </div>
            <div 
            onClick={() => {
              setSortBy(4);
            }}
            className={sortBy == 4 ? `bg-studentDirect hover:bg-[#30252d] hover:rounded-tr-[10px] cursor-pointer flex items-center justify-center rounded-tr-[10px] font-bold text-black hover:text-white` : `bg-[#53404f] hover:bg-[#30252d] hover:rounded-tr-[10px] cursor-pointer flex items-center justify-center rounded-tr-[10px]`}>
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
              <div className='col-span-1 flex px-1.5 items-center font-bold truncate'>
                Phone #
              </div>
              <div className='col-span-1 flex px-1.5 items-center font-bold truncate'>

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
                      isDelete={isDelete}
                      setIsDelete={setIsDelete}
                      setIsEdit={setIsEdit}
                      setCurrentStudent={setCurrentStudent}
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
