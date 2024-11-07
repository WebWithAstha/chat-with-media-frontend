import React, { useEffect, useRef, useState } from "react";
import { socket } from "../../../services/socketService";

const MessageInput = ({setMessages,messages}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newMessage, setNewMessage] = useState("");


  // ignore kre
  const fileInputRef = useRef(null);

  // ignore kre
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile({ name: file.name, url: URL.createObjectURL(file) });
    }
  };

  useEffect(() => {
    const handleReceiveMessage = (msgObj) => {
      setMessages((prevMessages) => [...prevMessages, msgObj]);
    };
    
    socket.on('receive-private-msg', handleReceiveMessage);
    
    // Clean up the event listener on component unmount
    return () => {
      socket.off('receive-private-msg', handleReceiveMessage);
    };
  }, []);


  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {




        // 
        socket.emit('send-private-msg',{text: newMessage ,isUser:true})


        setMessages((prevMessages) => [...prevMessages, { text: newMessage, file: selectedFile }]);
        setNewMessage("");




      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };
  

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex bg-zinc-700 rounded-b overflow-hidden items-center">
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-zinc-800/[.4] p-2 text-white"
      >
        📎
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileSelect}
      />


      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Handle "Enter" key press
        placeholder="Type a message"
        className="flex-grow p-2 outline-none bg-zinc-700 text-white"
      />

      <button onClick={handleSendMessage} className="bg-emerald-600 p-2  text-white">
        <i className="ri-send-plane-2-line"></i>
      </button>
    </div>
  );
};

export default MessageInput;
