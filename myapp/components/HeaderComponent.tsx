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
    <div className="flex flex-wrap items-center justify-between px-4 py-2 md:gap-[148px]" style={override}>
      
      <div className="flex flex-wrap items-start md:gap-40">
        <Logo />
        
        <div className="flex flex-wrap items-start gap-4 md:gap-12 mt-2 md:mt-0">
          <Header header="Header-Home Hover" />
          <Header header="Contact" />
          <Header header="About" />
          <Header header="Sign Up" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0">
        <SearchComponentSet property_1="Active" />

        <div className="flex items-center gap-4">
          <Wishlist wishlist="off" />
          <Cart1WithBuy cart="On" />
          <User user="Off" />
        </div>
      </div>

    </div>
  );
};
