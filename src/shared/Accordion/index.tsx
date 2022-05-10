import React, { useRef, useState } from "react";
import Image from "next/image";

interface AccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const Accordion = ({ children, title }: AccordionProps): JSX.Element => {
  // INFO: in this case I would consider using useReducer or state machine
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const [rotate, setRotate] = useState<string>("transform duration-700 ease");
  const [overflow, setOverflow] = useState<string>("overflow-hidden");

  const contentSpace = useRef<HTMLDivElement>(null);

  const toggleAccordion = (): void => {
    setIsOpen((prevState) => !prevState);
    setHeight(isOpen ? "0px" : `${contentSpace.current?.scrollHeight}px`);
    setOverflow(
      contentSpace.current!.scrollHeight >= 384
        ? "overflow-y-scroll"
        : "overflow-hidden"
    );
    setRotate(
      isOpen
        ? "transform duration-500 ease"
        : "transform duration-500 ease rotate-180"
    );
  };

  return (
    <div className="p-8 flex flex-col rounded-s accordion-background">
      <button
        className="appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        {title}
        <Image
          src={`/arrow.svg`}
          width={12}
          height={12}
          alt="arrow icon"
          className={`${rotate} inline-block`}
        />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className={`${overflow} h-96 transition-max-height duration-700 ease-in-out`}
      >
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};
