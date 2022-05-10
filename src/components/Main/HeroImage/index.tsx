import React from "react";
import Image from "next/image";

export const HeroImage = (): JSX.Element => {
  return (
    <Image
      alt="main-image"
      src="/image_125.png"
      width="100%"
      height={20}
      layout="responsive"
      objectFit="contain"
      priority
    />
  );
};
