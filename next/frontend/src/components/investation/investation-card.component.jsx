import React, { useState } from "react";
import { Button } from "../navbar/navbar.styles";
import { ProgramIcon } from "../program/program.styles";
import { ProgramTitle } from "../program/program.styles";
import { ProgramText } from "../program/program.styles";
import { ProgramType } from "../program/program.styles";
import { InvestationCardPreviewImage } from "./investation.styles";
import { InvestationCardInputContainer } from "./investation.styles";
import { InvestationCardColumn } from "./investation.styles";
import { InvestationCardDivider } from "./investation.styles";
import { InvestationCardInputHide } from "./investation.styles";
import { InvestationCardImage } from "./investation.styles";
import { InvestationCardRow } from "./investation.styles";
import { InvestationCardContainer } from "./investation.styles";

const InvestationCard = ({ title, image, type, location, periode, interest, funded, funding, status, total }) => {
  const [preview, setPreview] = useState();

  const handleChangeFile = (e) => {
    setPreview(e.target.files[0]);
  };

  return (
    <InvestationCardContainer>
      <InvestationCardRow>
        <InvestationCardImage src={image} />
        <InvestationCardColumn evenly>
          <ProgramType mt uppercase>
            {type}
          </ProgramType>
          <ProgramTitle>{title}</ProgramTitle>
          <InvestationCardRow nogap>
            <ProgramIcon src="/map.png" />
            <ProgramType mb>{location}</ProgramType>
          </InvestationCardRow>
        </InvestationCardColumn>
      </InvestationCardRow>
      <InvestationCardDivider />
      <InvestationCardRow>
        <InvestationCardColumn>
          <ProgramType>Lama Periode</ProgramType>
          <ProgramText>{periode}</ProgramText>
        </InvestationCardColumn>
        <InvestationCardColumn>
          <ProgramType>Bunga</ProgramType>
          <ProgramText>{interest}</ProgramText>
        </InvestationCardColumn>
        <InvestationCardColumn>
          <ProgramType>Status Investasi</ProgramType>
          <ProgramText>{status}</ProgramText>
        </InvestationCardColumn>
      </InvestationCardRow>
      <InvestationCardRow>
        <InvestationCardColumn>
          <ProgramType>Total Investasi</ProgramType>
          <ProgramText>
            Rp. {funded} dari Rp. {funding}
          </ProgramText>
        </InvestationCardColumn>
      </InvestationCardRow>
      {total && (
        <InvestationCardRow>
          <InvestationCardColumn>
            <ProgramType>Jumlah Bayar</ProgramType>
            <ProgramText>Rp. {total},-</ProgramText>
          </InvestationCardColumn>
          <InvestationCardColumn>
            {preview && <InvestationCardPreviewImage src={URL.createObjectURL(preview)} />}
            <InvestationCardInputContainer>
              <ProgramType>Upload bukti di sini</ProgramType>
              <InvestationCardInputHide type="file" accept="image/*" onChange={handleChangeFile} />
            </InvestationCardInputContainer>
          </InvestationCardColumn>
          <Button>Upload</Button>
        </InvestationCardRow>
      )}
    </InvestationCardContainer>
  );
};

export default InvestationCard;
