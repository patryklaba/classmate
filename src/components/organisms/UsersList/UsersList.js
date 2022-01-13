import React from 'react';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import { StyledList } from 'components/organisms/UsersList/UsersList.styles';
import Title from 'components/atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userDetails) => (
          <UserListItem deleteUser={deleteUser} key={userDetails.name} user={userDetails} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
