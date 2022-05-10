import React from "react";

const LINKS: { path: string; description: string }[] = [
  { path: "/", description: "Lorem" },
  { path: "/", description: "Lorem" },
  { path: "/", description: "Lorem" },
];

export const NavigationLinks = (): JSX.Element => {
  return (
    <div className="flex font-bold">
      {LINKS.map(({ path, description }, index) => {
        return (
          <a className="mx-6" key={`nav-${index}`} href={path}>
            {description}
          </a>
        );
      })}
    </div>
  );
};
