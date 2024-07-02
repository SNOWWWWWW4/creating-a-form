import React, { useEffect, useState } from 'react';
import edit from '@/assets/EditIcon.png';
import deleteIcon from '@/assets/TrashIcon.png';
import Image from 'next/image';
import StudentDeleteComponent from './StudentDeleteComponent';
import { IStudent } from '@/Interfaces/Interfaces';


const StudentTableComponent = (props: {
  isDelete: boolean;
  setIsDelete: (input: boolean) => void;
  setIsEdit: (input: boolean) => void;
  handleDelete: (input: string) => void;
  studentInfo: IStudent
}) => {

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
  const holder = localStorage.getItem('admin');
  if (holder === 'true') {
    setIsAdmin(true);
  }
}, []);

  const [emailToDelete, setEmailToDelete] = useState<string>();

  return (
    <div>
      {props.isDelete && emailToDelete && <StudentDeleteComponent setIsDelete={props.setIsDelete} handleDelete={props.handleDelete} emailToDelete={emailToDelete} />}
      <div className='hidden lg:grid grid-cols-8 border-y-[#83677e] border-y-[1px]'>
        <div className='col-span-1 px-1 border-r-[#83677e] border-r-[1px] flex items-center break-all'>
          {`${props.studentInfo.first}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#83677e] border-x-[1px] flex items-center break-all'>
        {`${props.studentInfo.last}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#83677e] border-x-[1px] flex items-center break-all'>
          {`${props.studentInfo.doB}`}
        </div>
        <div className='col-span-2 px-1 border-x-[#83677e] border-x-[1px] flex items-center break-all'>
        {`${props.studentInfo.email}`}
        </div>
        <div className='col-span-1 px-1 border-l-[#83677e] border-l-[1px] flex items-center break-words'>
        {`${props.studentInfo.address == "" && "N/A"}`}
        </div>
        <div className='col-span-2 px-1 border-x-[#83677e] border-x-[1px] flex items-center justify-between break-all'>
        {`${props.studentInfo.phone == "" && "N/A"}`}
          {isAdmin && <Image
            onClick={() => {
              props.setIsEdit(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={edit}
            alt='edit icon'
          />}
          {isAdmin && <Image
            onClick={() => {
              setEmailToDelete(props.studentInfo.email);
              props.setIsDelete(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={deleteIcon}
            alt='remove icon'
          />}
        </div>
      </div>

      <div className='bg-[#ddc7cb] lg:hidden text-center'>
        <hr />
        <div className='flex justify-center'>
          {isAdmin && <Image
            onClick={() => {
              props.setIsEdit(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={edit}
            alt='edit icon'
          />}
          {isAdmin && <Image
            onClick={() => {
              setEmailToDelete(props.studentInfo.email);
              props.setIsDelete(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={deleteIcon}
            alt='remove icon'
          />}
        </div>
        <div>{`First Name: ${props.studentInfo.first}`}</div>
        <div>{`Last Name: ${props.studentInfo.last}`}</div>
        <div>{`Birthday: ${props.studentInfo.doB}`}</div>
        <div>{`Email: ${props.studentInfo.email}`}</div>
        <div>{`Address: ${props.studentInfo.address == "" && "N/A"}`}</div>
        <div>{`Phone: ${props.studentInfo.phone == "" && "N/A"}`}</div>
        <hr />
      </div>
    </div>
  );
};

export default StudentTableComponent;
