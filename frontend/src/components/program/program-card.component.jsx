import React from "react";
import { Loader } from "../loader/loader.styles";
import { Button } from "../navbar/navbar.styles";
import { ProgramTitle } from "./program.styles";
import { ProgramBody } from "./program.styles";
import { ProgramCardContent } from "./program.styles";
import { ProgramIcon } from "./program.styles";
import { ProgramLocation } from "./program.styles";
import { ProgramText } from "./program.styles";
import { ProgramBodyContainer } from "./program.styles";
import { ProgramType } from "./program.styles";
import { ProgramCardContainer } from "./program.styles";

const ProgramCard = ({ title, location, periode, interest, funded, funding, type, onClick, loading }) => {
  return (
    <ProgramCardContainer>
      <ProgramCardContent>
        <ProgramType uppercase>{type}</ProgramType>
        <ProgramTitle>{title}</ProgramTitle>
        <ProgramLocation center>
          <ProgramIcon src="/map.png" />
          <ProgramType mb>{location}</ProgramType>
        </ProgramLocation>
        <ProgramBodyContainer>
          <ProgramBody>
            <ProgramType>Lama Periode</ProgramType>
            <ProgramText>{periode} Bulan</ProgramText>
          </ProgramBody>
          <ProgramBody>
            <ProgramType>Bunga</ProgramType>
            <ProgramText right>{interest}%</ProgramText>
          </ProgramBody>
        </ProgramBodyContainer>
        <ProgramBodyContainer>
          <ProgramBody>
            <ProgramType>Target Dana</ProgramType>
            <ProgramText>Rp. {funding}</ProgramText>
          </ProgramBody>
          <ProgramBody>
            <ProgramType>Dana Terkumpul</ProgramType>
            <ProgramText right>Rp. {funded}</ProgramText>
          </ProgramBody>
        </ProgramBodyContainer>
      </ProgramCardContent>
      <Button onClick={onClick} full>
        {
          loading ? <Loader /> : 'Modali'
        }
      </Button>
    </ProgramCardContainer>
  );
};

export default ProgramCard;
