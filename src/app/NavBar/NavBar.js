import Image from "next/image"
export default function NavBar(){

    return(
        <>
            <div className=" w-full flex items-center bg-white  h-[67px]">
                <div className="w-full gap-1 flex items-center h-full">
                    <img className=" h-3/5" src="/Subtract.png"/>
                    <div className="text-3xl monserrate">Mumair</div>
                </div>
                <input className="hidden" id="close" type="checkbox"/>
                <div id="nav-part" className="md:w-full nav-part-2  z-20 duration-150 transition-all ease-out relative top-[46vh] right-[30%] md:top-0 md:right-0 bg-white h-screen md:h-full">
                    <ul className="flex flex-col md:w-full w-[90vw] md:flex-row relative top-5 text-nowrap gap-8 h-full items-center">
                        <li className="cursor-pointer self-start"><label className="cursor-pointer" htmlFor="close"><img className="h-10" src="/close-fill.svg" alt="close button"/></label></li>
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About me</li>
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer">Projects</li>
                        <li className="cursor-pointer">Testimonials</li>
                        <li className="cursor-pointer">Contact</li>
                        <li className=" cursor-pointer bg-[#FD6F00]  flex items-center px-5  rounded-xl">Download CV</li>
                    </ul>
                </div>
                <label htmlFor="close" className={`cursor-pointer md:hidden`}><img className="h-10"  src="/menu-fill.svg"/></label>
            </div>            
        </>
    )
}