import React from "react";
import { CustomLink } from "../../../../shared";
import { Accordion } from "../../../../shared/Accordion";
import { IconWithText } from "../../../../shared/IconWithText";

const MEDIA: { id: number; path: string; icon: string; description: string }[] =
  [
    {
      id: 1,
      path: "/",
      icon: "external.svg",
      description: "Lorem ipsum.com",
    },
    { id: 2, path: "/", icon: "discord.svg", description: "@Lorem ipsum" },
    {
      id: 3,
      path: "https://www.smashingmagazine.com/",
      icon: "instagram.svg",
      description: "@Lorem ipsum",
    },
    {
      id: 4,
      path: "https://www.google.com",
      icon: "twitter.svg",
      description: "@Lorem ipsum",
    },
  ];

const Title = (): JSX.Element => (
  <IconWithText iconName="icon2.svg">Lorem ipsum</IconWithText>
);

export const SocialMedia = (): JSX.Element => {
  return (
    <div>
      <Accordion title={<Title />}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="my-8 grid grid-cols-2 gap-4">
          {MEDIA.map(({ id, path, icon, description }) => {
            return (
              <CustomLink key={id} route={path}>
                <IconWithText iconName={icon} iconWidth={24} iconHeight={24}>
                  {description}
                </IconWithText>
              </CustomLink>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
};
