import React from "react";

import styled from "styled-components";

export interface UiLibProps {
  children: React.ReactNode;
}

export function AwesomeToggle({ children }: UiLibProps) {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setShow((show) => !show)}>
        press me
      </button>
      {show && <div>{children}</div>}
    </>
  );
}
