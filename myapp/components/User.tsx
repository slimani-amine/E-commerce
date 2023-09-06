import Link from "next/link";
import userOff from "../public/userOff.svg";
import userOn from "../public/userOn.svg";
export const User = ({
  override,
  user,
}: {
  override?: React.CSSProperties;
  user: string;
}) => {
  let userSrc;
  if (user === "Off") {
    userSrc = userOff;
  } else {
    userSrc = userOn;
  }
  return (<Link href="/cart"> 
  <img className="w-8 h-8" src={userSrc.src} style={override} />
  </Link>
  );
};
