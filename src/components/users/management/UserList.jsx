// src/components/UserList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./management/UserCard";
import { fetchUsers } from "../../store/actions/usersActions";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    users.length > 0 && (
      <div className="bg-zinc-900 w-full min-h-[50vh] p-4">
        <h2 className="text-2xl text-primary font-bold mb-4">Users</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Link to={"/chat"} state={{ user: user.username,userId:user._id }}>
              <UserCard key={user._id} user={user}/>
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default UserList;
