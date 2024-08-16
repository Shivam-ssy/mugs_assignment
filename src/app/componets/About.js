
function About() {
  return (
    <main id="about" className="h-auto md:h-[90vh] relative flex md:flex-row flex-col-reverse py-10">
      <div className="relative">
      <div className="w-80 absolute h-16 top-40 md:top-20  md:right-14 md:left-28 bg-[#FD6F0099]"></div>
        <img className="h-[550px]" src="/user-mask.svg"/>
      </div>
      <div className="md:w-1/2 w-full justify-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold">About Me</h2>
        <span className=" break-words">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</span>
        <div>
          <label className="font-bold" htmlFor="ux">UX</label>
          <meter id="ux" className="w-full" value="95" max="100"></meter>      
        </div>
        <div>
          <label className="font-bold" htmlFor="website">Website Design</label>
          <meter id="website" className="w-full" value="90" max="100"></meter>      
        </div>
        <div>
          <label className="font-bold" htmlFor="app">App Design</label>
          <meter id="app" className="w-full" value="98" max="100"></meter>      
        </div>
        <div>
          <label className="font-bold" htmlFor="graphic">Graphic Design</label>
          <meter id="graphic" className="w-full" value="95" max="100"></meter>      
        </div>
        </div>
    </main>
  )
}

export default About
