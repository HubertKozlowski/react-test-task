import React from "react";
import Image from "next/image";

interface IconWithTextProps {
  iconName: string;
  iconWidth?: number;
  iconHeight?: number;
  children: React.ReactNode;
}

export const IconWithText = ({
  iconName,
  iconWidth = 16,
  iconHeight = 16,
  children,
}: IconWithTextProps): JSX.Element => {
  return (
    <div className="flex">
      <div className="flex justify-center mr-2 text-center">
        <Image
          src={`/${iconName}`}
          width={iconWidth}
          height={iconHeight}
          alt={`${iconName} icon`}
        />
      </div>
      {children}
    </div>
  );
};
