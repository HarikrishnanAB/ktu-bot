
 // File: src/components/ChatWindow/ChatWindow.jsx
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MessageBubble from "../MessageBubble/MessageBubble";
import "./ChatWindow.scss";

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Always scroll to the bottom whenever messages change
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;