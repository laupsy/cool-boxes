import styled, { css, keyframes } from "styled-components";

const animFadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const fadeInController = () =>
  css`
    ${animFadeIn} 0.3s ease forwards;
  `;

const FadeIn = styled.div`
  opacity: 0;
  animation: ${fadeInController};
`;

export default FadeIn;
