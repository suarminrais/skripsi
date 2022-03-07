import React from "react";
import { FormLabel } from "./form.styles";
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

export const Checkbox = ({ label, value, ...props }) => {
  return (
    <FormRow>
      <input type="checkbox" value={value} {...props} />
      <FormLabel htmlFor={label}>{label}</FormLabel>
    </FormRow>
  );
}

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorContainer } from "./form.styles";

export const EditorForm = ({ state, setState }) => (
  <EditorContainer>
    <Editor editorState={state} toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" onEditorStateChange={(e) => setState(e)} />
  </EditorContainer>
);
