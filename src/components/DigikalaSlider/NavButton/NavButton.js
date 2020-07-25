import React from "react";

const NavButton = (props) => {
  let style = {};
  if (props.isRight)
    style = {
      position: "absolute",
      height: "100%",
      color: "white",
      fontSize: "64px",
      right: "0",
      top: "0",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  else
    style = {
      position: "absolute",
      height: "100%",
      color: "white",
      fontSize: "64px",
      left: "0",
      top: "0",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

  return (
      <div style={style}>
        <span onClick={props.onClick.bind()} style={{ cursor: "pointer" }}>{props.text}</span>
      </div>
  );
};

export default NavButton;
