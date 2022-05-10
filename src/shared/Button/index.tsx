import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  const handleOnClick = (): void => {
    onClick();
  };

  return (
    <button
      className="py-5 px-8 rounded-m radius-2 bg-custom-black hover:bg-custom-red"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
