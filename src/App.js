import React from "react";
import DigikalaSlider from "./components/DigikalaSlider/DigikalaSlider";

const App = () => {
  return (
    <DigikalaSlider
      images={[
        {
          src: "/assets/images/1.jpg",
          href: "www.yahoo.com",
          alt: "The First One!",
        },{
          src: "/assets/images/2.jpg",
          href: "www.google.com",
          alt: "The Second One!",
        },{
          src: "/assets/images/3.jpg",
          href: "www.gmail.com",
          alt: "The Third One!",
        },{
          src: "/assets/images/4.jpg",
          href: "www.darsman.com",
          alt: "The Forth One!",
        },
      ]}
      selected={0}
      width={'883px'}
      height={'450px'}
      timeout={3000}
    />
  );
};

export default App;
