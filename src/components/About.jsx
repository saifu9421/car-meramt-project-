
import aboutimg from "../assets/person.jpg"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const About = () => {


   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);


    return (
          
      <>
          <div 
        
          
           className="lg:mt-10 md:mt-10 lg:mb-10 md:mb-10 mb-10 mt-10">
          
          <div className="lg:flex md:flex  gap-10 lg:gap-0 md:gap-10 justify-around">
   
          <div   data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="3000"
        
        >
       <img className="lg:w-9/12 md:w-80 w-50   rounded-lg" src={aboutimg} alt="" />
     </div>
   
       <div 
         data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-duration="3000"
        
        className="mt-6">
             <p className="text-[#FF3811] lg:text-lg md:text-lg text-sm lg:font-extrabold md:font-semibold font-semibold  font-sans lg:font-serif md:font-serif ">About Us</p>
             <p className="text-black lg:font-bold  lg:font-sans md:font-serif   font-serif font-bold md:font-bold  lg:text-2xl md:text-2xl text-lg">We are qualified <br />& of experience <br /> in this field</p>
             <p className="font-serif mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p> <br />
             <p className="mb-4 font-serif" >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
             <button  
             
             data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000" 
              className="btn btn-outline btn-error">Get More Info</button>
       </div>
   
          </div>
      
           </div>
        </>
    );
};

export default About;