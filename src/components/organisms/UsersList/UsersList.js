import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import { Wrapper, StyledList, StyledTitle } from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);
  const [isLoading, setLoadingState] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

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

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setUsers(data);
        setLoadingState(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button>Save</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Users list:'}</StyledTitle>
        <StyledList>
          {users.map((userDetails) => (
            <UserListItem deleteUser={deleteUser} key={userDetails.name} user={userDetails} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
