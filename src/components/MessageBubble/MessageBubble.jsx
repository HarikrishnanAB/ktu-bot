import React from "react";
import userLogo from "../../assets/userLogo.png";
import botLogo from "../../assets/botLogo.png";
import "./MessageBubble.scss";

const MessageBubble = ({ sender, text }) => {
  return (
    <div className={`message-bubble ${sender}`}>
      <img
        src={sender === "user" ? userLogo : botLogo}
        alt="Avatar"
        className="avatar"
      />
      <p className="message-text">{text}</p>
    </div>
  );
};

export default MessageBubble;
