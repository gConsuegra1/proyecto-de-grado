import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
        <p className=' text-[#526192]'>{text1} <span className='text-[#1f3a93] font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#e9c01e]'></p>
      
    </div>
  )
}

export default Title
