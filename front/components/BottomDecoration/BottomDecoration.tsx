import React from "react";

import Image from "next/image";

import Decoration from "./assets/decoration.svg";

const BottomDecoration = ({ noBottomDecoration }: { noBottomDecoration: boolean }) => {
  if (noBottomDecoration) return null
  return (
    <Image
      src={Decoration}
      alt="decoration"
      className="w-full h-fit absolute bottom-0 "
    />
  );
};

export default BottomDecoration;
