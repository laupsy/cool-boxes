import React from "react";
import styled from "styled-components";

const StyledAnchorTag = styled.a(({ theme }) => ({
  borderBottom: `1px solid ${theme.line}`,
  color: theme.body,
  textDecoration: "none",
  ":hover": {
    borderBottomColor: theme.body,
    color: theme.body,
  },
}));

const Link = ({ href, children, newTab }) => (
  <StyledAnchorTag
    href={href}
    target={newTab && "_blank"}
    rel="noopener noreferrer"
  >
    {children}
  </StyledAnchorTag>
);

export default Link;
