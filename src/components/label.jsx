import styled from "styled-components";

const Label = styled.span(({ theme }) => ({
  color: theme.body,
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.72em",
  fontWeight: "700",
  letterSpacing: "0.05em",
  lineHeight: "1.6",
  margin: "0",
  padding: "0",
  textTransform: "uppercase",
  display: "block",
}));

export default Label;
