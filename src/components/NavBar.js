import React from "react";
import { useAuth } from "../AuthContext";
import {jwtDecode} from "jwt-decode"
const NavBar = () => {
 
  const {token, signout}=useAuth()
  let username
  if(token){
    username =jwtDecode(token)
  }
  
  const signOutUser=async()=>{
    
      await signout()
    
  }


  return (
    <nav className="nav-bar">
      <h1 className="font-bold text-2xl">CinFlicks</h1>
      {token && (
        <>
        <h3>{username}</h3>
        <button onClick={signOutUser} className="sign-out" type="button">
          Sign Out
        </button>
        </>

      ) }
    </nav>
  );
};

export default NavBar;
