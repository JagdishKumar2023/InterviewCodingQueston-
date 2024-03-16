import React from "react";
import "react-sildeshow-image/dist/styles.css";
import { Fade, Zoom, Silde } from "react-sildeshow-image";

const slideImages = [
  {
    url: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "first silder",
  },
  {
    url: "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Second silder",
  },
  {
    url: "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Third Silder",
  },
  {
    url: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Fourth",
  },
];

const divStyle = {
  display: "flex",
  aliginItems: "center",
  justifyContext: "center",
  height: "400px",
  backgroundSize: "cover",
};

export const Images = () => {
  return (
    <div>
      <Fade>
        {slideImages.map((image, index) => {
          <div key={index}>
            <div style={{ ...divStyle }}></div>
          </div>;
        })}
      </Fade>
    </div>
  );
};
