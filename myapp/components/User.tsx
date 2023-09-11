import Link from "next/link";
import userOff from "../public/userOff.svg";
import userOn from "../public/userOn.svg";
import { useState } from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

export const User = ({
  override,
  user,
  idUser,
}: {
  override?: React.CSSProperties;
  user: string;
  idUser:String
}) => {
  const [href, setHref] = useState("/logIn");
  const [on, setOn] = useState("Off");
  const [hidden, setHidden] = useState(false);

  let userSrc;
  if (user === user) {
    userSrc = userOff;
  } else {
    userSrc = userOn;
  }
  return (
    <div>
      <Link href={on === "On" ? href : ""}>
        <img
          className="w-8 h-8 mr-9"
          src={userSrc.src}
          style={override}
          onClick={() => {
            setHidden(!hidden);
            console.log("hidden", hidden);
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
        <List>
          <Link href={`/account?idUser=${idUser}`}>
            <ListItem>Manage My Account</ListItem>
          </Link>
          <ListItem>My Order</ListItem>
          <ListItem>My Cancellations</ListItem>
          <ListItem>My Reviews</ListItem>
          <ListItem>Logout</ListItem>
        </List>
      </Card>
    </div>
  );
};
