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
    <div className='bg-studentBg bg-cover font-mainFont h-screen'>
      <NavBarComponent />
      {/* {isDelete && <StudentDeleteComponent setIsDelete={setIsDelete} handleDelete={} />} */}
      {isEdit && <ManagementEditComponent setIsEdit={setIsEdit} />}
      <div>
        <div className='mx-4 lg:ms-[190px] lg:me-[26px] pt-14'>
          <h1 className='text-white text-5xl mb-4'>
            User Management
          </h1>
          <div className='bg-studentDirect min-h-[500px] h-auto rounded-[10px]'>
            <div className='bg-[#53404f] hover:bg-[#30252d]  grid grid-cols-3 h-20 text-white font-thin text-[16px] rounded-t-[10px]'>
              <div 
              onClick={() => {
                setSortBy(0);
              }}
              className={sortBy == 0 ? `bg-studentDirect hover:bg-[#30252d] text-black hover:text-white hover:rounded-tl-[10px] cursor-pointer flex  items-center justify-center rounded-tl-[10px] font-bold` : `bg-[#53404f] hover:bg-[#30252d] hover:rounded-tl-[10px] cursor-pointer flex items-center justify-center rounded-tl-[10px]`}>
                Default
              </div>
              <div 
              onClick={() => {
                setSortBy(1);
              }}
              className={sortBy == 1 ? `bg-studentDirect hover:bg-[#30252d] text-black hover:text-white cursor-pointer flex items-center justify-center font-bold` : `bg-[#53404f] hover:bg-[#30252d] cursor-pointer flex items-center justify-center`}>
               A-Z
              </div>
              <div 
              onClick={() => {
                setSortBy(2);
              }}
              className={sortBy == 2 ? `bg-studentDirect hover:bg-[#30252d] text-black hover:text-white cursor-pointer flex items-center justify-center font-bold rounded-tr-[10px]` : `bg-[#53404f] hover:bg-[#30252d]  cursor-pointer flex items-center justify-center rounded-tr-[10px]`}>
                Z-A
              </div>
            </div>
            <div className='bg-[#83677e] h-[40px] mt-6 mx-4 hidden lg:grid font-medium rounded-t-[10px]'>
              {/* hidden lg:grid grid-cols-7 border-y-[#ddc7cb] border-y-[1px] */}
              <div className='lg:grid grid-cols-1'>
                <div className='col-span-1 font-bold flex px-1.5 items-center truncate'>
                  Email
                </div>
              </div>
            </div>
            <div className='border-[#83677e] lg:border-[2px] h-[325px] mx-4 overflow-y-auto rounded-b-[10px]'>
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
