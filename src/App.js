import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallex/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import ParticlesComponent from "./components/particle/particle"





// import Test from "./Test"



function App() {
  return (

    <div className="maindiv">
    

      <Cursor />
      <section id="Homepage " className="">
     
     
        <Navbar />
        <div className="z-10">
       <Hero />
       </div>
        <div className="bg-black w-full h-full opacity-40 z-0"></div>
        
       
        
        <div className="absolute inset-0 -z-10 ">
        <ParticlesComponent/>
      </div>
     
       
        
      </section>
    

     <section id="parallax1">
        <Parallax type="services" />
        
      </section> 

       <section >
        <Services />
      </section>

      <section id="Parallax">
        <Parallax type="portfolio"/>
      </section>
      
     <Portfolio />
     
       <section id="Calling" className="h-full bg-[#0F0F29]">
        <Contact/>
      </section>

     



    </div>



  );
}

export default App;
