import Link from "next/link";
import React from "react";
import { Container, Nav, NavContainer, NavItem, NavLogo, Button } from "./navbar.styles";

const Navbar = ({ user }) => {
  return (
    <Nav>
      <Container>
        <NavContainer>
          <Link href="/">
            <NavLogo>Modal Tani</NavLogo>
          </Link>
          <Link href="/program">
            <NavItem>Program</NavItem>
          </Link>
          <Link href="/investasi">
            <NavItem>Investasiku</NavItem>
          </Link>
          <Link href="/blog">
            <NavItem>Blog</NavItem>
          </Link>
          <Link href="/login">
            <Button ml>Masuk</Button>
          </Link>
          <Link href="/register">
            <Button primary mlAuto mr>
              Daftar
            </Button>
          </Link>
        </NavContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
