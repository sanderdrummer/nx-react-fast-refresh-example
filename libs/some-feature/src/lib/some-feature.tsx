import React from "react";

import styled from "styled-components";

import { AwesomeToggle } from "@fast-refresh/ui-lib";

/* eslint-disable-next-line */
export interface SomeFeatureProps {}

const StyledSomeFeature = styled.div`
  color: pink;
`;

export function SomeFeature(props: SomeFeatureProps) {
  return (
    <StyledSomeFeature>
      <h1>Welcome to some-feature!</h1>
      <AwesomeToggle>this is a awesome feature</AwesomeToggle>
    </StyledSomeFeature>
  );
}

export default SomeFeature;
