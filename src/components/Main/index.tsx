import React from "react";
import { Details } from "./Details";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { HeroImage } from "./HeroImage";

export const Main = (): JSX.Element => {
  return (
    <div className="p-6 main-background-gradient">
      <HeroImage />
      <Hero />
      <Features />
      <Details />
    </div>
  );
};
