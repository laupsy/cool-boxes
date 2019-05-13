import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import onClickOutside from "react-onclickoutside";
import FadeIn from "../components/fade-in";
import Button from "../components/button";

const DateButtonBlock = styled.div({
  position: "relative",
});

const CalendarPositioner = styled(FadeIn)({
  position: "absolute",
  right: "0",
  top: "100%",
});

const DatePicker = ({ onSetStartDate, onSetDueDate, startDate, dueDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  DatePicker.handleClickOutside = () => setIsOpen(false);
  return (
    <DateButtonBlock>
      {isOpen && (
        <CalendarPositioner>
            <Calendar onChange={onSetStartDate} value={startDate} />
            <Calendar onChange={onSetDueDate} value={dueDate} />
        </CalendarPositioner>
      )}
      <Button onClick={() => setIsOpen(!isOpen)}>
        Set dates
      </Button>
    </DateButtonBlock>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => DatePicker.handleClickOutside,
};

export default onClickOutside(DatePicker, clickOutsideConfig);
