import React, { useState } from 'react';
import { users as userData } from 'data/users.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from 'views/AddUser';
import MainPageLayout from 'components/templates/MainPageLayout/MainPageLayout';
import Dashboard from './Dashboard';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const Root = () => {
  const [users, setUsers] = useState(userData);

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersContext.Provider
          value={{
            users,
            handleAddUser,
            deleteUser,
          }}
        >
          <Routes>
            <Route path="/" element={<MainPageLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
            </Route>
          </Routes>
        </UsersContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
