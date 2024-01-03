
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext =  createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  
    const [user,setUser]  =  useState(null);
    const [loading,setLoading]  =  useState(true);


       const createUser =  (email,Password) =>{
        setLoading(true);
           return createUserWithEmailAndPassword(auth,email,Password);
       };


    const signInUser =  (email,password)=>{
        setLoading(true);
          return signInWithEmailAndPassword(auth,email,password);
    };


    const googleLogin  = ()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    };

    const logOut = ()=>{
        return signOut(auth);
    };
     
       useState(()=>{
         onAuthStateChanged(auth , curentUser=>{
               setUser(curentUser);
               setLoading(false);
          });
       },[]);

 
  console.log(user);

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;