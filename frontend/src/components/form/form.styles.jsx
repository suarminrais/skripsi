import styled from "@emotion/styled";
import { Input } from "../card/card.styles";

export const FormContainer = styled.form`
  & > :last-child {
    margin-bottom: 1rem;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-flow: column wrap;

  & > input {
    margin: 0;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap:16px;
  align-items: center;
  margin-bottom: 0.4rem;
  margin-top: ${({ mt }) => mt ? mt : ' -0.5rem'};
`;

export const FormLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #25282b;
  margin-bottom: 4px;
  margin-top: 10px;
`;

export const EditorContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  background: #fff;
  margin-top: 10px;
  display: flex;
  max-width: 560px;

  & .rdw-editor-main {
    padding: 0 10px;
    overflow: unset;
  }
`;

export const FormInput = styled(Input)`
  ${({ full }) => !full && ` width: calc(100% - 35px);
  @media screen and (max-width: 767px) {
    width: calc(100% - 35px);
  }`}
  ${({ hide }) => hide && "display: none;"}
`;
