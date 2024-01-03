import loginImg from "../assets/login.svg";
import swal from 'sweetalert';
import Newnavbar from "./Newnavbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {


  const {signInUser,  googleLogin} = useContext(AuthContext);
  
    const handleLogIn =  e =>{
        e.preventDefault();
       const email  =  e.target.email.value;
       const password  = e.target.password.value;
 
        if(password.length <  6){
            return swal("opps!", "password must be 6 char!", "error");
        } else{
          swal("Good job", "your signIn successfully", "success");
        }
 
       const signIn = {email,password};
       console.log(signIn);
    signInUser(email,password).then(result=>{
      const user  =  result.user;
      console.log(user);
    }).catch(error=>{
      const errorMessage = error.message;
      console.log(error);
      console.log(errorMessage);
    })
  }   
       
      const handleGoogleLogin =()=>{
          googleLogin().then(result=>{
            const user  =  result.user;
            console.log(user);
          }).catch(error=>{
            console.log(error);
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
 <form   onSubmit={handleLogIn} className="card-body border-orange-400 border-2 rounded-lg">
   <p className="lg:text-center text-center md:text-center lg:text-2xl md:text-2xl text-lg  font-serif  lg:font-serif md:font-serif font-semibold">Login</p>
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
     <button className="btn bg-[#FF3811] hover:text-slate-50 hover:bg-gradient-to-t from-orange-600 to-amber-600">Login</button>
   </div>
   <div className="lg:text-center md:text-center text-center lg:mt-3 md:mt-3 mt-3 lg:text-lg md:text-lg text-lg lg:font-bold font-bold md:font-bold md:font-serif font-serif lg:font-serif">
          <p>Have an account? <Link className="text-orange-700" to="/signUp">Sign Up</Link></p>
        </div>


       <div>
        <p className="lg:text-lg md:text-lg text-lg  font-serif  md:text-center text-center lg:text-center font-medium">or signIn with </p> <hr />
 
   <div   

    onClick={()=> handleGoogleLogin()}
   className=" lg:text-center font-bold  lg:text-xl text-lg md:text-xl  md:text-center  text-center lg:mt-2 mt-2 md:mt-2">
   <p className="btn lg:text-2xl md:text-2xl text-lg  font-serif"><span className="text-[#4285F4]">G</span><span className="text-[#DB4437]">o</span><span className="text-[#F4B400]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#0F9D58]">l</span><span className="text-[#DB4437]">e</span></p>
     </div>

  
       </div>
 </form>
</div>
</div>
</div>
   </div>
  
  </>
    );
};

export default Login;