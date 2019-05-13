import styled from "styled-components";

const Button = styled.button({
    background: "transparent",
    color: "#333",
    textTransform: "uppercase",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "600",
    letterSpacing: "0.05em",
    fontSize: "0.6em",
    outline: "0",
    border: "0",
    background: "#f0f0f3",
    borderRadius: "3px",
    ":hover": {
        background: "hsl(320, 70%, 56%)",
        color: "white",
    },
});

export default Button;