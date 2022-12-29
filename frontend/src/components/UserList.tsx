import React from "react";
import { users } from "../services/randomUser.service";
import { Item, List } from "./userList.styles";

function UserList({ list }: { list: users[] }) {
  return (
    <List>
      {list &&
        list.map((user) => (
          <Item>
            <img src={user.picture.medium} alt="user image" />
            <h2>{user.name.first}</h2>
          </Item>
        ))}
    </List>
  );
}

export default UserList;
