import React from 'react'

const OvalButton: React.FC<any> = ({ children, inverted, className }) => {
  return (
    <div 
    className={className}
    >
      <button className={` rounded-3xl border-2 border-b-8 hover:border-b-2 hover:mt-[6px] border-black font-extrabold p-2 px-4 ${!inverted ? 'text-white bg-[#007e8a]' : 'text-[#007e8a] bg-white'}`}>
        {children}
      </button>
    </div>
  )
}

export default OvalButton
