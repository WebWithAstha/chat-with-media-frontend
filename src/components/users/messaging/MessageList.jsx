import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble.jsx";

const MessageList = ({ messages }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 bg-zinc-800 border-t border-white/[.1] p-4 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}
      <div ref={messageEndRef} /> {/* Scroll target */}
    </div>
  );
};

export default MessageList;