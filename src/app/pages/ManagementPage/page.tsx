'use client';

import StudentDeleteComponent from '@/components/Student/StudentDeleteComponent';
import NavBarComponent from '@/components/navbar/NavBarComponent';
import ManagementTableComponent from '@/components/Student/ManagementTableComponent';

import React, { useEffect, useState } from 'react';
import ManagementEditComponent from '@/components/Student/ManagementEditComponent';
import { getAllStudents, getAllUsers, removeStudent } from '@/utils/DataServices';

const ManagementPage = () => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [userArr, setUserArr] = useState<any>();
  const [sortBy, setSortBy] = useState<number>(0);

  useEffect(() => {
    const getUser = async () => {
      const usersArr = await getAllUsers();

      if (sortBy === 0) {
        setUserArr(usersArr);
      } else if (sortBy === 1) {
        let emailAZ = usersArr.sort((a, b) => {
          if (a.email < b.email) {
            return -1;
          }
          if (a.email > b.email) {
            return 1;
          }
          return 0;
        });
        setUserArr(emailAZ);
      } else if (sortBy === 2) {
        let emailZA = usersArr.sort((a, b) => {
          if (a.email > b.email) {
            return -1;
          }
          if (a.email < b.email) {
            return 1;
          }
          return 0;
        });
        setUserArr(emailZA);
      }
    };
    getUser();
  }, [sortBy])

  return (
    <div className='bg-gradient-to-r from-[#d9818f] to-[#bf8764] h-screen'>
      <NavBarComponent />
      {/* {isDelete && <StudentDeleteComponent setIsDelete={setIsDelete} handleDelete={} />} */}
      {isEdit && <ManagementEditComponent setIsEdit={setIsEdit} />}
      <div>
        <div className='mx-4 lg:ms-[190px] lg:me-[26px] pt-14'>
          <h1 className='text-white text-[35px] font-thin mb-4'>
            User Management
          </h1>
          <div className='bg-[#ECD8D1] min-h-[500px] h-auto rounded-[10px]'>
            <div className='bg-[#533f41] h-20 grid grid-cols-5 text-white font-thin text-[16px] rounded-t-[10px]'>
              <div
                onClick={() => {
                  setSortBy(0);
                }}
                className='hover:bg-[#614e4f] hover:rounded-tl-[10px] cursor-pointer flex items-center justify-center'>
                Default
              </div>
              <div
                onClick={() => {
                  setSortBy(1);
                }}
                className='hover:bg-[#614e4f] cursor-pointer flex items-center justify-center'>
                Ascending (A-Z)
              </div>
              <div
                onClick={() => {
                  setSortBy(2);
                }}
                className='hover:bg-[#614e4f] cursor-pointer flex items-center justify-center'>
                Descending (Z-A)
              </div>
            </div>
            <div className='bg-[#ddc7cb] h-[40px] mt-6 mx-4 hidden lg:grid font-medium rounded-t-[10px]'>
              {/* hidden lg:grid grid-cols-7 border-y-[#ddc7cb] border-y-[1px] */}
              <div className='lg:grid grid-cols-4'>
                <div className='col-span-4 flex px-1.5 items-center truncate'>
                  Email
                </div>
              </div>
            </div>
            <div className='border-[#ddc7cb] lg:border-[2px] h-[325px] mx-4 overflow-y-auto rounded-b-[10px]'>
              {
                userArr && userArr.map((user: any, idx: number) => {
                  return (
                    <div key={idx}>
                      <ManagementTableComponent
                        userInfo={user}
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
    </div>
  );
};

export default ManagementPage;
