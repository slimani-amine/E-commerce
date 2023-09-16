import React, { useEffect, useState } from "react";
import vector from "../public/vector.svg";
import Link from "next/link";
import { Badge } from "antd";
import axios from "axios";

interface WishlistProps {
  wishlist: string;
  iduser: string; 
}

export const Wishlist: React.FC<WishlistProps> = ({
  wishlist,
  iduser,
}: WishlistProps) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [wish, setWish] = useState<number>(0); 
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/wishList/getAllWishList/${iduser}`);
        setWish(result.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWishlist();
  }, [trigger]);

  switch (wishlist) {
    case "off":
      return null;
    case "On":
      return (
        <div className="mt-4">
          <Link href={`/wishlist?userid:${iduser}`}>
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
