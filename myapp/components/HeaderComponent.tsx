import { Logo } from "../public/Logo";
import { Header } from "./Header";
import { SearchComponentSet } from "./SearchComponentSet";
import {Wishlist} from "../public/Wishlist";
import { Cart1WithBuy } from "./Cart1WithBuy";
import { User } from "./User";

export const HeaderComponent = ({}: {}) => {
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
  } else {
    console.log("Token is not open/invalid.");
  }
  const decodedToken = jwt.decode(token);
  var idUser = "0";
  if (decodedToken !== null) {
    idUser = decodedToken.id;
  }
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-2 md:gap-[148px] mt-5">
      <div className="flex flex-wrap items-start md:gap-40 ml-10 ">
        <Logo user={idUser === "0" ? "On" : "off"} />
        <div className="flex flex-wrap items-start gap-4 md:gap-12  ">
          <Header
            user={idUser === "0" ? "off" : "On"}
            header="Header-Home Hover"
          />
          <Header user="ON" header="Contact" />
          <Header user="ON" header="About" />
          <Header user={idUser === "0" ? "On" : "off"} header="Sign Up" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0">
        <SearchComponentSet property_1="Active" />
        <div className="flex items-center gap-4">
          <Wishlist wishlist={idUser === "0" ? "off" : "On"} iduser={idUser}/>
          <Cart1WithBuy cart={idUser === "0" ? "off" : "On"} iduser={idUser}/>
          <User user={idUser === "0" ? "off" : "On"} iduser={idUser} />
        </div>
      </div>
    </div>
  );
};
