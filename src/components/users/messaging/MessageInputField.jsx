import React from "react";

const MessageInputField = ({ newMessage, setNewMessage, handleSendMessage }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
        className="flex-grow p-2 outline-none bg-zinc-700 text-white"
      />
      <button onClick={handleSendMessage} className="bg-emerald-600 p-2 text-white">
        <i className="ri-send-plane-2-line"></i>
      </button>
    </>
  );
};

export default MessageInputField;
