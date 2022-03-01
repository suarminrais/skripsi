import React from "react";
import { Container, Nav, NavContainer, NavItem, NavLogo, Button } from "./navbar.styles";

const Navbar = ({ user }) => {
  return (
    <Nav>
      <Container>
        <NavContainer>
          <NavLogo>Modal Tani</NavLogo>
          <NavItem>Program</NavItem>
          <NavItem>Investasiku</NavItem>
          <NavItem>Blog</NavItem>
          <Button ml>Masuk</Button>
          <Button primary mlAuto>Daftar</Button>
        </NavContainer>
      </Container>
    </Nav>
  );
} 

export default Navbar;
