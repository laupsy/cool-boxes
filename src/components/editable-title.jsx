import React, { useState, Fragment } from "react";
import styled from "styled-components";

const Title = styled.div(({ theme, isActive }) => ({
  textAlign: "center",
  color: "#222",
  fontFamily: "'Inter', sans-serif",
  fontSize: "2em",
  letterSpacing: "-0.02em",
  fontWeight: "700",
  marginBottom: "0.6em",
  width: "100%",
}));

const Container = styled.div(({ theme, isActive }) => ({
  position: "relative",
  width: "100%",
  borderRadius: "4px",
  padding: "20px",
  transition: "0.3s ease",
  ...(isActive && {
    background: "#eee",
  }),
}));

const Label = styled.span({
  color: "#555",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.7em",
  fontWeight: "500",
  letterSpacing: "0.02em",
  marginTop: "10px",
  padding: "0",
  display: "block",
  textAlign: "center",
});

const Input = styled.input(({ theme, isActive }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  color: "#222",
  padding: "20px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "2em",
  letterSpacing: "-0.02em",
  fontWeight: "700",
  marginBottom: "0.6em",
  width: "100%",
  textAlign: "center",
  outline: "0",
  border: "0",
  background: "#eee",
    opacity: isActive ? "1" : "0",
}));

const EditableTitle = () => {
  const [title, setTitle] = useState("Laura's Lists");
  const [suggestedTitle, setSuggestedTitle] = useState("");
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Title controls - saving, cancelling
  const saveChanges = event => {
    if (event.key === "Enter") {
      if (suggestedTitle != "") { setTitle(suggestedTitle); }
      setTitleEditMode(false);
    }
    if (event.key === "Escape") {
      setTitleEditMode(false);
    }
  };
  return (
    <Container
      isActive={isHovered || titleEditMode}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Title>{title}</Title>
    <Input
        type="text"
        onChange={e => setSuggestedTitle(e.target.value)}
        onKeyDown={e => saveChanges(e)}
        placeholder={title}
        isActive={titleEditMode}
              onClick={() => setTitleEditMode(true)}
    />
    {titleEditMode && <Label>enter to save · esc to cancel</Label>}
    </Container>
  );
};

export default EditableTitle;
