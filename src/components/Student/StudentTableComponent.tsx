import React from 'react';
import edit from '@/assets/EditIcon.png';
import deleteIcon from '@/assets/TrashIcon.png';
import Image from 'next/image';


const StudentTableComponent = (props: {
  setIsDelete: (input: boolean) => void;
  setIsEdit: (input: boolean) => void;
  studentInfo:any
}) => {
  return (
    <div>
      <div className='hidden lg:grid grid-cols-8 border-y-[#ddc7cb] border-y-[1px]'>
        <div className='col-span-1 px-1 border-r-[#ddc7cb] border-r-[1px] flex items-center break-all'>
          {`${props.studentInfo.first}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
        {`${props.studentInfo.last}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
          {`${props.studentInfo.doB}`}
        </div>
        <div className='col-span-2 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
        {`${props.studentInfo.email}`}
        </div>
        <div className='col-span-1 px-1 border-l-[#ddc7cb] border-l-[1px] flex items-center break-words'>
        {`${props.studentInfo.address == "" && "N/A"}`}
        </div>
        <div className='col-span-2 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center justify-between break-all'>
        {`${props.studentInfo.phone == "" && "N/A"}`}
          <Image
            onClick={() => {
              props.setIsEdit(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={edit}
            alt='edit icon'
          />
          <Image
            onClick={() => {
              props.setIsDelete(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={deleteIcon}
            alt='remove icon'
          />
        </div>
      </div>

      <div className='bg-[#ddc7cb] lg:hidden text-center'>
        <hr />
        <div className='flex justify-center'>
          <Image
            onClick={() => {
              props.setIsEdit(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={edit}
            alt='edit icon'
          />
          <Image
            onClick={() => {
              props.setIsDelete(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={deleteIcon}
            alt='remove icon'
          />
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
