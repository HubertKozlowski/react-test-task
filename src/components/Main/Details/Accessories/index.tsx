import React, { useState } from "react";
import Image from "next/image";
import { Accordion } from "../../../../shared/Accordion";
import { IconWithText } from "../../../../shared/IconWithText";
import { Accessory } from "./Accessory";
import { ITEMS } from "./mock-details";

const Title = () => (
  <IconWithText iconName="icon2.svg">
    <span className="mr-2">Lorem ipsum</span>
    <Image
      src="/questionMark.svg"
      width={12}
      height={12}
      alt="questionMark icon"
    />
  </IconWithText>
);

export const Accessories = (): JSX.Element => {
  const [activeItemId, setActiveItemId] = useState<number | undefined>(
    undefined
  );

  const updateActiveItem = (id: number): void => {
    setActiveItemId((prevState) => (prevState === id ? undefined : id));
  };

  return (
    <div>
      <Accordion title={<Title />}>
        <div className="grid grid-cols-3 gap-4 mr-4">
          {ITEMS.map((accessoryItem) => (
            <Accessory
              key={accessoryItem.id}
              activeItemId={activeItemId}
              {...accessoryItem}
              onAccessoryClick={updateActiveItem}
            />
          ))}
        </div>
      </Accordion>
    </div>
  );
};
