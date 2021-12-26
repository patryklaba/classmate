import React from 'react';
import { StyledTitle } from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';

function AddUserForm({ handleAddUser, formValues, handleInputChange }) {
  return (
    <ContentWrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button>Save</Button>
    </ContentWrapper>
  );
}

export default AddUserForm;
