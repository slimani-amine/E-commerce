import Link from "next/link";
import userOff from "../public/userOff.svg";
import userOn from "../public/userOn.svg";
import { useState } from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

export const User = ({ user, iduser }: { user: String; iduser: String }) => {
  const [href, setHref] = useState("/logIn");
  const [hidden, setHidden] = useState(false);
  let userSrc;
  if (user === "off") {
    userSrc = userOff;
  } else {
    userSrc = userOn;
  }
  const deleteToken = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <Link href={user === "On" ? "" : "/logIn"}>
        <img
          className="w-8 h-8 mr-9"
          src={userSrc.src}
          onClick={() => {
            setHidden(!hidden);
          }}
        />
      </Link>
      <Card
        className={
          hidden
            ? "absolute top-15 right-10 "
            : "absolute top-15 right-10 hidden"
        }
      >
        <List className={user === "On" ? "" : "hidden"}>
          <Link href={`/account?idUser=${iduser}`}>
            <ListItem>Manage My Account</ListItem>
          </Link>
          <ListItem>My Order</ListItem>
          <ListItem>My Reviews</ListItem>
          <Link
            href="/"
            onClick={() => {
              deleteToken();
            }}
          >
            <ListItem>Logout</ListItem>
          </Link>
        </List>
      </Card>
    </div>
  );
};
