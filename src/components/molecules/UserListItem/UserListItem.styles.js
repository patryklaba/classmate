import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: start;
  position: relative;
  padding-top: 33px;

  &:not(:last-child) {
    padding-bottom: 24px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: lightgrey;
    }
  }
`;

export const StudentsAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.success};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, value }) => {
    if (value >= 4) return theme.colors.success;
    if (value >= 3) return theme.colors.warning;
    if (value >= 2) return theme.colors.error;
  }};
`;

export const StudentsDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 12px;

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 112%;
    letter-spacing: -0.02em;

    &:first-child {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;
