import React from 'react';
import { users } from 'data/users.js';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

function UsersList(props) {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} user={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
