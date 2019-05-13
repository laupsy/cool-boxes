import React, { useState, Fragment } from "react";
import styled from "styled-components";
import moment from "moment";
import H2 from "../components/h2";
import DatePicker from "../components/date-picker";
import EditableTitle from "../components/editable-title";
import BaseLayout from "../templates/base";

const ListWrapper = styled.div(({ theme, isGridView, isTimelineView }) => ({
  display: "grid",
  ...(isGridView && {
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridGap: "20px",
  }),
  ...(isTimelineView && {
    gridTemplateColumns: "1fr",
    gridGap: "10px",
  }),
}));

const ListBlock = styled.div({
  padding: "50px",
  width: "100%",
  flexGrow: "1",
});

const Input = styled.textarea(
  ({
    theme,
    daysUntilDue,
    daysUntilStart,
    isGridView,
    isTimelineView,
    color,
  }) => ({
    height: "100%",
    width: "100%",
    border: "0",
    background: color,
    minWidth: "100px",
    borderRadius: "4px",
    outline: "0",
    border: "0",
    resize: "none",
    padding: "10px",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "600",
    letterSpacing: "0.015em",
    fontSize: "0.6em",
    ...(isTimelineView && {
      marginLeft: `${daysUntilStart}0px`,
      width: `${daysUntilDue}0px`,
      maxWidth: `calc(100vw - ${daysUntilStart}0px - 120px)`,
    }),
    ...(isGridView && {
      height: "300px",
    }),
  })
);

const TodoItem = styled.div(({ isActive }) => ({
  position: "relative",
  display: "block",
  width: "100%",
  transition: "0.3s ease",
  background: isActive ? "#FAFAFE" : "fff",
  borderRadius: "4px",
  padding: "10px",
  zIndex: isActive ? "3" : "1",
}));

const Controls = styled.div({
  position: "fixed",
  bottom: "0",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#FFFFFF",
  zIndex: "4",
});

const Control = styled.button(({ theme, isActive }) => ({
  background: isActive ? "lavendar" : "cyan",
}));

const DataLabel = styled.div(({ theme }) => ({
  color: "#666",
  textTransform: "uppercase",
  fontFamily: "'Inter', sans-serif",
  fontWeight: "600",
  letterSpacing: "0.05em",
  fontSize: "0.6em",
}));

const TodoData = styled.div(({ theme, isActive }) => ({
  position: "absolute",
  bottom: "0",
  display: "flex",
  height: "40px",
  right: "0",
  transition: "0.3s ease",
  opacity: isActive ? 1 : 0,
  alignItems: "center",
  "> *": {
    marginLeft: "30px",
  },
}));

const Item = ({ isListView, isGridView, isTimelineView }) => {
  const [value, setValue] = useState("");

  // Raw dates
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());

  // Colors
  const h = Math.ceil(Math.random() * 360);
  const s = "44%";
  const l = "55%";

  // Interactive states
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState(`hsl(${h}, ${s}, ${l})`);

  // Useful information about the start and due dates
  const today = moment();
  const formattedStartDate = moment(startDate);
  const formattedDueDate = moment(dueDate);
  const daysUntilDue = formattedDueDate.diff(formattedStartDate, "days");
  const daysUntilStart = formattedStartDate.diff(today, "days");
  const daysSinceStarted = today.diff(formattedStartDate, "days");

  const changeTodoContent = event => {
    setValue(event.target.value);
  };
  return (
    <TodoItem
      startDate={startDate}
      dueDate={dueDate}
      isGridView={isGridView}
      isTimelineView={isTimelineView}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isActive={isHovered}
    >
      <Input
        type="text"
        onChange={changeTodoContent}
        value={value}
        daysUntilStart={daysUntilStart >= 0 ? daysUntilStart : 0}
        daysUntilDue={daysUntilDue}
        isGridView={isGridView}
        isTimelineView={isTimelineView}
        color={color}
      />
      <TodoData isActive={isHovered}>
        <DataLabel>
          {(daysSinceStarted > 0 &&
            `Started ${
            daysSinceStarted === 0 ? "today" : `${daysSinceStarted} days ago`
            }`) ||
            `Starting in ${daysUntilStart} days`}
        </DataLabel>
        <DataLabel>Due in {daysUntilDue} days</DataLabel>
        <DatePicker
          onSetStartDate={date => setStartDate(date)}
          startDate={startDate}
          onSetDueDate={date => setDueDate(date)}
          dueDate={dueDate}
        />
      </TodoData>
    </TodoItem>
  );
};

const List = () => {
  const [list, updateItemList] = useState([]);
  const [isGridView, setIsGridView] = useState(false);
  const [isTimelineView, setIsTimelineView] = useState(true);

  const setViewToGrid = () => {
    setIsGridView(true);
    setIsTimelineView(false);
  };

  const setViewToTimeline = () => {
    setIsGridView(false);
    setIsTimelineView(true);
  };

  const newItem = { key: list.length, value: "hello" };
  const addItem = () => {
    updateItemList([...list, newItem]);
  };
  return (
    <ListBlock>
      <ListWrapper isGridView={isGridView} isTimelineView={isTimelineView}>
        {list.map(box => (
          <Item
            isGridView={isGridView}
            isTimelineView={isTimelineView}
            key={box.key}
          />
        ))}
      </ListWrapper>
      <Controls>
        <Control onClick={addItem}>Add a TODO</Control>
        <Control isActive={isGridView} onClick={setViewToGrid}>
          View as Grid
        </Control>
        <Control isActive={isTimelineView} onClick={setViewToTimeline}>
          View as Timeline
        </Control>
      </Controls>
    </ListBlock>
  );
};

const Overview = () => (
  <BaseLayout>
    <EditableTitle />
    <List />
  </BaseLayout>);

export default Overview;
