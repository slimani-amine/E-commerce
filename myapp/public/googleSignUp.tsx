/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconGoogle } from "./IconGoogle";

interface Props {
  className: any;
  icon: JSX.Element;
  divClassName: any;
}

export const GoogleSignUp = ({
  className,
  icon = <IconGoogle className="!relative !w-[24px] !h-[24px]" />,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-[10px] px-[86px] py-[16px] relative rounded-[4px] border border-solid border-[#00000066] ${className}`}
    >
      <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
        {icon}
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[color:var(--text)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap  ${divClassName}`}
        >
          Sign up with Google
        </div>
      </div>
    </div>
  );
};
