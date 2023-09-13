import React, { useEffect, useState } from "react";
import vector from "../public/vector.svg";
import Link from "next/link";
import { Badge } from "antd";
import axios from "axios";

interface WishlistProps {
  wishlist: string;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist }: WishlistProps) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [wish, setWish] = useState<number | undefined>(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:5000/wishList/getAllWishList")
      .then((result) => {
        setWish(result.data.length);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, [trigger]);

  switch (wishlist) {
    case "off":
      return null;
    case "On":
      return (
        <div className="mt-5">
          <Link href="/wishlist">
            <Badge count={wish}>
              <img src={vector.src} alt="Wishlist Icon" />
            </Badge>
          </Link>
        </div>
      );
    default:
      return null;
  }
};

export default Wishlist;
