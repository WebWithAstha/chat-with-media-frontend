import React, { useState, useEffect } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "../input/MessageInput";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatWithUserAPI } from "../../../store/actions/chatActions";

const ChatBoard = () => {
  const { state } = useLocation();
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();
  const { chatWithUser } = useSelector((state) => state.chatReducer);

  useEffect(() => {
    if (state.userId) {
      dispatch(fetchChatWithUserAPI(state.userId));
    }
  }, [dispatch, state.userId]);

  useEffect(() => {
    setMessages(chatWithUser);
  }, [chatWithUser]);

  return (
    <div className="flex flex-col items-center bg-zinc-900 justify-center h-screen">
      <div className="md:w-[30rem] w-full h-full md:h-4/5 bg-zinc-600 rounded-lg p-4 flex flex-col">
        <Header user={state.user} />
        <MessageList messages={messages} />
        <MessageInput userId={state.userId} setMessages={setMessages} messages={messages} />
      </div>
    </div>
  );
};

export default ChatBoard;
