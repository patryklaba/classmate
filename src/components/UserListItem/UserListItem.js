import React from 'react';
import PropTypes from 'prop-types';

function UserListItem({ user: { name, attendance = '0%', average } }) {
  return (
    <div>
      <li key={name}>
        <div>{average}</div>
        <div>
          <p>{name}</p>
          <p>{attendance}</p>
        </div>
        <button>X</button>
      </li>
    </div>
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
