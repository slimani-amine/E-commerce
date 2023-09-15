import Link from "next/link";
import React from "react";

import { UnderLine } from "./UnderLine";

export const Header = ({
  user,
  override,
  header,
}: {
  user: String;
  override?: React.CSSProperties;
  header: string;
}) => {
  switch (header) {
    case "Header-Home Hover":
      return (
        <div className="flex flex-col items-center" style={override}>
          <Link href={user === "On" ? "/dropdown" : "/"}>Home</Link>
          <UnderLine />
        </div>
      );
    case "Home":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/">Home</Link>
        </div>
      );
    case "Header-Contact-Hover":
      return (
        <div className="flex flex-col items-center" style={override}>
          <Link href="/contact">Contact</Link>
          <UnderLine
            override={{
              height: "0px",
              width: "66px",
            }}
          />
        </div>
      );
    case "Contact":
      return (
        <div className="relative w-[66px] h-6" style={override}>
          <Link href="/contact">Contact</Link>
        </div>
      );
    case "About":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/about">About</Link>
        </div>
      );
    case "Header-Sign Up Hover":
      return (
        <div
          style={override}
          className={user === "On" ? "flex flex-col items-center " : "hidden"}
        >
          <Link href="/signUp">Sign Up</Link>
          <UnderLine
            override={{
              height: "0px",
              width: "61px",
            }}
          />
        </div>
      );
    case "Sign Up":
      return (
        <div
          className={user === "On" ? "relative w-[61px] h-6 " : "hidden"}
          style={override}
        >
          <Link href="/signup">Sign Up</Link>
        </div>
      );
    default:
      return null;
  }
};
