import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <ContentWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ContentWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
