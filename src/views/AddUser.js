import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { UserShape } from 'types';

function AddUser({ handleAddUser, formValues, handleInputChange }) {
  return (
    <ContentWrapper as="form" onSubmit={handleAddUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button>Save</Button>
    </ContentWrapper>
  );
}

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
