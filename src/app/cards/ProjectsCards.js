import React from 'react'

function ProjectsCards({imgSrc1="",imgSrc2="",title,category}) {
  return (
    <>
        <div className='relative w-full h-[50vh]  md:w-96 md:h-full flex flex-col'>
            <div className='relative rounded-t-xl w-full bg-[#FFEBDB] h-[90%]'>
                <img className='absolute right-5 h-full w-72 ' src={imgSrc2}/>
                <img className='absolute hidden md:block h-20 md:h-3/4 left-5 bottom-0  w-72' src={imgSrc1}/>
            </div>
            <div className='flex relative bottom-0 flex-col'> 
                <span className='text-[#FD6F00]'>{category}</span>
                <span className='text-xl font-bold'>{title}</span>
            </div>
        </div>
    </>
  )
}
// https://www.positronx.io/react-responsive-carousel-tutorial/
export default ProjectsCards
