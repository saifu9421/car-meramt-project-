import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";


const Newnavbar = () => {
    return (
        <div>
            
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-3 shadow bg-base-100 rounded-box w-52">
      <Link className="text-sm font-serif font-semibold hover:text-orange-600" to="/order">Order</Link>
    <Link className="text-sm font-serif font-semibold hover:text-orange-600"  to="/orderReview">Order Review</Link>
    <Link className="text-sm font-serif font-semibold hover:text-orange-600"  to="/manage">Manage Inventory</Link>
    <Link  className="text-sm font-serif font-semibold hover:text-orange-600"  to="/login">Login</Link>
      </ul>
    </div>
      <Link to="/">  <img className="w-3/4" src={logo} alt="" /></Link>
  </div>
  <div className="navbar-end hidden  lg:flex">
    <ul className="menu menu-horizontal gap-12 px-1">
    <Link className="lg:text-lg md:text-lg  lg:font-serif md:font-serif  md:font-semibold  hover:text-orange-600  lg:font-semibold" to="/order">Order</Link>
    <Link className="lg:text-lg md:text-lg  lg:font-serif md:font-serif  md:font-semibold  hover:text-orange-600  lg:font-semibold" to="/orderReview">Order Review</Link>
    <Link className="lg:text-lg md:text-lg  lg:font-serif md:font-serif  md:font-semibold  hover:text-orange-600  lg:font-semibold" to="/manage">Manage Inventory</Link>
    <Link  className="lg:text-lg md:text-lg  lg:font-serif md:font-serif  md:font-semibold  hover:text-orange-600  lg:font-semibold" to="/login">Login</Link>
    <Link  className="lg:text-lg md:text-lg   lg:font-serif md:font-serif  md:font-semibold  hover:text-orange-600  lg:font-semibold" to="/music">music</Link>
    </ul>
  </div>

</div>
        </div>
    );
};

export default Newnavbar;