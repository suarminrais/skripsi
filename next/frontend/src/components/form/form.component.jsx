import React from "react";
import { FormLabel } from "./form.styles";
import { FormInput } from "./form.styles";
import { FormColumn } from "./form.styles";
import { FormContainer } from "./form.styles";

export const Form = ({ onSubmit, children }) => <FormContainer onSubmit={onSubmit}> {children}</FormContainer>;

export const InputLabel = ({ label, type, onChange, hide }) => {
  return (
    <FormColumn>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <FormInput hide={hide} id={label} type={type} onChange={onChange} />
    </FormColumn>
  );
};

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorContainer } from "./form.styles";

export const EditorForm = ({ state, setState }) => (
  <EditorContainer>
    <Editor editorState={state} toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" onEditorStateChange={(e) => setState(e)} />
  </EditorContainer>
);
