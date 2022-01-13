import React, { useContext } from 'react';
import { UsersContext } from './Root';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const context = useContext(UsersContext);

  return (
    <ContentWrapper>
      <UsersList users={context.users} deleteUser={context.deleteUser} />
    </ContentWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
