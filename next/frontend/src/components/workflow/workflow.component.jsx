import React from "react";
import { WorkflowContainer, WorkflowImage, WorkflowText, WorkflowSubTitle } from "./workflow.styles";

const Workflow = ({ src, title, subtitle }) => {
  return (
    <WorkflowContainer>
      <WorkflowImage src={src}/>
      <WorkflowText>{title}</WorkflowText>
      <WorkflowSubTitle>{subtitle}</WorkflowSubTitle>
    </WorkflowContainer>
  );
}

export default Workflow;
