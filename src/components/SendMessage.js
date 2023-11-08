import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const{users}= useAuth()
  const username = jwtDecode(localStorage.getItem("token"))
  const user_id_obj = users.filter(user => user.username === username)[0]

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // const { uid, displayName, photoURL } = auth.currentUser;
    // await addDoc(collection(db, "messages"), {
    //   text: message,
    //   name: displayName,
    //   avatar: photoURL,
    //   createdAt: serverTimestamp(),
    //   uid,
    // });
    await axios.post("", {
      "message_content": message,
      "chatroom_id": 0,
      "user_id": user_id_obj.id,
    }, {
      headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
      }
    })
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
