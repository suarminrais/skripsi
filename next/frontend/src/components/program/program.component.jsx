import Link from "next/link";
import React from "react";
import { Button } from "../navbar/navbar.styles";
import { ProgramTitle } from "./program.styles";
import { ProgramBody } from "./program.styles";
import { ProgramContent } from "./program.styles";
import { ProgramIcon } from "./program.styles";
import { ProgramLocation } from "./program.styles";
import { ProgramText } from "./program.styles";
import { ProgramBodyContainer } from "./program.styles";
import { ProgramType } from "./program.styles";
import { ProgramImage } from "./program.styles";
import { ProgramContainer } from "./program.styles";

const Program = ({ id, image, title, location, periode, interest, funded, funding, type }) => {
  return (
    <ProgramContainer>
      <ProgramImage src={image} />
      <ProgramContent>
        <ProgramType uppercase>{type}</ProgramType>
        <ProgramTitle>{title}</ProgramTitle>
        <ProgramLocation center>
          <ProgramIcon src="/map.png" />
          <ProgramType mb>{location}</ProgramType>
        </ProgramLocation>
        <ProgramBodyContainer>
          <ProgramBody>
            <ProgramType>Lama Periode</ProgramType>
            <ProgramText>{periode}</ProgramText>
          </ProgramBody>
          <ProgramBody>
            <ProgramType>Bunga</ProgramType>
            <ProgramText right>{interest}</ProgramText>
          </ProgramBody>
        </ProgramBodyContainer>
        <ProgramBodyContainer>
          <ProgramBody>
            <ProgramType>Target Dana</ProgramType>
            <ProgramText>Rp. {funded}</ProgramText>
          </ProgramBody>
          <ProgramBody>
            <ProgramType>Dana Terkumpul</ProgramType>
            <ProgramText right>Rp. {funding}</ProgramText>
          </ProgramBody>
        </ProgramBodyContainer>
      </ProgramContent>
      <Link href={`/program/${id}`}>
        <Button primary full>
          Lihat
        </Button>
      </Link>
    </ProgramContainer>
  );
};

export default Program;
