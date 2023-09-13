import Link from "next/link";
import { Cart1 } from "./Cart1";
import { Badge } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export const Cart1WithBuy = ({
  override,
  cart,
}: {
  override?: React.CSSProperties;
  cart: string;
}) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [cartshop, setcartshop] = useState<number | undefined>(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/getAllProducts")
      .then((result) => {
        setcartshop(result.data.length);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, [trigger]);


  switch (cart) {
    case "On":
      return (

        <Link href="/wishlist">
        <Badge count={cartshop}>
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
