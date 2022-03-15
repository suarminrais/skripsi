import React from "react";
import { FormLabel } from "./form.styles";
import { FormSelect } from "./form.styles";
import { FormInput } from "./form.styles";
import { FormRow } from "./form.styles";
import { FormColumn } from "./form.styles";
import { FormContainer } from "./form.styles";

export const Form = ({ onSubmit, children }) => <FormContainer onSubmit={onSubmit}> {children}</FormContainer>;

export const InputLabel = ({ label, type, value, onChange, hide, full }) => {
  return (
    <FormColumn>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <FormInput value={value} full={full} hide={hide} id={label} type={type} onChange={onChange} />
    </FormColumn>
  );
};

export const SelectLabel = ({ label, value, onChange, children}) => {
  return (
    <FormColumn>
      <FormLabel htmlFor={label}>{label}</FormLabel>
        <FormSelect value={value} onChange={onChange} id={label}>
          {children}
        </FormSelect>
    </FormColumn>
  );
}

export const Radio = ({ label, value, ...props }) => {
  return (
    <FormRow>
      <input type="radio" value={value} {...props} />
      <FormLabel htmlFor={label}>{label}</FormLabel>
    </FormRow>
  );
}

