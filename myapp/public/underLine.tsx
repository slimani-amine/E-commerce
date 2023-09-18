import React from "react";

interface Props {
  className: any;
}

export const UnderLine = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`relative w-[48px] h-px -top-px opacity-50 bg-[url(https://c.animaapp.com/6EjpvkRM/img/line-1-5.svg)] bg-cover bg-[50%_50%] ${className}`}
    />
  );
};
