

   import tiem3 from "../assets/time/3.jpg";
import Time1Card from "./Time1Card";
import Time2Card from "./Time2Card";
import Marquee from "react-fast-marquee";
import Time3Card from "./Time3Card";
 
const Time = () => {
    return (

           <div className="lg:mb-7 md:mb-7 mb-5">

     <div className="lg:text-center md:text-center text-center  mb-6">

            
            <p className="lg:text-center md:text-center text-center text-[#FF3811] font-bold font-serif lg:text-2xl text-lg md:text-2xl">Team</p>

            <p className="text-center lg:text-center lg:text-7xl text-xl md:text-6xl text-slate-950 font-serif font-semibold md:text-center">Meet Our Team</p>
            <p className="lg:text-center font-serif font-semibold text-slate-500 text-center md:text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

     </div>
            
       <div className=" lg:grid lg:gap-1 lg:grid-cols-3 md:grid-cols-3 md:gap-1 flex  ">
       <Marquee pauseOnHover="boolean" >
          <Time1Card></Time1Card>
        </Marquee>
        
         <Marquee  pauseOnHover="boolean" >  <Time2Card></Time2Card></Marquee>
      <Marquee   pauseOnHover="boolean" >  <Time3Card></Time3Card></Marquee>

   
   
       </div>


      </div>
          

    );
};

export default Time;