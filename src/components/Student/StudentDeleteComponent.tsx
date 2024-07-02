import React from 'react'

type StudentTableProps = {
  setIsDelete: (input: boolean) => void;
  handleDelete: (email:string) => void;
  studentInfo: any
}

const StudentDeleteComponent = ({setIsDelete, handleDelete, studentInfo}: StudentTableProps) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full md:w-[424px] h-[200px] p-[30px] rounded-[10px] shadow-md">
        <div className='text-white font-thin text-[24px]'>
            Are you sure you want to delete?
        </div>

          <div className="mt-[50px] flex justify-end">
            <button
            onClick={() => {
                setIsDelete(false);
            }}
              className="h-[44px] w-[106px] bg-[#5C5C5C] hover:bg-[#7b7b7b] rounded-[10px] text-white text-[20px] font-light">Cancel</button>
            <button
            onClick={() => {
                setIsDelete(true);
                handleDelete(studentInfo.email);
            }}
              className={ "hover:bg-[#d186f3] ms-[25px] h-[44px] w-[106px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-light"} >Delete</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentDeleteComponent
