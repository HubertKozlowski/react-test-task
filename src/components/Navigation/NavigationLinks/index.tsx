import Link from "next/link";
import React from "react";

const LINKS: { path: string; description: string }[] = [
  { path: "lorem-1", description: "Lorem" },
  { path: "lorem-2", description: "Lorem" },
  { path: "lorem-3", description: "Lorem" },
];

export const NavigationLinks = (): JSX.Element => {
  return (
    <div className="flex font-bold">
      {LINKS.map(({ path, description }, index) => {
        return (
          <span key={`nav-${index}`} className="mx-6 inline-block">
            <Link href={`${path}`} replace>
              {description}
            </Link>
          </span>
        );
      })}
    </div>
  );
};
