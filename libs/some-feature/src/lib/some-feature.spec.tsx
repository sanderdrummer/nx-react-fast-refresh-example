import React from "react";
import { render } from "@testing-library/react";

import SomeFeature from "./some-feature";

describe("SomeFeature", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SomeFeature />);
    expect(baseElement).toBeTruthy();
  });
});
