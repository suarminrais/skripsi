import styled from "@emotion/styled";

export const CardContainer = styled.div`
  padding: 66px 16px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px);
  background: whitesmoke;

  @media screen and (max-width: 767px) {
    align-items: unset;
    margin-top: 1rem;
  }
`;

export const CardBody = styled.div`
  border-radius: 8px;
  padding: 1rem;
  background: white;
  margin: 0 auto;
  width: max-content;
`;

export const CardHead = styled.h1`
  margin: 0 0 1rem;
`;

export const CardRow = styled.div`
  display: flex;
`;

export const CardSubtile = styled.h4`
  margin: 0;
  opacity: 0.7;
  font-weight: 300;
`;

export const CardLink = styled.h4`
  font-weight: 300;
  margin: 0 0 0 8px;
  opacity: 0.7;
  color: #ffc400;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 448px;
  font-size: 14px;
  border: 1px solid #d0d0cf;
  padding: 12px 16px;
  background-color: #fff;
  border-radius: 8px;
  color: #363636;
  box-shadow: inset 0 0.0625em 0.125em rgb(0 0 0 / 5%);
  margin: 1rem 0;

  & + & {
    margin-top: 0;
  }

  @media screen and (max-width: 767px) {
    width: 86%;
  }
`;

export const CardColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const CardInvestationContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  height: fit-content;

  @media screen and (min-width: 500px) {
    max-width: 345px;
  }
`;

export const CardInvestationHead = styled.div`
  display: flex;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  align-items: center;
`;

export const CardInvestationHeadText = styled.h5`
  margin-top: 0;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  text-transform: capitalize;
  color: #00261c;
  margin-bottom: 0.5rem;
`;

export const CardInvestationText = styled(CardInvestationHeadText)`
  font-weight: ${({ bold }) => (bold ? "500" : "400")};
  font-size: ${({ bold }) => (bold ? "16px" : "14px")};
  line-height: ${({ bold }) => (bold ? "19px" : "16px")};
  color: ${({ bold }) => (bold ? "black" : "#848484")};
`;

export const CardInvestationImage = styled.img`
  height: 64px;
  width: 64px;
  radius: 50%;
`;

export const CardInvestationBody = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 20px;
`;

export const CardInvestationRow = styled(CardRow)`
  justify-content: space-between;
`;
