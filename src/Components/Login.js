import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate"
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleForm =()=>{
   const message = checkValidData(email.current.value, password.current.value);
   setErrorMessage(message);
  }

  const toggleForm =()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <div className="absolute">
        <Header></Header>
        <img
          className="object-cover opacity-85"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
        ></img>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="w-4/12 absolute p-8 bg-black m-36 mx-auto right-0 left-0 text-white rounded-md object-cover opacity-80">
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {
          (!isSignInForm) && (
            <input
            className="p-2 my-4 w-full rounded-md border-2 border-white bg-gray-950 object-cover opacity-80"
            type="text"
            ref={name}
            placeholder="Enter Your Full Name"
          ></input>
          )
        }
        <input
          className="p-2 my-4 w-full rounded-md border-2 border-white bg-gray-950 object-cover opacity-80"
          type="email"
          ref={email}
          placeholder="Enter Your Email"
        ></input>
        <input
          className="p-2 my-4 w-full rounded-md border-2 border-white  bg-gray-950 object-cover opacity-80"
          type="password"
          ref={password}
          placeholder="Enter Your Password"
        ></input>
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button className="p-2 my-6 bg-red-700 w-full rounded-md" onClick={handleForm}>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className="p-4 m-4 cursor-pointer" onClick={toggleForm}>{isSignInForm? "New to Netflix? Sign Up now !!":"Already an User? Sign In !"}</p>
      </form>
    </div>
  );
};

export default Login;
