import React from "react";
import CircleButton from "./CircleButton/CircleButton";

const CircleButtons = (props) => {
  let buttons = [];
  for (let i = 0; i < props.buttons; i++)
    buttons.push(
      <CircleButton
        width={"10px"}
        key={i}
        height={"10px"}
        color={"#fff"}
        colorHover={"#00bfd6"}
        onClick={props.onClick}
        count={i}
        isSelected={props.selected === i}
      />
    );
  return (
    <div style={{ zIndex: "2", display: "flex", flexDirection: "row-reverse" }}>
      {buttons}
    </div>
  );
};

export default CircleButtons;
