import styled from "@emotion/styled";
import { ProgramDetailDivider } from "../program/program.styles";
import InvestationCard from "./investation-card.component";

export const InvestationContainer = styled.div`
  margin-top: 64px;
  background: whitesmoke;

  @media screen and (min-width: 1000px) {
    min-height: calc(100vh - 140px);
  }
`;

export const InvestationBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  padding: 3rem 16px;

  @media screen and (max-width: 1000px) {
    padding: 1rem 16px;
  }
`;

export const InvestationColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: auto;
`;

export const InvestationHeading = styled.h1`
  margin-top: 0;
`;

export const InvestationCardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 20px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  margin: 1rem 0;

  & + & {
    margin-top: 0;
  }
`;

export const InvestationCardRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  ${({ nogap }) => nogap && "gap:0;align-items: baseline;"}

  & + & {
    margin-top: 1rem;
  }
`;

export const InvestationCardImage = styled.img`
  border-radius: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 164px;
  }
`;

export const InvestationCardColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: auto;
  ${({ evenly }) => evenly && "justify-content: space-evenly; & div {margin:0;}"}
`;

export const InvestationCardDivider = styled(ProgramDetailDivider)`
  margin: 1rem 0;
  padding: 0;
`;

export const InvestationCardInputContainer = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px dashed #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f6f8;
  padding: 12px;
  border-radius: 8px;

  @media screen and (min-width: 1000px) {
    max-width: 180px;
    width: 100%;
  }

  & div {
    margin: 0;
  }
`;

export const InvestationCardInputHide = styled.input`
  position: absolute;
  font-size: 50px;
  opacity: 0;
  right: 0;
  top: 0;
`;

export const InvestationCardPreviewImage = styled.img`
  width: fit-content;
  height: 120px;
  margin-bottom: 1rem;
`;
