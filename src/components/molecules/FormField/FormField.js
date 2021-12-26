import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ value, onChange, label, id, name, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label forHtml={id}>{label}</Label>
      <Input id={id} name={name} type={type} value={value} onChange={onChange}></Input>
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
