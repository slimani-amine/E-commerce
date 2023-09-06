import Link from "next/link";
import { Cart1 } from "./Cart1";
export const Cart1WithBuy = ({
  override,
  cart,
}: {
  override?: React.CSSProperties;
  cart: string;
}) => {
  switch (cart) {
    case "On":
      return (
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
          <div>
            <div className="absolute left-[93.75%] -right-[90.75%] w-full top-[11.76%] -bottom-[6%] h-[94.12%] bg-[rgb(219,_68,_68)] rounded-[50%]" />
            <Link href="/cart" className="absolute left-[125%] -right-[68.75%] w-[43.75%] top-[5.50%] -bottom-[5.88%] h-full text-neutral-50 text-xs font-normal leading-[18px]">
              2
            </Link>
          </div>
        </div>
      );
    case "Off":
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
