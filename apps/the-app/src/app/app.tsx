import React from "react";

import styled from "styled-components";

import { UiLib } from "@fast-refresh/ui-lib";

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export function App() {
  return (
    <StyledApp>
      hi there
      <UiLib />
    </StyledApp>
  );
}

export default App;
