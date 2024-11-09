// chatActions.js
import axios from "../../utils/axios"; // Your axios instance
import { setChatWithUser, setLoading, setError } from "../reducers/chatSlice";

// Fetch chat with a particular user
export const fetchChatWithUserAPI = (otherUserId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        const response = await axios.get(`/api/messages/${otherUserId}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        dispatch(setChatWithUser(response.data.chatMessages));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setError(error.response.data.message));
      dispatch(setLoading(false));
    }
  };
};
