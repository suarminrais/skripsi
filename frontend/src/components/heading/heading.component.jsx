import React from "react";
import { Container } from "../navbar/navbar.styles";
import { HeadingContainer, HeadingBody, HeadingSection, HeadingTitle } from "./heading.styles";

const Heading = ({ title, section, bg, children, between }) => {
  return (
    <HeadingContainer bg={bg}>
      <Container>
        <HeadingBody center column>
          <HeadingSection>{section}</HeadingSection>
          <HeadingTitle>{title}</HeadingTitle>
        </HeadingBody>
        <HeadingBody between={between} center>
          {children}
        </HeadingBody>
      </Container>
    </HeadingContainer>
  );
};

export default Heading;
