import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import { Wrapper, StyledList, StyledTitle } from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

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
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name"></FormField>
        <FormField label="Attendance" id="attendance" name="attendance"></FormField>
        <FormField label="Average" id="average" name="average"></FormField>
        <Button>Save</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Users list:'}</StyledTitle>
        <StyledList>
          {users.map((userDetails) => (
            <UserListItem deleteUser={deleteUser} key={userDetails.name} user={userDetails} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
