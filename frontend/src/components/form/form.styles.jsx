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

export const FormSelect = styled.select`
  width: calc(100% - 35px);
  @media screen and (max-width: 767px) {
    width: calc(100% - 35px);
  }
  display: block;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  appearance: none;
`;
