import React, { useContext, useState } from 'react';
import Title from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { UsersContext } from './Root';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

function AddUser() {
  const context = useContext(UsersContext);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    context.handleAddUser(formValues);

    setFormValues(initialFormState);
  };

  return (
    <ContentWrapper as="form" onSubmit={handleFormSubmit}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button>Save</Button>
    </ContentWrapper>
  );
}

export default AddUser;
