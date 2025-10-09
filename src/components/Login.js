import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setsignInForm] = useState(true);
  const toggleSignInForm = () => {
    setsignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/25f808aa-cecb-4753-8541-9a79f40c18ae/web/AE-en-20251006-TRIFECTA-perspective_7264094a-f4b4-4b0a-8484-acaec98722c7_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="absolute p-12 bg-black/80 w-3/12 my-36 mx-auto left-0 right-0 text-white">
        <h1 className="font-bold text-3xl pb-8 px-2">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full rounded-sm text-white bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 m-2 w-full rounded-sm text-white bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full rounded-sm bg-gray-700"
        />
        <button className="py-2 m-2 bg-red-700 w-full rounded-md">
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <h2 className="font-bold text-xl text-center py-2">OR</h2> */}
        {/* <button className="py-2 m-2 bg-white/30 w-full font-bold rounded-sm">
          Use a Sign-In-Code
        </button>
        
        <input type="checkbox" />
        <label className="px-2">Remember Me</label> */}
        <h2 className="py-2 mx-2 cursor-pointer" onClick={toggleSignInForm}>
          <span className="text-gray-300 ">New To Netflix?</span>{" "}
          <span className="font-bold">
            {" "}
            {signInForm ? "Sign Up Now" : "Already Registerd? Sign In Now"}
          </span>
        </h2>
      </form>
    </div>
  );
};

export default Login;
