import { useEffect, useState } from "react";
import BrowserProductCard from "./BrowserProductCard";
 


const BrowserProduct = () => {
    const [products ,setProduct] =  useState([]);

     useEffect(()=>{
        fetch("../../public/browesProduct.json").then(res=> res.json()).then(data=> setProduct(data));
     },[]);


    return (
        <div>
           <div className="lg:text-center md:text-center  lg:mt-5 lg:mb-5 md:mb-5 md:mt-5 mt-5 mb-5">
            <p className="text-lg font-bold font-serif text-center  text-[#FF3811]">Popular Products</p>
            <p className="text-[#151515] lg:text-3xl md:text-3xl  text-center font-serif font-bold">Browse Our Products</p>
            <p className="text-lg  font-serif text-center text-slate-950">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not  look even slightly believable. </p>
           </div>
           <div className="grid lg:mb-10 md:mb-10 mb-10  lg:grid-cols-3 grid-cols-1 md:grid-cols-3 ml-2 lg:ml-0 md:ml-0 lg:gap-5 md:gap-5 gap-4">
            {
            products.map(product=> <BrowserProductCard key={product.id} product={product}>
            
            </BrowserProductCard>)
            } 


           </div>
        </div>
    );
};

export default BrowserProduct;