 import loginImg from "../assets/login.svg";
 import swal from 'sweetalert';
import Newnavbar from "./Newnavbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const SignUp = () => {
        
    
   const {createUser} =  useContext(AuthContext);



 const handleSignIn =  e =>{
       e.preventDefault();
       const name  =   e.target.name.value;
      const email  =  e.target.email.value;
      const password  = e.target.password.value;

       if(password.length <  6){
           return swal("opps!", "password must be 6 char!", "error");
       } else{
         swal("Good job", "your signIn successfully", "success");
       }

      const signIn = {name,email,password};
        console.log(signIn);

   createUser(email,password).then(result=>{
        const user  =  result.user;
        console.log(user);
   }).catch(error=>{
    console.log(error);
    const errorMessage = error.message;
    console.log(errorMessage);
   })
 } 

    return (
        

       <> 

             <Newnavbar></Newnavbar>
    
       <div className="lg:mb-4 md:mb-4 mb-4  lg:mt-4 md:mt-4 mt-4">
              <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row md:flex-row ">
    <div className="">
         <img  className="lg:w-3/4 md:w-3/4 w-1/2" src={loginImg} alt="" />
    </div>
    <div className="card shrink-0 w-full lg:max-w-sm md:max-w-sm max-w-2xl shadow-2xl bg-base-100">
      <form   onSubmit={handleSignIn} className="card-body border-orange-400 border-2 rounded-lg">
        <p className="lg:text-center text-center md:text-center lg:text-2xl md:text-2xl text-lg  font-serif  lg:font-serif md:font-serif font-semibold">Sign Up</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className=" input-warning  lg:border-2 md:border-2 border-2 border-orange-400 lg:p-3 md:p-3 p-2  lg:rounded-lg md:rounded-lg rounded-lg hover:bg-gradient-to-t from-orange-500  to-orange-400 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input-warning lg:p-3 md:p-3 p-3 lg:border-2 md:border-2 border-2 border-orange-400  lg:rounded-lg md:rounded-lg rounded-lg hover:bg-gradient-to-t from-orange-500  to-orange-400" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input-warning lg:p-3 md:p-3 p-3  lg:border-2 md:border-2 border-2 border-orange-400  lg:rounded-lg md:rounded-lg rounded-lg hover:bg-gradient-to-t from-orange-500  to-orange-400" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] hover:text-slate-50 hover:bg-gradient-to-t from-orange-600 to-amber-600">SignUp</button>
        </div>
        <div className="lg:text-center md:text-center text-center lg:mt-3 md:mt-3 mt-3 lg:text-lg md:text-lg text-lg lg:font-bold font-bold md:font-bold md:font-serif font-serif lg:font-serif">
          <p>Already have an account? <Link className="text-orange-700" to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
       
       </>
    );
};

export default SignUp;