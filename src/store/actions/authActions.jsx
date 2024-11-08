import axios from '../../utils/axios';
import { setTokens, setUser, logout } from '../reducers/authSlice';

// Action for logging in
export const loginUser = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/login', formData);
    const { accessToken, refreshToken, user } = data;
    dispatch(setTokens({ accessToken, refreshToken }));
    dispatch(setUser(user));
  } catch (error) {
    console.error(error);
  }
};

// Action for signing up
export const signupUser = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/signup', formData);
    const { accessToken, refreshToken, user } = data;
    dispatch(setTokens({ accessToken, refreshToken }));
    dispatch(setUser(user));
  } catch (error) {
    console.error(error);
  }
};

// Action for logging out
export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

// Action for fetching user data after login
export const fetchUser = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const { data } = await axios.get('/api/auth/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      dispatch(setUser(data));
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};
