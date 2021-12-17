import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import { Wrapper, StyledList } from 'components/organisms/UsersList/UsersList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setUsers(data);
        setLoadingState(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users list:'}</h1>
      <StyledList>
        {users.map((userDetails) => (
          <UserListItem deleteUser={deleteUser} key={userDetails.name} user={userDetails} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
