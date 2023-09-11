import { Logo } from "../public/Logo";
import { Header } from "./Header";
import { SearchComponentSet } from "./SearchComponentSet";
import { Wishlist } from "../public/Wishlist";
import { Cart1WithBuy } from "./Cart1WithBuy";
import { User } from "./User";
import { useState } from "react";

export const HeaderComponent = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const [onoff, setonoff] = useState("off");
  const jwt = require("jsonwebtoken");
  const SECRET_KEY =
    "44999d06057a26ead3e8d889f16c2b6eb5e852f9bf074a365361e8eaa50833828e4ca7698141cda4d3b932c5d47ae27adbe0d95e320c8773ff78fd3ba9c7acca";
  function isTokenOpen(token: String) {
    try {
      jwt.verify(token, SECRET_KEY);
      return true;
    } catch (error) {
      return false;
    }
  }

  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  if (isTokenOpen(token)) {
    console.log("Token is open/valid.");
    setonoff("on");
  } else {
    console.log("Token is not open/invalid.");
  }

  return (
    <div
      className="flex flex-wrap items-center justify-between px-4 py-2 md:gap-[148px]"
      style={override}
    >
      <div className="flex flex-wrap items-start md:gap-40">
        <Logo />

        <div className="flex flex-wrap items-start gap-4 md:gap-12 mt-2 md:mt-0">
          <Header header="Header-Home Hover" />
          <Header header="Contact" />
          <Header header="About" />
          <Header header="Sign Up" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0">
        <SearchComponentSet property_1="Active" />

        <div className="flex items-center gap-4">
          <Wishlist wishlist="off" />
          <Cart1WithBuy cart="off" />
          <User user={onoff} />
        </div>
      </div>
    </div>
  );
};
