import styled from "@emotion/styled";
import { BlogDetailFooter } from "../blog/blog.styles";
import { BlogDetailHeading } from "../blog/blog.styles";
import { BlogDetailDivider } from "../blog/blog.styles";
import { BlogDetailImage } from "../blog/blog.styles";

export const ProgramContainer = styled.div`
  width: 321px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 4px rgb(0 0 0 / 20%);
  margin: 0 16px 1rem;

  @media screen and (max-width: 1000px) {
    width: 230px;
  }

  @media screen and (max-width: 1278px) {
    width: 300px;
  }

  &:hover {
    transition: 0.2s;
    box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 15%);
  }
`;

export const ProgramCardContainer = styled(ProgramContainer)`
  margin: 0 0 1rem;

  @media screen and (max-width: 1278px) {
    width: 288px;
  }
`;

export const ProgramImage = styled.img`
  height: 155px;
  width: 100%;

  @media screen and (max-width: 1000px) {
    height: 90px;
  }
`;

export const ProgramType = styled.div`
  font-size: 14px;
  line-height: 12px;
  color: #6e707f;
  margin-bottom: ${({ mb }) => (mb ? "0px" : "0.7rem")};
  ${({ uppercase }) => uppercase && "text-transform: uppercase;font-size: 12px; margin-top:0.6rem;"}
  ${({ mt }) => mt && "margin-top:0;"}
`;

export const ProgramTitle = styled.div`
  margin-top: 6px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 9px;
  font-weight: bold;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #212633;
`;

export const ProgramBodyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  & + & {
    margin-top: 1rem;
  }
`;

export const ProgramBody = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const ProgramText = styled.div`
  font-size: 13px;
  line-height: 14px;
  color: #6e707f;
  margin-bottom: 3px;
  font-weight: 600;
  color: #1d5190;
  ${({ right }) => right && "text-align:right;"}
`;

export const ProgramContent = styled.div`
  padding: 4px 24px 12px;

  @media screen and (max-width: 1000px) {
    padding: 8px 15px;
  }
`;

export const ProgramCardContent = styled(ProgramContent)`
  padding-top: 8px;
`;

export const ProgramLocation = styled.div`
  display: flex;
  margin: 0 0 1rem 0;
  align-items: center;
  ${({ center }) => center && "justify-content: center;"}
  margin: 1rem 0;
`;

export const ProgramIcon = styled.img`
  width: 14px;
  height: 14px;
  opacity: 0.5;
  margin-right: 10px;
`;

export const ProgramDetailContainer = styled.div`
  margin-top: 64px;
  background: whitesmoke;

  @media screen and (min-width: 1000px) {
    min-height: calc(100vh - 140px);
  }
`;

export const ProgramDetailImage = styled(BlogDetailImage)``;

export const ProgramDetailLeft = styled.div`
  display: flex;
  flex-flow: column wrap;

  @media screen and (min-width: 1000px) {
    max-width: 580px;
    width: 100%;
  }
`;

export const ProgramDetailRight = styled.div`
  max-width: 360px;
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
`;

export const ProgramDetailContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 16px;
`;

export const ProgramDetailType = styled.h5`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  opacity: 0.7;
`;

export const ProgramDetailTitle = styled.h1`
  margin: 0.5rem 0 0;
`;

export const ProgramDetailNav = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;

  & > :first-child {
    margin-right: 10px;
  }
`;

export const ProgramDetailNavItem = styled.li`
  color: #828282;
  ${({ active }) => active && "border-bottom: 2px #ffc400 solid;color: black;"}
  height: 30px;
  cursor: pointer;

  &:hover {
    color: black;
    opacity: 0.85;
  }
`;

export const ProgramDetailNavContent = styled.div`
  display: ${({ active }) => (active ? "block;" : "none;")}
  color: #494949;
`;

export const ProgramDetailNavContentMap = styled.iframe`
  display: ${({ active }) => (active ? "block;" : "none;")}
  border: 1px solid #dedede;
  box-shadow: 0 20px 10px rgb(87 112 131 / 4%);
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ProgramDetailDivider = styled(BlogDetailDivider)``;

export const ProgramDetailHeading = styled(BlogDetailHeading)``;

export const ProgramDetailFooter = styled(BlogDetailFooter)``;
