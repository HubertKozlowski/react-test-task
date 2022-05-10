import React from "react";
import { Logo } from "../../shared";

export const Footer = (): JSX.Element => {
  return (
    <footer className="py-20 flex bg-custom-black">
      <div className="m-auto">
        <Logo variant="gray" />
      </div>
    </footer>
  );
};
