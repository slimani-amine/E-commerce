import React, { ReactNode } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { TopHeader } from "./TopHeader";
import { Footer } from "./Footer";
import { Line_3 } from "../public/Line_3";
import { Roadmap } from "./Roadmap";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
     {props.children}
      <TopHeader
        override={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      />
      <HeaderComponent
        override={{
          position: "absolute",
          top: "88px",
          left: "135px",
        }}
      />
      <Line_3
        override={{
          position: "absolute",
          top: "142px",
          left: "0px",
        }}
      />
      <Roadmap
        override={{
          position: "absolute",
          top: "222px",
          left: "135px",
        }}
      />
     
      <Footer
        override={{
          position: "absolute",
          top: "1093px",
          left: "0px",
        }}
      />
    </>
  );
};

export default Layout;
