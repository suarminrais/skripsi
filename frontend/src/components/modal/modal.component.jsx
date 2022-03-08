import React from "react";
import { Loader } from "../loader/loader.styles";
import { Button } from "../navbar/navbar.styles";
import { ModalHeading } from "./modal.styles";
import { ModalContent } from "./modal.styles";
import { ModalFoot } from "./modal.styles";
import { CloseButton } from "./modal.styles";
import { ModalHead } from "./modal.styles";
import { ModalBody } from "./modal.styles";
import { ModalContainer } from "./modal.styles";

const Modal = ({ title, show, loading, handleClick, children, handleSubmit }) => {
  return (
    <ModalContainer show={show}>
      <ModalBody>
        <ModalHead>
          <CloseButton onClick={handleClick} />
          <ModalHeading>{title}</ModalHeading>
        </ModalHead>
        <ModalContent>{children}</ModalContent>
        <ModalFoot>
          <Button onClick={handleSubmit} primary ml>
            {loading ? <Loader /> : 'Simpan'}
          </Button>
        </ModalFoot>
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
