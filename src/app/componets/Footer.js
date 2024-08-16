import React from "react";

function Footer() {
  return (
    <div className="h-[50vh] w-full flex  items-center flex-col justify-evenly md:my-0 my-20">
      <div className="w-fit gap-1 flex items-center h-10   ">
        <img className=" h-full" src="/Subtract.png" />
        <div className="text-3xl monserrate">Mumair</div>
      </div>
      <ul className="flex flex-col md:w-fit w-[90vw] md:flex-row  text-nowrap gap-8 m-10  items-center">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About me</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Testimonials</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex w-full justify-center items-center gap-3">
                <img src="/facebook.svg"/>
                <img src="/twitter.svg"/>
                <img src="/instagram.svg"/>
                <img src="/linkdin.svg"/>
            </div>
    </div>
  );
}

export default Footer;
