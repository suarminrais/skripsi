import React from "react";
import { Button } from "../navbar/navbar.styles";
import { ModalHeading } from "./modal.styles";
import { ModalContent } from "./modal.styles";
import { ModalFoot } from "./modal.styles";
import { CloseButton } from "./modal.styles";
import { ModalHead } from "./modal.styles";
import { ModalBody } from "./modal.styles";
import { ModalContainer } from "./modal.styles";

const Modal = ({ title, show, handleClick, children }) => {
  return (
    <ModalContainer show={show}>
      <ModalBody>
        <ModalHead>
          <CloseButton onClick={handleClick} />
          <ModalHeading>{title}</ModalHeading>
        </ModalHead>
        <ModalContent>{children}</ModalContent>
        <ModalFoot>
          <Button primary ml>
            Simpan
          </Button>
        </ModalFoot>
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
