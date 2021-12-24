import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const StyledButton = styled.button`
  width: 22.5px;
  height: 22.5px;
  border-radius: 100%;
  border: none;
  background-color: #c0c7d6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
