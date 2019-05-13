import React from "react";
import styled from "styled-components";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
})

const BaseLayout = ({ className, children }) => (
  <Wrapper className={className}>{children}
  </Wrapper>
);

export default BaseLayout;
