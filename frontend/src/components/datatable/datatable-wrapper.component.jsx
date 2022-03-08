import React from "react";
import { AddButton } from "../modal/modal.styles";
import { Container } from "../navbar/navbar.styles";
import { DataRow } from "./datatable.styles";
import { DataContainer } from "./datatable.styles";

const DataTableWrapper = ({ title, handleClick, children }) => {
  return (
    <DataContainer>
      <Container>
        <DataRow>
          <h1>{title}</h1>
          <AddButton onClick={handleClick} />
          {children}
        </DataRow>
      </Container>
    </DataContainer>
  )
}

export default DataTableWrapper
