import React from "react";
import Image from "next/image";

const ImageComponent = ({ image, text }) => {
  return <Image src={image} alt={text} width="500" height="400"></Image>;
};

export default ImageComponent;
