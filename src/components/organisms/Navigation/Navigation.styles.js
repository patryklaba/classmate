import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  position: relative;

  &.active::before {
    opacity: 1;
  }

  &::before {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    width: 18px;
    height: 3px;
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
