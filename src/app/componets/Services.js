import React from 'react'

function Services() {
  return (
    <div id='services' className='md:h-[60vh] h-auto w-full flex flex-col gap-8 items-center py-10'>
      <h3 className='text-3xl font-bold'>Services</h3>
      <div className='break-words w-full md:w-2/5'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</div>
      <div className='flex gap-10  mt-10 md:flex-row flex-col'>
        <div>
            <img src='/ui.svg'/>
            <h4 className='font-bold text-xl'>UI/UX</h4>
            <span>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </span>
        </div>
        <div>
            <img src='/web_design.svg'/>
            <h4 className='font-bold text-xl'>Web Design</h4>
            <span>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </span>
        </div>
        <div>
            <img src='/app_design.svg'/>
            <h4 className='font-bold text-xl'>App Design</h4>
            <span>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </span>
        </div>
        <div>
            <img src='/graphic.png'/>
            <h4 className='font-bold text-xl'>Graphic Design</h4>
            <span>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </span>
        </div>
      </div>
    </div>
  )
}

export default Services
