const { default: styled } = require("@emotion/styled");

export const HeroContainer = styled.div`
  display:flex;
  margin-top:60px;
  background-image: url(/hero.png);
  background-size: cover;
  background-position: top;
`

export const HeroImage = styled.div`
  height: 375px;
  padding: 48px 16px 32px;
`

export const HeroTitle = styled.div`
  max-width: 552px;
  width: 100%;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  margin-bottom: 16px;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`

export const HeroSub = styled.div`
  max-width: 381px;
  width:100%;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 16px;

  @media screen and (max-width: 600px) {
    font-size: 17px;
  }
`
