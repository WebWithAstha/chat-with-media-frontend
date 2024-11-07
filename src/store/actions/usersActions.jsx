// src/features/users/userActions.js
import axios from '../../utils/axios';
import { setUsers, setError, setLoading } from '../reducers/usersSlice';

export const fetchUsers = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      console.log("response")
    const response = await axios.get('/api/auth/all-users', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    dispatch(setUsers(response.data));
} 
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
