import React, { useEffect, useState } from 'react';
import edit from '@/assets/EditIcon.png';
import deleteIcon from '@/assets/TrashIcon.png';
import Image from 'next/image';
import StudentDeleteComponent from './StudentDeleteComponent';
import { IStudent } from '@/Interfaces/Interfaces';
import StudentEditsComponent from './StudentEditsComponent';


const StudentTableComponent = (props: {
  isDelete: boolean;
  setIsDelete: (input: boolean) => void;
  isEdit: boolean;
  setIsEdit: (input: boolean) => void;
  handleDelete: (input: number) => void;
  studentInfo: IStudent
}) => {

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
  const holder = localStorage.getItem('admin');
  if (holder === 'true') {
    setIsAdmin(true);
  }
}, []);

  const [idSelect, setIdSelect] = useState<number>();

  return (
    <div>
      {props.isDelete && idSelect && <StudentDeleteComponent setIsDelete={props.setIsDelete} handleDelete={props.handleDelete} idSelect={idSelect} />}
      {props.isEdit && idSelect && <StudentEditsComponent setIsEdit={props.setIsEdit} idSelect={idSelect} />}
      <div className='hidden lg:grid grid-cols-8 border-y-[#83677e] border-y-[1px]'>
        <div className='col-span-1 px-1 border-r-[#83677e] border-r-[1px] flex items-center break-all'>
          {`${props.studentInfo.first}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#83677e] border-x-[1px] flex items-center break-all'>
        {`${props.studentInfo.last}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#83677e] border-x-[1px] flex items-center break-all'>
          {`${props.studentInfo.doB.split("T")[0]}`}
        </div>
        <div className='col-span-2 px-1 border-x-[#83677e] border-x-[1px] flex items-center break-all'>
        {`${props.studentInfo.email}`}
        </div>
        <div className='col-span-1 px-1 border-l-[#83677e] border-l-[1px] flex items-center break-words'>
        {`${props.studentInfo.address ? props.studentInfo.address : "N/A"}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#83677e] border-x-[1px] flex items-center justify-between break-all'>
        {`${props.studentInfo.phone ? props.studentInfo.phone : "N/A"}`}
          
        </div>
        <div className='cols-span-1 px-1 flex justify-between items-center'>
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
              setIdSelect(props.studentInfo.id);
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
              setIdSelect(props.studentInfo.id);
              props.setIsEdit(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={edit}
            alt='edit icon'
          />}
          {isAdmin && <Image
            onClick={() => {
              setIdSelect(props.studentInfo.id);
              props.setIsDelete(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={deleteIcon}
            alt='remove icon'
          />}
        </div>
        <div>{`First Name: ${props.studentInfo.first}`}</div>
        <div>{`Last Name: ${props.studentInfo.last}`}</div>
        <div>{`Birthday: ${props.studentInfo.doB.split("T")[0]}`}</div>
        <div>{`Email: ${props.studentInfo.email}`}</div>
        <div>{`${props.studentInfo.address ? props.studentInfo.address : "N/A"}`}</div>
        <div>{`${props.studentInfo.phone ? props.studentInfo.phone : "N/A"}`}</div>
        <hr />
      </div>
    </div>
  );
};

export default StudentTableComponent;
