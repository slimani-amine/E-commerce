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
    case "Home":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/" className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-base font-normal leading-6">
            Home
          </Link>
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
    case "About":
      return (
        <div className="relative w-12 h-6" style={override}>
          <Link href="/about" className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-base font-normal leading-6">
            About
          </Link>
        </div>
      );
    case "Sign Up":
      return (
        <div className="relative w-[61px] h-6" style={override}>
          <Link href="/signup" className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-base font-normal leading-6">
            Sign Up
          </Link>
        </div>
      );
    default:
      return null;
  }
};
