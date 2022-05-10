import React from "react";
import { Logo, SearchInput } from "../../shared/";
import { NavigationLinks } from "./NavigationLinks";

export const Navigation = (): JSX.Element => {
  return (
    <nav className="p-10 flex items-center justify-between bg-custom-black">
      <Logo variant="white" />
      <div className="flex items-center">
        <SearchInput />
        <NavigationLinks />
      </div>
    </nav>
  );
};
