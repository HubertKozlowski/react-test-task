import React from "react";
import Image from "next/image";

export const Hero = (): JSX.Element => {
  return (
    <div className="relative bottom-24 flex justify-center">
      <div className="text-center">
        <Image width="149" height="149" src={"/eye.png"} alt="sadfasdf" />
        <h1 className="mt-6 text-5xl font-bold">Lorem ipsum</h1>
        <p className="my-4">
          Created by: <span className="text-custom-red">Lorem ipsum</span>
        </p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
      </div>
    </div>
  );
};
