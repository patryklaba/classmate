import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const FormField = ({ label, id, name, type = 'text', ...props }) => {
  return (
    <>
      <Label forHtml={id}>{label}</Label>
      <Input id={id} name={name} type={type}></Input>
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
