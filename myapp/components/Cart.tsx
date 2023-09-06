import { TopHeader } from "./TopHeader";
import { HeaderComponent } from "./HeaderComponent";
import { Line_3 } from "../public/Line_3";
import { Roadmap } from "./Roadmap";
import { Footer } from "./Footer";

export const Cart = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="relative w-full h-[1533px] bg-white font-[Poppins] "
      style={override}
    >
      <TopHeader
        override={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      />
      <HeaderComponent
        override={{
          position: "absolute",
          top: "88px",
          left: "135px",
        }}
      />
      <Line_3
        override={{
          position: "absolute",
          top: "142px",
          left: "0px",
        }}
      />
      <Roadmap
        override={{
          position: "absolute",
          top: "222px",
          left: "135px",
        }}
      />
<div>
            Cart
        </div>
      <Footer
        override={{
          position: "absolute",
          top: "1093px",
          left: "0px",
        }}
      />
    </div>
  );
};
