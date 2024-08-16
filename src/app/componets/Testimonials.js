"use client"
import React from 'react'
import TestimonialCard from '../cards/TestimonialCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
function Testimonials() {
    const testimonialData=[
        {
        imgSrc:"/user1.svg",
        comment:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        name:"name",
        position:"CEO"
    },
        {
        imgSrc:"/user2.svg",
        comment:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        name:"name",
        position:"CEO"
    },
        {
        imgSrc:"/user1.svg",
        comment:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        name:"name",
        position:"CEO"
    },
        {
        imgSrc:"/user2.svg",
        comment:"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        name:"name",
        position:"CEO"
    },
]
  return (
    <div className='flex items-center flex-col mt-10'>
      <h3 className='text-3xl font-bold'>Testimonials</h3>
      <span className='md:w-1/2 w-full break-words text-center '>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</span>
      <div className=' w-full flex justify-center items-center h-40 mt-10'>
      <Slider {...settings}
        className="h-32 w-[90%]"
      >
        {testimonialData.map((testimonial,index)=>(
          <div className='' key={index}>

                <TestimonialCard  imgSrc={testimonial.imgSrc} comment={testimonial.comment} name={testimonial.name} position={testimonial.position} />
                
            </div>
            ))}
     </Slider>
      </div>
    </div>
  )
}

export default Testimonials
