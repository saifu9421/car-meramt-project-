
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services,setServices]  =  useState([]);

    useEffect(()=>{
    fetch('/public/services.json').then(res=> res.json()).then(data=> setServices(data));
    },[]);

        return (
        <div>
            <div >

             <div className="text-center lg:mb-3 md:mb-3 mb-3 ">

                <h3 className="lg:text-3xl text-orange-700 font-bold  font-serif  md:text-3xl text-lg">
                Service
                </h3>
                <h2  className="lg:text-4xl md:text-4xl text-xl  lg:font-semibold font-semibold md:font-semibold  font-serif ">Our Service Area</h2>
                <p className="lg:text-lg md:text-lg  md:font-semibold font-semibold text-base  lg:font-semibold font-serif "> <Marquee >the majority have suffered alteration in some form, by injected humour, or randomised 
                    <br />
                 words which do not look even slightly believable. </Marquee>  </p>
             </div>
                
          

          </div> 
         
                <div 
               
                
                className="grid md:grid-cols-3 grid-cols-1 ml-2 lg:ml-0 md:ml-0  lg:grid-cols-3">
                {
                    services.map(service =>  <ServicesCard key={service._id} service={service} ></ServicesCard> )
                 }
                </div>
           
          
        </div>
    );
};

export default Services;