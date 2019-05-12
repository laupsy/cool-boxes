import styled from "styled-components";

const H2 = styled.h2(({ theme }) => ({
  color: theme.title,
  fontFamily: "'Inter', sans-serif",
  fontSize: "2em",
  letterSpacing: "-0.02em",
  fontWeight: "700",
  marginBottom: "0.6em",
}));

export default H2;
