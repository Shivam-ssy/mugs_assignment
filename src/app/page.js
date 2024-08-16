import Image from "next/image";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Services from "./componets/Services";
import Projects from "./componets/Projects";
import Testimonials from "./componets/Testimonials";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
export default function Home() {
 
  return (
    <div className="h-auto">
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
