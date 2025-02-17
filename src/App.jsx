// File: src/App.jsx
import React from "react";
import Header from "./components/Header/Header";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import InputArea from "./components/InputArea/InputArea";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <ChatWindow />
      <InputArea />
    </div>
  );
};

export default App;
