import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StudentsAverage, StudentsDetails } from './UserListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

function UserListItem({ deleteUser, user: { name, attendance = '0%', average } }) {
  return (
    <Wrapper>
      <StudentsAverage value={average}>{average}</StudentsAverage>
      <StudentsDetails>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StudentsDetails>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
}

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
