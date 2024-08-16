
function Hero() {
  return (
    <main id="home" className="md:h-[80dvh] h-auto flex flex-col md:flex-row gap-20 poppins-regular">
        <div className="md:w-1/2 flex justify-center flex-col">
            <span>Hi I am</span>
            <span className="text-[#FD6F00] font-bold">Muhammad Umair</span>
            <h1 className="text-6xl font-bold">UI & UX</h1>
            <h1 className="text-6xl font-bold text-center">Designer</h1>
            <span className=" break-words">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</span>
            <button className=" bg-[#FD6F00] text-white font-bold px-5 py-2 w-fit">Hire Me</button>
        </div>
        <div>
            <div className="relative mb-3">
                <div className="w-80 absolute h-16 top-20 right-14 md:right-20 bg-[#FD6F0099]"></div>
                <img className="h-[550px]" src="/userimage.png"/>
            </div>
            <div className="flex w-full justify-center items-center gap-3">
                <img src="/facebook.svg"/>
                <img src="/twitter.svg"/>
                <img src="/instagram.svg"/>
                <img src="/linkdin.svg"/>
            </div>
        </div>
    </main>
  )
}

export default Hero
