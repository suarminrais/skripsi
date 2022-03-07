import React from "react";
import { Container } from "../navbar/navbar.styles";
import { SectionTotal } from "./section.styles";
import { SectionRow } from "./section.styles";
import { SectionBody } from "./section.styles";
import { SectionHead } from "./section.styles";
import { SectionSubtitle } from "./section.styles";
import { SectionTitle } from "./section.styles";
import { SectionContainer } from "./section.styles";

const Section = ({ title, subtitle, total, children }) => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </SectionContainer>
      <SectionHead>
        <Container>
          <SectionTotal>{total} Data</SectionTotal>
        </Container>
      </SectionHead>
      <SectionBody>
        <Container>
          <SectionRow>{children}</SectionRow>
        </Container>
      </SectionBody>
    </>
  );
};

export default Section;
