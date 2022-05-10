import React from "react";

interface LinkProps {
  children: React.ReactNode;
  route: string;
}

export const CustomLink = ({ children, route }: LinkProps): JSX.Element => {
  return (
    <a
      rel="nofollow noopener noreferrer"
      href={route}
      className=" visited:text-custom-red"
    >
      {children}
    </a>
  );
};
