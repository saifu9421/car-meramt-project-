/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Navbar = () => {
  const {logOut,user, } =  useContext(AuthContext);

       const handleLogout = ()=>{
          logOut().then(()=>{
                       
          }).catch(error=>{
            console.log(error);
          })
       }
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 gap-4 rounded-box w-52">
         
      <Link className="hover:text-orange-500" to="/">Home</Link>
        <Link className="hover:text-orange-500" to="/about">About</Link>
        <Link   className="hover:text-orange-500" to="/services">Services</Link>
        <Link  to="/order" className="hover:text-orange-500">Order</Link>
        <Link   className="hover:text-orange-500" >Contact</Link>

      </ul>

    </div>

  

  
      <div>
      <Link to="/"><img className="w-3/4" src={logo} alt="" /></Link>
      </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-6 text-lg font-serif font-semibold menu-horizontal px-1">

       <Link className=" lg:hover:text-orange-600 md:hover:text-orange-500 " to="/">Home</Link>
        <Link className="lg:hover:text-orange-600 md:hover:text-orange-500 " to="/about">About</Link>
        <Link className="lg:hover:text-orange-600 md:hover:text-orange-500" to="/services">Services</Link>
        <Link to="/order" className="lg:hover:text-orange-600 md:hover:text-orange-500 ">Order</Link>
        <Link className="lg:hover:text-orange-600  md:hover:text-orange-500 ">Contact</Link>
       
    </ul>
  </div>
  <div className="navbar-end">

        
   {
      user ? <div>
         <Button onClick={()=> handleLogout()}  variant="text"color="error">Logout</Button>
         {/* <img src={photoURL} alt="" /> */}
      </div>:<Link  to="/signUp"   className=" text-center  font-serif md:font-serif lg:font-serif lg:p-2 p-2 md:p-2  lg:rounded-lg rounded-lg md:rounded-lg  hover:bg-gradient-to-t from-orange-300 to-orange-500  hover:text-lg  hover:text-red-100 font-bold  border-[#FF3811]">
             
             Sign Up 
             
             </Link> 
   }
          
     
  </div>
</div>
        </div>
    );
};

export default Navbar;

{/* <Link  to="/signUp"   className=" text-center  font-serif md:font-serif lg:font-serif lg:p-2 p-2 md:p-2  lg:rounded-lg rounded-lg md:rounded-lg  hover:bg-gradient-to-t from-orange-300 to-orange-500  hover:text-lg  hover:text-red-100 font-bold  border-[#FF3811]">
             
Sign Up 

</Link> */}