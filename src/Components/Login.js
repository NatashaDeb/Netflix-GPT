import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn =()=>{ //If This function is Called Basically It should change to a Sign up form
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <div  className="absolute">
        <Header></Header>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
        ></img>
        Login
      </div>

      <form className="absolute p-10 bg-black w-3/12  my-36 mx-auto right-0 left-0 text-slate-50 align-center bg-opacity-75 rounded-md">
      <h1 className="font-bold text-3xl mb-6 p-2">{isSignIn? "Sign In": "Sign Up"}</h1>
      {!isSignIn &&  
      <input
          type="text"
          placeholder="Full Name"
          className="p-4 m-4 w-60 bg-gray-800 rounded-lg"
        ></input>
      }
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-60 bg-gray-800 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-60 bg-gray-800 rounded-lg"
        ></input>
        <button className="p-4 m-4 bg-red-700 w-60 rounded-lg">{isSignIn? "Sign In": "Sign Up"}</button>
       <pre> <p className="py-2 cursor-pointer" onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign Up Now": "Already Registered? Sign In"}</p></pre>
      </form>
    </div>
  );
};

export default Login;
