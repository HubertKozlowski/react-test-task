import React from "react";
import { Accessories } from "./Accessories";
import { OtherDetails } from "./OtherDetails";
import { SocialMedia } from "./SocialMedia";

export const Details = (): JSX.Element => {
  return (
    <div className="m-20 grid grid-cols-2 gap-8">
      <SocialMedia />
      <Accessories />
      <div className="col-end-3">
        <OtherDetails />
      </div>
    </div>
  );
};
