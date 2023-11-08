import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import axios from "axios";
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {


    const unsubscribe = async() => {
    
      const response = await axios.get("", {
        headers:{
          Authorization:"Bearer " + localStorage.getItem("token")
        }
      })
      const sortedMessages = response.data.sort(
        (a, b) =>  a.created_at - b.created_at
      );
      
      setMessages(sortedMessages);
      }
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
