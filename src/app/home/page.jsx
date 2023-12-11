"use client";
import React, { useState } from "react";
import styles from "./Chatbot.module.css";

const page = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
    // Add logic here to handle the bot's response
  };

  return (
    <div>
      <div className={styles.chatbotContainer}>
        <div className={styles.chatbotHeader}>Chatbot</div>
        <div className={styles.chatbotMessages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[message.sender]}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className={styles.chatbotInput}>
          <input
            type='text'
            placeholder='Type your message...'
            value={newMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default page;
