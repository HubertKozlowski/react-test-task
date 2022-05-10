import React from "react";
import { Button } from "../../../shared";
import { IconWithText } from "../../../shared/IconWithText";

const FEATURES_LIST: { id: number; icon: string; description: string }[] = [
  { id: 1, icon: "icon1.svg", description: "Lorem ipsum" },
  { id: 2, icon: "icon2.svg", description: "Lorem ipsum" },
  { id: 3, icon: "icon3.svg", description: "Lorem ipsum" },
];

export const Features = (): JSX.Element => {
  const onClick = (id: number) => {
    console.log(id);
  };

  return (
    <div className="my-8 flex justify-center space-x-4">
      {FEATURES_LIST.map(({ id, icon, description }) => {
        return (
          <Button key={id} onClick={() => onClick(id)}>
            <IconWithText iconName={icon}>{description}</IconWithText>
          </Button>
        );
      })}
    </div>
  );
};
