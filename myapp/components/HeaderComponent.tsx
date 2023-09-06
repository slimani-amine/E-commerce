import { Logo } from "../public/Logo";
import { Header } from "./Header";
import { SearchComponentSet } from "./SearchComponentSet";
import { Wishlist } from "../public/Wishlist";
import { Cart1WithBuy } from "./Cart1WithBuy";
import { User } from "./User";
export const HeaderComponent = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className="flex items-center gap-[148px]" style={override}>
      <div className="flex items-start gap-40">
        <Logo />
        <div className="flex items-start gap-12">
          <Header header="Header-Home Hover" />
          <Header header="Contact" />
          <Header header="About" />
          <Header header="Sign Up" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <SearchComponentSet property_1="Active" />
        <div className="flex justify-center items-center gap-4">
          <Wishlist wishlist="off" />
          <Cart1WithBuy cart="On" />
          <User user="Off" />
        </div>
      </div>
    </div>
  );
};
