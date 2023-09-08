/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  text: string;
  line: string;
  text1: string;
  hasLine: boolean;
  hasDiv: boolean;
  hasImg: boolean;
  visible: boolean;
  hasLine1: boolean;
  hasDiv1: boolean;
}

export const Roadmap = ({
  className,
  text = "Account",
  line = "https://c.animaapp.com/25EkhapH/img/line-16.svg",
  text1 = "Nothing",
  hasLine = true,
  hasDiv = true,
  hasImg = true,
  visible = true,
  hasLine1 = true,
  hasDiv1 = true,
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-[12px] relative ${className}`}>
      <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
        {text}
      </div>
      <img className="relative w-[6.89px] h-[12.2px] object-cover" alt="Line" src={line} />
      <div className="relative w-fit mt-[-1.00px] [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
        {text1}
      </div>
      {hasLine && (
        <img
          className="relative w-[6.89px] h-[12.2px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/25EkhapH/img/line-16.svg"
        />
      )}

      {hasDiv && (
        <div className="relative w-fit mt-[-1.00px] [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
          {text1}
        </div>
      )}

      {hasImg && (
        <img
          className="relative w-[6.89px] h-[12.2px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/25EkhapH/img/line-16.svg"
        />
      )}

      {visible && (
        <div className="relative w-fit mt-[-1.00px] [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
          {text1}
        </div>
      )}

      {hasLine1 && (
        <img
          className="relative w-[6.89px] h-[12.2px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/25EkhapH/img/line-16.svg"
        />
      )}

      {hasDiv1 && (
        <div className="relative w-fit mt-[-1.00px] [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
          {text1}
        </div>
      )}
    </div>
  );
};
