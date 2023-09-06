import Link from "next/link";
import cart1 from "../public/cart1.svg";
export const Cart1 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <Link href="/cart">
      <img className="w-6 h-6" src={cart1.src} style={override} />
    </Link>
  );
};


