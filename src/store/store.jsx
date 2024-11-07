import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './reducers/authSlice'
import usersSlice  from './reducers/usersSlice'
import chatSlice  from './reducers/chatSlice'

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    usersReducer: usersSlice,
    chatReducer:chatSlice
  },
})