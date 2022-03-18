import styled from "@emotion/styled";

export const BlogContainer = styled.div`
  width: 321px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 4px rgb(0 0 0 / 20%);
  margin: 0 16px 16px;

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

export const BlogImage = styled.img`
  height: 155px;
  width: 100%;

  @media screen and (max-width: 1000px) {
    height: 90px;
  }
`;

export const BlogTitle = styled.div`
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

export const BlogText = styled.div`
  font-size: 13px;
  line-height: 14px;
  color: #6e707f;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #1d5190;
  ${({ right }) => right && "text-align:right;"}
`;

export const BlogContent = styled.div`
  padding: 4px 24px 12px;
  display: flex;
  flex-flow: column wrap;

  @media screen and (max-width: 1000px) {
    padding: 8px 15px;
  }
`;

export const BlogDetailContainer = styled.div`
  margin-top: 64px;
  background: whitesmoke;

  @media screen and (min-width: 1000px) {
    min-height: calc(100vh - 140px);
  }
`;

export const BlogDetailImage = styled.img`
  border-radius: 8px;
  width: calc(100% - 32px);
  height: auto;
  margin: 3rem 16px 2rem;

  @media screen and (max-width: 767px) {
    margin: 1rem 16px;
  }
`;

export const BlogDetailHeader = styled.h1`
  margin-top: 0;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BlogDetailContent = styled.div`
  max-width: 580px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BlogDetailDivider = styled.hr`
  background-color: rgba(0, 0, 0, 0);
  margin: 0 16px;
  padding: 1rem 0;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const BlogDetailHeading = styled.h2`
  padding: 0 16px;
  margin-top: 0;
`;

export const BlogDetailFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-bottom: 3rem;
`;
