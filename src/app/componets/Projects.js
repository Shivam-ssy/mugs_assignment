import ProjectsCards from '../cards/ProjectsCards'
import React from 'react'

function Projects() {
  return (
    <div id='projects' className='flex flex-col  gap-5 h-auto md:h-[90vh] items-center w-full'>
      <h3 className='text-3xl font-bold'>My Projects</h3>
      <span className='md:w-1/2 w-full break-words text-center'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</span>
      <ul className='flex flex-wrap gap-5'>
        <li className='outline outline-gray-500 px-3 rounded-md'>All</li>
        <li className='outline outline-gray-500 px-3 rounded-md'>UI/UX</li>
        <li className='outline bg-[#FD6F00] outline-gray-500 px-3 rounded-md'>Web Design</li>
        <li className='outline outline-gray-500 px-3 rounded-md'>App Design</li>
        <li className='outline outline-gray-500 px-3 rounded-md'>Graphic Design</li>
      </ul>
      <div className='w-full mt-14 gap-10 justify-center h-auto md:h-4/5 flex md:flex-row flex-col'>

      <ProjectsCards imgSrc1="/web1.png" imgSrc2="/web2.png" title="AirCalling Landing Page Design" category="Web design"/>
      <ProjectsCards imgSrc1="/web3.png" imgSrc2="/web4.png" title="Bussisness Landing Page Design" category="Web design"/>
      <ProjectsCards imgSrc1="/web5.png" imgSrc2="/web6.png" title="Ecom Landing Page Design" category="Web design"/>
      </div>
    </div>
  )
}

export default Projects
