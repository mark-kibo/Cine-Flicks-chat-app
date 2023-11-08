import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { useAuth } from "../AuthContext";

const NavBar = () => {
 
  const {token, signout, setLoading, loading}=useAuth()
  const signOutUser=async()=>{
    setLoading(true)
      await signout()
      setLoading(false)
  }


  return (
    <nav className="nav-bar">
      <h1 className="font-bold text-2xl">CinFlicks</h1>
      {token && (
        <button onClick={signOutUser} className="sign-out" type="button">
          Sign Out
        </button>
      ) }
    </nav>
  );
};

export default NavBar;
