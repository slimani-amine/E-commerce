import Link from "next/link";
import { UnderLine } from "./UnderLine";

export const Header = ({
  override,
  header,
}: {
  override?: React.CSSProperties;
  header: string;
}) => {
  switch (header) {
    case "Header-Home Hover":
      return (
        <div className="flex flex-col items-center" style={override}>
          <Link href="/">
            Home
          </Link>
          <UnderLine />
        </div>
      );
    case "Home":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/">
            Home
          </Link>
        </div>
      );
    case "Header-Contact-Hover":
      return (
        <div className="flex flex-col items-center" style={override}>
          <Link href="/contact">
            Contact
          </Link>
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
          <Link href="/contact">
            Contact
          </Link>
        </div> 
      );
    case "About":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/about">
            About
          </Link>
        </div>
      );
    case "Header-Sign Up Hover":
      return (
        <div className="flex flex-col items-center" style={override}>
          <Link href="/signUp">
            Sign Up
          </Link>
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
        <div className="relative w-[61px] h-6" style={override}>
          <Link href="/signup">
            Sign Up
          </Link>
        </div>
      );
    default:
      return null;
  }
};
