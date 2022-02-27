import styled from "@emotion/styled";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1408px) {
    max-width: 1344px;
  }

  @media screen and (min-width: 1024px){
    max-width: 100%;
  }

  @media screen and (min-width: 1216px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1408px) {
    max-width: 1200px;
  }
`
export const Nav = styled.nav`
  display:flex;
  justify-content:spacebetween;
  align-items:center;
  height: 64px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
`
export const NavContainer = styled.div`
  display: flex;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
  color: #5d5d5d;
`

export const Button = styled.button`
  font-weight: 500;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  background-color: ${({ primary }) => primary ?  '#ffc400': '#fff'};
  color: #25282b;
  border: 1px solid #cacccf;
  font-size: 1rem;
  line-height: 0;
  height: 44px;
  align-items: center;
  border-radius: 8px;
  ${({ primary }) => primary ? 'box-shadow: inset 0 -2px 0 #e6b000;' :  'box-shadow: none;'}
  display: inline-flex;
  position: relative;
  vertical-align: top;

  &:hover {
    background-color: ${({ primary }) => primary ? '#ffd64d' : '#fafafa'};
    color: ${({ primary }) => primary ? '#000' : '#25282b'};
    border: 1px solid ${({ primary }) => primary ? 'transparent' : '#cacccf'};
  }

  ${({ mlAuto }) => mlAuto && 'margin-left:1rem;'}
`
