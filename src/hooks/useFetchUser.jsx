// src/hooks/useFetchUser.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/authActions"; // Adjust the import path based on your structure

const useFetchUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.authReducer);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  return user;
};

export default useFetchUser;
