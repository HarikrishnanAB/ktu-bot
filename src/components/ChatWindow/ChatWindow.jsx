import React from "react";
import { useSelector } from "react-redux";
import MessageBubble from "../MessageBubble/MessageBubble";
import "./ChatWindow.scss";

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatWindow;
