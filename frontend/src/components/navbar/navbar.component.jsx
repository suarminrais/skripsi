import { useModal } from "@/hooks/modal";
import Link from "next/link";
import React from "react";
import { CloseButton } from "../modal/modal.styles";
import { DropdownMenu, NavIcon, NavIconContainer, NavLogoMobileContainer, NavMobile } from "./navbar.styles";
import { DropdownDivider } from "./navbar.styles";
import { DropdownItem } from "./navbar.styles";
import { SvgWrapper } from "./navbar.styles";
import { AuthName } from "./navbar.styles";
import { AuthContainer } from "./navbar.styles";
import { NameContainer } from "./navbar.styles";
import { Container, Nav, NavContainer, NavItem, NavLogo, Button } from "./navbar.styles";

const Navbar = ({ user, logout }) => {
  const [show, handleClick] = useModal();
  const [open, onOpen] = useModal();

  return (
    <Nav>
      <Container>
        <NavContainer>
          <Link href="/">
            <NavLogo>Modal Tani</NavLogo>
          </Link>
          <NavMobile open={open}>
            <NavLogoMobileContainer>
              <Link href="/">
                <NavLogo onClick={onOpen}>Beranda</NavLogo>
              </Link>
              <CloseButton onClick={onOpen} />
            </NavLogoMobileContainer>
            <Link href="/program">
              <NavItem onClick={onOpen}>Program</NavItem>
            </Link>
            {
              user && (<Link href="/investasi">
                <NavItem onClick={onOpen}>Investasi</NavItem>
              </Link>)
            }
            <Link href="/blog">
              <NavItem onClick={onOpen}>Blog</NavItem>
            </Link>
            {
              user ? (
                <AuthContainer>
                  <NameContainer>{user?.name.charAt(0)}</NameContainer>
                  <AuthName>{user?.name}</AuthName>
                  <SvgWrapper onClick={handleClick}>
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99979 8C7.76614 8.00046 7.5397 7.91908 7.35979 7.77L1.35979 2.77C1.15557 2.60026 1.02715 2.35635 1.00277 2.09192C0.978387 1.8275 1.06005 1.56422 1.22979 1.36C1.39953 1.15578 1.64344 1.02736 1.90786 1.00298C2.17229 0.978601 2.43557 1.06026 2.63979 1.23L7.99979 5.71L13.3598 1.39C13.4621 1.30694 13.5798 1.2449 13.7061 1.20747C13.8324 1.17004 13.9649 1.15795 14.096 1.17189C14.227 1.18582 14.354 1.22552 14.4696 1.2887C14.5853 1.35187 14.6873 1.43727 14.7698 1.54C14.8614 1.64282 14.9307 1.76345 14.9735 1.89432C15.0163 2.0252 15.0316 2.1635 15.0185 2.30056C15.0053 2.43762 14.964 2.5705 14.8971 2.69085C14.8303 2.81121 14.7392 2.91646 14.6298 3L8.62979 7.83C8.4447 7.95552 8.22289 8.01537 7.99979 8Z" fill="#848484"></path></svg>
                  </SvgWrapper>
                  <DropdownMenu show={show}>
                    <Link href="/profile">
                      <DropdownItem>Profile</DropdownItem>
                    </Link>
                    <DropdownDivider />
                    <DropdownItem onClick={logout}>Keluar</DropdownItem>
                  </DropdownMenu>
                </AuthContainer>
              ) : (
                <>
                  <Link href="/login">
                    <Button onClick={onOpen} ml>Masuk</Button>
                  </Link>
                  <Link href="/register">
                    <Button onClick={onOpen} primary mlAuto mr>
                      Daftar
                    </Button>
                  </Link>
                </>
              )
            }
          </NavMobile>
          <NavIconContainer onClick={onOpen}>
            <NavIcon />
            <NavIcon />
            <NavIcon />
          </NavIconContainer>
        </NavContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
