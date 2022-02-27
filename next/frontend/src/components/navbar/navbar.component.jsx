import React from "react";
import { Container, Nav, NavContainer, NavItem, Button } from "./navbar.styles";

const Navbar = ({ user }) => {
  return (
    <>
      <Nav>
        <Container>
          <NavContainer>
            <NavItem>logo</NavItem>
            <NavItem>Program</NavItem>
            <NavItem>Investasiku</NavItem>
            <NavItem>Blog</NavItem>
            <Button>Masuk</Button>
            <Button primary mlAuto>Daftar</Button>
          </NavContainer>
        </Container>
      </Nav>
    </>
  );
} 

export default Navbar;
