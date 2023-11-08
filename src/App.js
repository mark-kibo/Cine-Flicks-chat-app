
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


function App() {


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
