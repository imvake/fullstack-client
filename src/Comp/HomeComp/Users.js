import React from "react";
import { useSelector } from "react-redux";

function Users() {
  let profilepic = useSelector((state) => state.user.users.pic);
  let name = useSelector((state) => state.user.users.uname);

  const defpic =
    "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";
  return (
    <>
      <div className="center">
        {profilepic ? (
          <img className="profilepic" src={profilepic} />
        ) : (
          <img className="profilepic" src={defpic} />
        )}
        <h4>{name}</h4>
      </div>
    </>
  );
}

export default Users;
