import React from 'react';

const StudentTableComponent = () => {
  return (
    <div>
      <div className='grid grid-cols-12 border-y-[#ddc7cb] border-y-[1px]'>
        <div className='col-span-1 px-1 border-r-[#ddc7cb] border-r-[1px] flex items-center break-all'>
          {'Marcos'}
        </div>
        <div className='col-span-1 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
          {'Photosynthesis'}
        </div>
        <div className='col-span-2 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
          {'12/31/2024'}
        </div>
        <div className='col-span-4 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
          {
            'tesdfsdfdfdfddfjgpdfojgidfjogidfjoigjdfoigjdfoigjdffdfdsf@gmail.com'
          }
        </div>
        <div className='col-span-2 px-1 border-x-[#ddc7cb] border-x-[1px] flex items-center break-all'>
          {'(209)-111-1111'}
        </div>
        <div className='col-span-2 px-1 border-l-[#ddc7cb] border-l-[1px] flex items-center break-words'>
          {'hello 95828 yo mama joe hey lol'}
        </div>
      </div>
    </div>
  );
};

export default StudentTableComponent;
