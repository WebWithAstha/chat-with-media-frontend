import React from "react";

const MessageBubble = ({ message }) => (
  <div className={`mb-2 w-max max-w-[80%] md:max-w-[60%] ${message.isUser ? "text-right ml-auto" : "text-left"}`}>
    <div className={`flex flex-col items-end ${
              message.isUser ? "bg-emerald-600" : "bg-zinc-700"
            } rounded-lg overflow-hidden`}>
      {/* Display text or file preview */}
      {message.file ? (
        <div className="text-white py-1 px-4 flex items-center gap-1">
          <i class="ri-file-3-fill text-xl"></i>
            {message.file.name}
        </div>
      ) : (
        <span
          className={`inline-block text-white py-1 px-4`}
        >
          {message.text}
        </span>
      )}

      {/* Timestamp and ticks */}
      <div className="text-gray-400 bg-black/[.1] px-2 py-0.5 text-right w-full text-xs flex justify-end items-center gap-1">
        <span>{message.timestamp ? message.timestamp : '2:00pm'}</span>
        {message.isUser && (
          <i className={`
            ${message.isDelivered ? "ri-check-double-line" : "ri-check-line"}`}>
          </i>
        )}
      </div>
    </div>
  </div>
);

export default MessageBubble;
