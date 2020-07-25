import React, { useState, useEffect } from "react";
import NavButton from "./NavButton/NavButton";
import NavButtonHolder from "./NavButtonHolder/NavButtonHolder";
import CircleButtons from "./CircleButtons/CircleButtons";

const DigikalaSlider = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [selectedObject, setSelectedObject] = useState(props.images[selected]);
  let image = React.useRef();
  useEffect(() => {
    //Start Anim
    image.current.style.transition = "0.3s all";
    image.current.style.opacity = "0.8";
    //Anim
    setTimeout(() => {
      //End Anime
      image.current.style.transition = "0.6s all";
      image.current.style.opacity = "1";
      setSelectedObject(props.images[selected]);
    }, 200);
  }, [selected]);
  const next = () => {
    if (props.images.length - 1 === selected) setSelected(0);
    else setSelected(selected + 1);
  };
  const prev = () => {
    if (0 === selected) setSelected(props.images.length - 1);
    else setSelected(selected - 1);
  };
  const move = (to) => {
    setSelected(to);
  };
  return (
    <div
      style={{
        margin: "16px",
        width: props.width,
        height: props.height,
      }}
    >
      <img
        style={{
          position: "absolute",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
          borderRadius: "5px",
          transition: "0.3s opacity",
        }}
        ref={image}
        alt={selectedObject.alt}
        src={selectedObject.src}
        height={props.height}
        width={props.width}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ padding: "20px" }}></div>
        <div style={{ height: "100%", width: "100%" }}>
          <NavButtonHolder>
            <NavButton text={"<"} onClick={next} isRight={false} />
            <a
              href={selectedObject.href}
              style={{ width: "100%", height: "100%", display: "block" }}
            />
            <NavButton text={">"} onClick={prev} isRight={true} />
          </NavButtonHolder>
        </div>
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircleButtons
            onClick={move}
            buttons={props.images.length}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
};

export default DigikalaSlider;
