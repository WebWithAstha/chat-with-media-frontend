// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allChats: [],
  chatWithUser: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatWithUser(state, action) {
      state.chatWithUser = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setChatWithUser, setLoading, setError } = chatSlice.actions;

export default chatSlice.reducer;
