import React from "react";

export const About = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="relative w-full h-[900px] bg-white font-[Poppins] "
      style={override}
    >
      <div>about</div>
    </div>
  );
};
