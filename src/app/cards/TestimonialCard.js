import React from 'react'

function TestimonialCard({imgSrc="",comment,name,position}) {
  return (
    <div className='flex w-[70%] items-center gap-5'>
      <div>
        <img className='' src={imgSrc}/>
      </div>
      <div className='flex flex-col'>
        <div><span className='text-[#FD6F00] break-words'>"</span>{comment}<span className='text-[#FD6F00]'>"</span></div>
        <span className='font-bold'>{name}</span>
        <span>{position}</span>
      </div>
    </div>
  )
}

export default TestimonialCard
