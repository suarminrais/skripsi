import React from "react";
import { Container } from "../navbar/navbar.styles";
import { CardSubtile } from "./card.styles";
import { CardLink } from "./card.styles";
import { CardRow } from "./card.styles";
import { CardHead } from "./card.styles";
import { CardBody } from "./card.styles";
import { CardContainer } from "./card.styles";
import Link from "next/link";
import { CardColumn } from "./card.styles";

const Card = ({ title, subtitle, to, href, children }) => {
  return (
    <CardContainer>
      <Container>
        <CardBody>
          <CardHead>{title}</CardHead>
          <CardRow>
            {
              subtitle && (<CardSubtile>{subtitle}</CardSubtile>)
            }
            {
              href && (
                <Link href={href}>
                  <CardLink>{to}</CardLink>
                </Link>
              )
            }
          </CardRow>
          <CardColumn>{children}</CardColumn>
        </CardBody>
      </Container>
    </CardContainer>
  );
};

export default Card;
