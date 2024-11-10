import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/actions/authActions';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <button className='text-rose-500 mt-2' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
