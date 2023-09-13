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
      <TopHeader />
      <HeaderComponent />
      <hr />
      <br/><br/><br/>
      <br/><br/>
      <Roadmap />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
