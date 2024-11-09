// src/hooks/useFetchUser.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/authActions"; // Adjust the import path based on your structure
import { useNavigate } from "react-router-dom";

const useFetchUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user } = useSelector((store) => store.authReducer);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(navigate));
    }
  }, [dispatch, user]);

  return user;
};

export default useFetchUser;
