import React from "react";
import MediaItem from "./MediaItem"; 
import useFetchUser from "../../../hooks/useFetchUser";

const MessageBubble = ({ message }) => {
  const user = useFetchUser(); 
  const isLoggedUser = user && user._id === message.sender._id;

  const renderMedia = () => {
    return message.media.map((mediaItem, index) => (
      <div key={index} className="">
        <MediaItem media={mediaItem} />
      </div>
    ));
  };

  return (
    <div className={`mb-2 w-max max-w-[80%] md:max-w-[60%] ${isLoggedUser ? "text-right ml-auto" : "text-left"}`}>
      <div className={`flex flex-col items-end ${isLoggedUser ? "bg-emerald-600" : "bg-zinc-700"} rounded-lg overflow-hidden`}>

        {/* Display media items */}
        {message.media && message.media.length > 0 && (
          <div className="text-white py-1 px-4 mt-2 flex flex-col gap-1">
            {renderMedia()}
          </div>
        )}
        
        {/* Display text content */}
        {message.content && <span className="inline-block text-white py-1 px-4">{message.content}</span>}

        {/* Timestamp and ticks */}
        <div className="text-gray-400 bg-black/[.1] px-2 py-0.5 text-right w-full text-xs flex justify-end items-center gap-1">
          <span>{message.timestamp || "2:00pm"}</span>
          {isLoggedUser && (
            <i className={`ri-check${message.isDelivered ? "-double-line" : "-line"}`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
