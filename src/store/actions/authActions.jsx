import axios from '../../utils/axios';
import { setTokens, setUser, logout } from '../reducers/authSlice';

// Action for logging in
export const loginUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', formData);
    const { accessToken, refreshToken, user } = response.data;

    // Dispatch tokens and user to Redux
    dispatch(setTokens({ accessToken, refreshToken }));
    dispatch(setUser(user));

    console.log('Logged in successfully');
  } catch (error) {
    console.error(error);
    // Handle error if necessary
  }
};

// Action for signing up
export const signupUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/signup', formData);
    const { accessToken, refreshToken, user } = response.data;

    // Dispatch tokens and user to Redux
    dispatch(setTokens({ accessToken, refreshToken }));
    dispatch(setUser(user));

    console.log('Registered successfully');
  } catch (error) {
    console.error(error);
    // Handle error if necessary
  }
};

// Action for logging out
export const logoutUser = () => (dispatch) => {
  // Dispatch logout to remove tokens and user from Redux
  dispatch(logout());
  console.log('Logged out successfully');
};

// Action for setting user (fetch user data after login)
export const fetchUser = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // Optionally, you can make an API call to fetch the logged-in user's details if needed
      const response = await axios.get('/api/auth/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const user = response.data;
      dispatch(setUser(user));
      console.log(user)
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};
