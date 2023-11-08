
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { useState } from "react";
import "./App.css"
import { useAuth } from "./AuthContext";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


function App() {
  const {user, setUser} = useAuth()

  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route element={<PrivateRoute/>}>
          
            <Route path="/" element={<ChatBox/>}/>
          
      </Route>
      <Route path="/welcome" element={<Welcome/>}/>
    </Routes>

    </div>
  );
}

export default App;
