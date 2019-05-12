import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div(({ width, isCentered, offset }) => ({
  maxWidth: `${width / 2}px`,
  width: "100%",
  ...(isCentered
    ? { margin: offset ? `${offset} auto` : "0 auto" }
    : {
        margin: `${offset} 0`,
      }),
}));

const Image = styled.div(({ width, height, isNaked }) => ({
  background: "transparent",
  height: "0px",
  overflow: "hidden",
  paddingBottom:
    width / height !== 0.75
      ? `${(height / width) * 100}%`
      : `${(width / height) * 100}%`,
  position: "relative",
  ...(!isNaked && {
    borderRadius: "0.5em",
    boxShadow: "0px 4px 10px -2px rgba(0,0,0,0.1)",
  }),
  "svg, img, figure": {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
  },
}));

const AspectRatio = ({
  children,
  width,
  height,
  isCentered,
  isNaked,
  offset,
}) => (
  <ContentWrapper isCentered={isCentered} offset={offset} width={width}>
    <Image isNaked={isNaked} width={width} height={height}>
      {children}
    </Image>
  </ContentWrapper>
);

export default AspectRatio;
