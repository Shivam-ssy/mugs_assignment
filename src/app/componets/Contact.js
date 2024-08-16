import React from 'react'

function Contact() {
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <h2 className="text-3xl font-bold">Lets Design Together</h2>
      <span className=" mt-10 w-full md:w-1/2 text-center break-words">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</span>
        <div className='flex gap-10 mt-20 md:w-1/2 w-full '>
            <input className='w-[70%] outline outline-gray-400 rounded-md' placeholder='Enter Your Email' type='text'/>
            <button className='bg-[#FD6F00] font-bold text-nowrap text-xl px-3 py-2 rounded-md'>Contact Me</button>
        </div>
    </div>
  )
}

export default Contact
