import styled from "@emotion/styled";

export const SectionContainer = styled.div`
  display: flex;
  margin-top: 64px;
  padding: 0 16px;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  background: url("/section.png");
`;

export const SectionTitle = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 0;
`;

export const SectionSubtitle = styled.h4`
  color: #e0e0e0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const SectionHead = styled.div`
  border-bottom: 1px solid #dedede;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const SectionTotal = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #848484;
  padding: 0 16px;
`;

export const SectionBody = styled.div`
  background: whitesmoke;
  padding: 3rem 0;
  @media screen and (min-width:1000px) {
    min-height: calc(100vh - 474px);
  }
`;

export const SectionRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media screen and (max-width:995px) {
    justify-content: center;
  }
`;
