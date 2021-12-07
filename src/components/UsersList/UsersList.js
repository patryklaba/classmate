import React from 'react';
import { users } from 'data/users.js';
import UserListItem from '../UserListItem/UserListItem';

function UsersList(props) {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem user={userData} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
