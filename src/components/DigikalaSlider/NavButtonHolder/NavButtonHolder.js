import React from "react";

const NavButtonHolder = (props) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "block",
      }}
    >
      {props.children}
    </div>
  );
};

export default NavButtonHolder;
