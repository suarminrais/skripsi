import styled from "@emotion/styled";

export const DataContainer = styled.div`
  display: flex;
  margin-top: 64px;
  background: whitesmoke;

  @media screen and (min-width:1000px) {
    height: calc(100vh - 134px);
  }
`;

export const DataRow = styled.div`
  display: flex;
  flex-flow: ${({ column }) => column ? 'column' : 'row'} wrap;
  background: white;
  border-radius: 8px;
  padding: 16px;
  background: white;
  margin: 20px 16px;
`;
