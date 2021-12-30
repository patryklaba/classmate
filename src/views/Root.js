import React, { useState } from 'react';
import { users as userData } from 'data/users.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from 'views/AddUser';
import MainPageLayout from 'components/templates/MainPageLayout/MainPageLayout';
import Dashboard from './Dashboard';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(userData);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPageLayout />}>
            <Route index element={<Dashboard users={users} deleteUser={deleteUser} />} />
            <Route
              path="/add-user"
              element={<AddUser formValues={formValues} handleInputChange={handleInputChange} handleAddUser={handleAddUser} />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
