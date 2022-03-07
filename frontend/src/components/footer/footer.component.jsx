import React from "react";
import { Container } from "../navbar/navbar.styles";
import { FooterBody } from "./footer.styles";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterBody>Copyright Modal Tani 2022 &copy; All Right Reserve</FooterBody>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
