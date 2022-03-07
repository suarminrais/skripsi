import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 3px solid #fff;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 2s linear infinite;
`;
