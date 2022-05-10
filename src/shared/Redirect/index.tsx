import React from "react";

interface LinkProps {
  children: React.ReactNode;
  route: string;
}

export const Redirect = ({ children, route }: LinkProps): JSX.Element => {
  return (
    <a
      target="_blank"
      rel="nofollow noopener noreferrer"
      href={route}
      className=" visited:text-custom-red"
    >
      {children}
    </a>
  );
};
