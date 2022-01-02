import React from 'react';
import styled from 'styled-components';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      {/* <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink> */}
    </Wrapper>
  );
};

export default Navigation;
