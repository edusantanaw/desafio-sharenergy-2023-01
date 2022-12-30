import React from "react";
import { users } from "../../../types/randomUser";
import { Item } from "./userList.styles";

export const UserItem = ({ user }: { user: users }) => {
  return (
    <Item>
      <img src={user.picture.medium} alt="user image" />
      <div className="infos">
        <div>
          <h2>
            {user.name.first} {user.name.last}
          </h2>
        </div>
        <span>{user.email}</span>
        <span>{user.login.username}</span>
        <span>{user.registered.age}</span>
      </div>
    </Item>
  );
};
