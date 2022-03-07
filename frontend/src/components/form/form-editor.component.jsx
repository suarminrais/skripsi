import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorContainer } from "./form.styles";

const EditorForm = ({ state, setState }) => (
  <EditorContainer>
    <Editor editorState={state} toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" onEditorStateChange={(e) => setState(e)} />
  </EditorContainer>
);

export default EditorForm;
