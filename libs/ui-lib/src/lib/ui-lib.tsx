import React from "react";

import styled from "styled-components";

/* eslint-disable-next-line */
export interface UiLibProps {}

const StyledUiLib = styled.div`
  color: pink;
`;

export function UiLib(props: UiLibProps) {
  return (
    <StyledUiLib>
      <h1>Welcome to ui-lib!</h1>
    </StyledUiLib>
  );
}

export default UiLib;
