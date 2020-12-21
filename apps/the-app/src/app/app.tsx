import React from "react";

import styled from "styled-components";

import { SomeFeature } from "@fast-refresh/some-feature";

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export function App() {
  return (
    <StyledApp>
      <SomeFeature />
    </StyledApp>
  );
}

export default App;
