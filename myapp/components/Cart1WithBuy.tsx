import { eventEmitter } from "./eventEmitter";
import Link from "next/link";
import { Cart1 } from "./Cart1";
import { Badge } from "antd";
import { useEffect, useState } from "react";

export const Cart1WithBuy = ({
  override,
  cart,
  iduser,
}: {
  override?: React.CSSProperties;
  cart: string;
  iduser: String;
}) => {
  const jwt = require("jsonwebtoken");
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const decodedToken = jwt.decode(token);
  var idUser = 0;
  if (decodedToken !== null) {
    idUser = decodedToken.id;
  }
  const [sumcart, setSumcart] = useState<string | null>(null);
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === `sumcart${idUser}`) {
        setSumcart(e.newValue);
      }
    };

    const handleLocalChange = (value: string) => {
      setSumcart(value);
    };

    window.addEventListener("storage", handleStorageChange);
    eventEmitter.on("sumcartChanged", handleLocalChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      const currentEvents = eventEmitter.events["sumcartChanged"] || [];
      eventEmitter.events["sumcartChanged"] = currentEvents.filter(
        (l) => l !== handleLocalChange
      );
    };
  }, []);

  switch (cart) {
    case "On":
      return (
        <Link href={`/cart?userid:${iduser}`}>
          <Badge count={sumcart}>
            <div className="relative w-8 h-8" style={override}>
              <Cart1
                override={{
                  position: "absolute",
                  top: "25%",
                  left: "3.13%",
                  right: "21.88%",
                  bottom: "0%",
                }}
              />
            </div>
          </Badge>
        </Link>
      );
    case "off":
      return (
        <div className="relative w-6 h-6" style={override}>
          <Cart1
            override={{
              position: "absolute",
              top: "0%",
              left: "0%",
              right: "0%",
              bottom: "0%",
            }}
          />
        </div>
      );
    default:
      return null;
  }
};
