import React,{useState} from "react";
import { Button,Modal} from 'flowbite-react';
import Login from "./Login";
import { useAuth } from "../AuthContext";
import Register from "./Register";

const Welcome = () => {
  const [openModal, setOpenModal] = useState(false);
  const {signinClicked} = useAuth()
  

  function onCloseModal() {
    setOpenModal(false);
    
  }

  

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <h2 className="font-bold text-lg p-2">Welcome to CinFlicks chat</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p className="mt-2">Sign in to chat with with your fellow React Developers.</p>
      <div className="mt-4">
      <Button onClick={() => setOpenModal(true)}>Sign In</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
         {
          signinClicked ? (
              <Register/>
          ) :(
              <Login/>
          )
         }
         
        </Modal.Body>
      </Modal>

      </div>
    </main>
  );
};

export default Welcome;
