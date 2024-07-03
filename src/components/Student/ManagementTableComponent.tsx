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
      <div className='hidden lg:grid grid-cols-1 border-y-[#83677e] border-y-[1px]'>
        <div className='col-span-1 px-2 border-x-[#83677e] border-x-[1px] py-2 flex items-center break-all'>
        {`${props.userInfo.email}`}
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

        </div>
        <div>{`${props.userInfo.email}`}</div>
        <hr />
      </div>
    </div>
  );
};

export default ManagementTableComponent;
