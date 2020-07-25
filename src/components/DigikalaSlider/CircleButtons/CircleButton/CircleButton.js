import React from "react";
import styled from "styled-components";

const CircleButton = (props) => {
  const CircleButtonHolder = styled.div`
    cursor: pointer;
    width: ${props.width};
    height: ${props.height};
    border-radius: 50%;
    background-color: ${props.isSelected ? props.colorHover : props.color};
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.3);
    margin: 0 4px;
    &:hover {
      background-color: ${props.colorHover};
    }
  `;
  return <CircleButtonHolder onClick={props.onClick.bind(null,props.count)}/>;
};
export default CircleButton;
