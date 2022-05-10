import React from "react";
import { AccessoryItem } from "../types";

interface AccessoryProps extends AccessoryItem {
  activeItemId?: number;
  onAccessoryClick: (id: number) => void;
}

export const Accessory = ({
  id,
  activeItemId,
  category,
  title,
  detail,
  onAccessoryClick,
}: AccessoryProps): JSX.Element => {
  const isActive =
    id === activeItemId ? "border-4 box-content border-custom-red" : "";

  return (
    <div
      onClick={() => onAccessoryClick(id)}
      className={`${isActive} bg-custom-black rounded-m text-center py-6 hover:cursor-pointer text-custom-gray text-sm font-bold`}
    >
      <span>{category}</span>
      <p className="text-white text-lg my-2">{title}</p>
      <span>{detail}</span>
    </div>
  );
};
