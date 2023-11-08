import React from "react";
import { useAuth } from "../AuthContext";


const Message = ({ message }) => {
  const [user] = useAuth()
  return (
    <div
      className={`chat-bubble ${message.user_id === user.uid ? "right" : ""}`}>
     
      <div className="chat-bubble__right">
        <p className="user-message">{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
