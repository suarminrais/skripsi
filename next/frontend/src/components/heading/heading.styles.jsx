import styled from "@emotion/styled";

export const HeadingContainer = styled.div`
  display: flex;
  padding: 3rem 0;
  background: ${({ bg }) => bg ? bg : '#f4f4f4'};
`

export const HeadingBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 14px 16px;
  ${({ center }) => center && 'justify-content: center;'}
  ${({ column }) => column && 'flex-flow: column wrap; align-items:center;'}
`

export const HeadingSection = styled.div`
  height: 25px;
  background-color: rgba(22, 128, 57, 0.04);
  border-radius: 26px;
  padding: 6px 24px;
  display: flex;
  width: fit-content;
  text-align:center;
  align-items:center;
`

export const HeadingTitle = styled.h2`
  text-align:center;
  margin:1rem 0;
`
