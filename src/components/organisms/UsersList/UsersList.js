import React, { useState, useEffect } from 'react';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import { Wrapper, StyledList, StyledTitle } from 'components/organisms/UsersList/UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
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
