import React from "react";
import { CardInvestationHeadText } from "./card.styles";
import { CardInvestationRow } from "./card.styles";
import { CardColumn } from "./card.styles";
import { CardInvestationText } from "./card.styles";
import { CardInvestationBody } from "./card.styles";
import { CardInvestationImage } from "./card.styles";
import { CardInvestationHead } from "./card.styles";
import { CardInvestationContainer } from "./card.styles";

const CardInvestation = ({ name, status, image, balance, activeProgram, doneProgram, invested }) => {
  return (
    <CardInvestationContainer>
      <CardInvestationHead>
        <CardInvestationImage src={image} />
        <CardColumn>
          <CardInvestationHeadText>{name}</CardInvestationHeadText>
          <CardInvestationText>Akun {status}</CardInvestationText>
        </CardColumn>
      </CardInvestationHead>
      <CardInvestationBody>
        <CardInvestationRow>
          <CardInvestationText>Saldo Dompet</CardInvestationText>
          <CardInvestationText bold>Rp. {balance},-</CardInvestationText>
        </CardInvestationRow>
        <CardInvestationRow>
          <CardInvestationText>Program Aktif</CardInvestationText>
          <CardInvestationText bold>{activeProgram} Program</CardInvestationText>
        </CardInvestationRow>
        <CardInvestationRow>
          <CardInvestationText>Program Selesai</CardInvestationText>
          <CardInvestationText bold>{doneProgram} Program</CardInvestationText>
        </CardInvestationRow>
        <CardInvestationRow>
          <CardInvestationText>Jumlah Investasi</CardInvestationText>
          <CardInvestationText bold>Rp. {invested},-</CardInvestationText>
        </CardInvestationRow>
      </CardInvestationBody>
    </CardInvestationContainer>
  );
};

export default CardInvestation;
