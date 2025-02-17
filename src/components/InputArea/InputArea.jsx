// File: src/components/InputArea/InputArea.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/chatSlice";
import "./InputArea.scss";

const InputArea = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (input.trim()) {
      dispatch(addMessage({ sender: "user", text: input }));
      // Simulate a bot reply after 1 second (optional)
      setTimeout(() => {
        dispatch(addMessage({ sender: "bot", text: "This is a bot reply." }));
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="input-area">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputArea;
