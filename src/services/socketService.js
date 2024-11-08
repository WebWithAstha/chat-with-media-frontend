import { io } from "socket.io-client";

const access_token = localStorage.getItem("accessToken");

export const socket = io("http://localhost:3000", {
  auth: {
    token: access_token, // Send token as part of the auth object
  },
//   transports: ["websocket"],
});
