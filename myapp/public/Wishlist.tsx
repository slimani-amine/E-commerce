import wishlistOff from "../public/wishlistOff.svg";
import vector from "../public/vector.svg";
export const Wishlist = ({
  override,
  wishlist,
}: {
  override?: React.CSSProperties;
  wishlist: string;
}) => {
  switch (wishlist) {
    case "Off":
      return <img className="w-8 h-8" src={wishlistOff.src} style={override} />;
    case "On":
      return (
        <div className="overflow-hidden relative w-8 h-8" style={override}>
          <img
            className="absolute left-[18.75%] right-[18.75%] w-[62.5%] top-[21.88%] bottom-[21.88%] h-[56.25%]"
            src={vector.src}
          />
          <div>
            <div className="absolute left-full -right-full w-full top-[5.88%] bottom-[0%] h-[94.12%] bg-[rgb(219,_68,_68)] rounded-[50%]" />
            <p className="absolute left-[125%] -right-[68.75%] w-[43.75%] top-[0%] bottom-[0%] h-full text-neutral-50 text-xs font-normal leading-[18px]">
              4
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
