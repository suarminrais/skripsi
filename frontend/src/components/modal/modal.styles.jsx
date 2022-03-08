import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const grow = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? "inherit" : "none")};
`;

export const ModalBody = styled.div`
  background: #fff;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-flow: column wrap;
  max-width: 560px;
  width: 100%;
  animation: ${grow} 2s;
`;

export const ModalHead = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  gap: 12px;
  padding: 0 20px;
  border-bottom: 1px solid #c4c4c4;
`;

export const ModalContent = styled(ModalHead)`
  flex-flow: column wrap;
  border: none;
  overflow-y: scroll;
  height: calc(100% - 130px);
`;

export const ModalFoot = styled(ModalHead)`
  border-top: 1px solid #c4c4c4;
  border-bottom: none;
`;

export const ModalHeading = styled.h2`
  margin: 0;
`;

export const CloseButton = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  background: #ffd64d;
  cursor: pointer;

  &::before {
    content: "X";
    color: #25282b;
  }

  &:hover {
    transform: rotate(360deg);
  }
`;

export const AddButton = styled(CloseButton)`
  &::before {
    content: "+";
    color: #000;
  }
`;
