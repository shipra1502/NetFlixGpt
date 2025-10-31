import React, { use } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black flex justify-between items-center flex-row flex">
      <img
        className="w-44"
        src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex">
          <img src={user?.photoURL} alt="User Icon" className="w-10 h-10" />
          <button onClick={handleSignOut} className="font-bold text-white">
            {" "}
            (Sign Out){" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
