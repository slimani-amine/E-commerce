import Link from "next/link";
import userOff from "../public/userOff.svg";
import userOn from "../public/userOn.svg";
import { useState } from "react";
export const User = ({
  override,
  user,
}: {
  override?: React.CSSProperties;
  user: string;
}) => {
  const[href,setHref]=useState("/logIn")
  let userSrc;
  if (user === "Off") {
    userSrc = userOff;
  } else if(user==="on"){
    userSrc = userOn;
    setHref("/accout")
  }
  return (<Link href={href}> 
  <img className="w-8 h-8" src={userSrc} style={override} />
  </Link>
  );
};
