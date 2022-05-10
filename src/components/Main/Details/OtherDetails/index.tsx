import React from "react";
import { Accordion } from "../../../../shared/Accordion";
import { IconWithText } from "../../../../shared/IconWithText";

const Title = () => (
  <IconWithText iconName="icon2.svg">Lorem ipsum</IconWithText>
);

export const OtherDetails = (): JSX.Element => {
  return (
    <div>
      <Accordion title={<Title />}>
        <p>Some other details</p>
      </Accordion>
    </div>
  );
};
