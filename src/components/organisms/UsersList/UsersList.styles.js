import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 30px 42px;
  margin: 25px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
