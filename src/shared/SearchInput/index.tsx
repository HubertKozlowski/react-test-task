import Image from "next/image";
import React from "react";

export const SearchInput = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Image
          className="absolute"
          width="19"
          height="19"
          alt="search-icon"
          src="/search.svg"
        />
      </div>
      <input
        type="text"
        id="nav-search"
        className="
        bg-custom-light-black
          text-sm
          rounded-lg
        focus:ring-blue-500
        focus:border-blue-500
          block
          w-full
          pl-12
          p-2.5"
        placeholder="Lorem ipsum"
      />
    </div>
  );
};
