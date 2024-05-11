import React from "react";

import Image from "next/image";

import Decoration from "./assets/decoration.svg";

const BottomDecoration = () => {
  return (
    <Image
      src={Decoration}
      alt="decoration"
      className="absolute bottom-0 w-full h-fit"
    />
  );
};

export default BottomDecoration;
