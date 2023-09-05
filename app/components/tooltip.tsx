"use client";

import { useState } from "react";

type TooltipProps = {
  displayText: string;
  tooltipText: string;
};

export default function Tooltip(props: TooltipProps) {
  const [show, setShow] = useState(false);

  const toggleTip = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="relative">
        <div
          role="tooltip"
          id="ttip"
          className={[
            "absolute -top-16 min-w-max rounded bg-rose p-4 font-thin text-white shadow",
            "transition-all duration-300",
            show ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          {props.tooltipText}
        </div>
        <div
          aria-describedby="ttip"
          onMouseOver={toggleTip}
          onMouseLeave={toggleTip}
          className="cursor-default"
        >
          {props.displayText}
        </div>
      </div>
    </>
  );
}
