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
          <Link href="/"className="text-black text-base font-normal leading-6">Home</Link>
          <UnderLine />
        </div>
      );
    case "Home":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/" className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-base font-normal leading-6">
            Home
          </Link>
        </div>
      );
    case "Header-Contact-Hover":
      return (
        <div className="flex flex-col items-center" style={override}>
          <Link href="/contact" className="text-black text-base font-normal leading-6">Contact</Link>
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
          <Link href="/contact"className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-base font-normal leading-6">
            Contact
          </Link>
        </div> 
      );
    case "Header-About Hover":
      return (
        <div className="flex flex-col items-center " style={override }>
          <Link href="/about" className="text-black text-base font-normal leading-6">About</Link>
          <UnderLine
            override={{
              height: "0px",
              width: "48px",
            }}
          />
        </div>
      );
    case "About":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/about" className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-base font-normal leading-6">
            About
          </Link>
        </div>
      );
    case "Header-Sign Up Hover":
      return (
        <div className="flex flex-col items-center" style={override}>
          <Link href="/signUp" className="text-black text-base font-normal leading-6">Sign Up</Link>
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
          <Link href="/signup"className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-base font-normal leading-6">
            Sign Up
          </Link>
        </div>
      );
    default:
      return null;
  }
};
