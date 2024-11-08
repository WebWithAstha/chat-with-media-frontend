import React, { useState, useEffect } from "react";
import { socket } from "../../../services/socketService";
import useFetchUser from "../../../hooks/useFetchUser";  // Import the custom hook
import FilePreview from "./FilePreview";
import MessageInputField from "./MessageInputField";
import FileUploader from "./FileUploader";

const MessageInput = ({ setMessages, messages, userId }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useFetchUser();  // Use the custom hook to get the user

  const handleSendMessage = () => {
    if (newMessage.trim() !== "" || selectedFiles.length > 0) {
      const media = selectedFiles.length > 0 ? selectedFiles : null;

      const messageToSend = {
        content: newMessage,
        media,
        sender: { _id: user._id },
        sendTo: [userId],
      };

      // Emit message to server
      socket.emit("send-private-msg", messageToSend);

      // Update local messages
      setMessages((prevMessages) => [...prevMessages, messageToSend]);

      // Clear input and selected files
      setNewMessage("");
      setSelectedFiles([]);
    }
  };

  const handleReceiveMessage = (msgObj) => {
    setMessages((prevMessages) => [...prevMessages, msgObj]);
  };

  useEffect(() => {
    socket.on("receive-private-msg", handleReceiveMessage);
    return () => {
      socket.off("receive-private-msg", handleReceiveMessage);
    };
  }, [setMessages]);

  if (!user) return null; // Add a loading state if the user is not yet fetched

  return (
    <div className="flex flex-col bg-zinc-700 rounded-b overflow-hidden items-center">
      <FilePreview files={selectedFiles} onRemoveFile={setSelectedFiles} />
      <div className="flex w-full items-center">
        <FileUploader setSelectedFiles={setSelectedFiles} />
        <MessageInputField
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default MessageInput;
