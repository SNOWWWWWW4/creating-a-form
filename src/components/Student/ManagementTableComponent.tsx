import React from 'react';
import edit from '@/assets/EditIcon.png';
import deleteIcon from '@/assets/TrashIcon.png';
import Image from 'next/image';

const ManagementTableComponent = (props: {
  setIsDelete: (input: boolean) => void;
  setIsEdit: (input: boolean) => void;
  userInfo:any
}) => {
  return (
    <div>
      <div className='hidden lg:grid grid-cols-5 border-y-[#ddc7cb] border-y-[1px]'>
        <div className='col-span-1 px-1 border-r-[#ddc7cb] border-r-[1px] flex items-center break-all'>
          {`${!props.userInfo.first && "N/A"}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
        {`${!props.userInfo.last && "N/A"}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
        {`${!props.userInfo.doB && "N/A"}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
        {`${props.userInfo.email}`}
        </div>
        <div className='col-span-1 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center justify-between break-all'>
          <Image
            onClick={() => {
              props.setIsEdit(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={edit}
            alt='edit icon'
          />
          {/* <Image
            onClick={() => {
              props.setIsDelete(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={deleteIcon}
            alt='remove icon'
          /> */}
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
          {/* <Image
            onClick={() => {
              props.setIsDelete(true);
            }}
            className='h-[25px] w-[25px] cursor-pointer'
            src={deleteIcon}
            alt='remove icon'
          /> */}
        </div>
        <div>{`${!props.userInfo.first && "N/A"}`}</div>
        <div>{`${!props.userInfo.last && "N/A"}`}</div>
        <div>{`${!props.userInfo.doB && "N/A"}`}</div>
        <div>{`${props.userInfo.email}`}</div>
        <hr />
      </div>
    </div>
  );
};

export default ManagementTableComponent;
