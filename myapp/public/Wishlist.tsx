import React, { useEffect, useState } from "react";
import vector from "../public/vector.svg";
import Link from "next/link";
import { Badge } from "antd";
import { eventEmitter } from "../components/eventEmitter"; 


interface WishlistProps {
  wishlist: string;
  iduser: string;
}
export const Wishlist: React.FC<WishlistProps> = ({
  wishlist,
  iduser,
}: WishlistProps) => {
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
  const [wish, setWish] = useState<number>(0);
  const [sumwish, setSumwish] = useState<string | null>(null);
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key ===`sumwish${idUser}`) {
        setSumwish(e.newValue);
      }
    };

    const handleLocalChange = (value: string) => {
      setSumwish(value);
    };

    window.addEventListener("storage", handleStorageChange);
    eventEmitter.on("sumwishChanged", handleLocalChange);  

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      const currentEvents = eventEmitter.events["sumwishChanged"] || [];
      eventEmitter.events["sumwishChanged"] = currentEvents.filter(l => l !== handleLocalChange);
    };
  }, []);
  switch (wishlist) {
    case "off":
      return null;
    case "On":
      return (
        <div className="mt-4">
          <Link href={`/wishlist?userid:${iduser}`}>
            <Badge count={sumwish}>
              <img src={vector.src} alt="Wishlist Icon" />
            </Badge>
          </Link>
        </div>
      );
    default:
      return null;
  }
};
