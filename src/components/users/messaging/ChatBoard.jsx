import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatWithUserAPI } from "../store/actions/chatActions";

const ChatBoard = () => {
  const {state}= useLocation()
  console.log(state)
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();
  const { chatWithUser, loading, error } = useSelector((state) => state.chatReducer);

  useEffect(() => {
    if (state.userId ) {
      dispatch(fetchChatWithUserAPI(state.userId)); // Dispatch action to fetch chat with a particular user
    }
  }, [dispatch, state.userId]);


  useEffect(() => {
    // Simulate demo messages
    setMessages([...chatWithUser]);
  }, []);



  return (
    <div className="flex flex-col items-center bg-zinc-900 justify-center h-screen">
      <div className="md:w-[30rem] w-full h-full md:h-4/5 bg-zinc-600 rounded-lg p-4 flex flex-col">
        <Header user={state.user} />
        <MessageList messages={messages} />
        <MessageInput setMessages={setMessages} messages={messages}/>
      </div>
    </div>
  );
};

export default ChatBoard;
