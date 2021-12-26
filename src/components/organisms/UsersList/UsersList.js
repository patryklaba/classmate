import React, { useState, useEffect } from 'react';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import { StyledList, StyledTitle } from 'components/organisms/UsersList/UsersList.styles';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <ContentWrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userDetails) => (
            <UserListItem deleteUser={deleteUser} key={userDetails.name} user={userDetails} />
          ))}
        </StyledList>
      </ContentWrapper>
    </>
  );
};

export default UsersList;
