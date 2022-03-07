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

  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }

  @media screen and (min-width: 1216px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1408px) {
    max-width: 1200px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: spacebetween;
  align-items: center;
  height: 64px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
  color: #5d5d5d;
  cursor: pointer;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  font-size: 22px;
  font-weight: 500;
  color: #5d5d5d;
  cursor: pointer;
`;

export const Button = styled.button`
  font-weight: 500;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  background-color: ${({ primary }) => (primary ? "#ffc400" : "#fff")};
  color: #25282b;
  border: 1px solid #cacccf;
  font-size: 1rem;
  line-height: 0;
  height: 44px;
  align-items: center;
  border-radius: 8px;
  ${({ primary }) => (primary ? "box-shadow: inset 0 -2px 0 #e6b000;" : "box-shadow: none;")}
  display: inline-flex;
  position: relative;
  vertical-align: top;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#ffd64d" : "#fafafa")};
    color: ${({ primary }) => (primary ? "#000" : "#25282b")};
    border: 1px solid ${({ primary }) => (primary ? "transparent" : "#cacccf")};
  }

  ${({ mlAuto }) => mlAuto && "margin-left:1rem;"}
  ${({ ml }) => ml && "margin-left:auto;"}
  ${({ mr }) => mr && "margin-right:16px;"}
  ${({ full }) => full && "width:100%;"}
  ${({ flex }) => flex && "flex:auto;"}
`;

export const NameContainer = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  color: #fff;
  background: #2f80ed;
`;

export const AuthContainer = styled.div`
  display:flex;
  gap:10px;
  align-items: center;
  margin-right: 16px;
`;

export const AuthName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #5d5d5d;
`;

export const SvgWrapper = styled.div`
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  z-index: 80;
  display: ${({ show }) => show ? 'block' : 'none'};
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 0.25rem;
  position: absolute;
  will-change: transform;
  top: 0px;
  transform: translate3d(-31px, 48px, 0px);
`;

export const DropdownItem = styled.div`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor:pointer;
`;

export const DropdownDivider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;
