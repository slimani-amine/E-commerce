import Link from "next/link";
import { DropDown } from "../public/DropDown";
export const TopHeader = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden relative w-screen h-12 bg-black "
      style={override}
    >
      <div className="flex items-start gap-[231px] absolute right-[136px] top-3">
        <div className="flex items-center gap-2">
          <p className="w-[474px] h-[18px] text-neutral-50 text-sm font-normal leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href="/" className="text-neutral-50 text-sm font-semibold leading-6 underline">
            ShopNow
          </Link>
        </div>
        <div className="flex justify-center items-center gap-[5px]">
          <p className="text-neutral-50 text-sm font-normal leading-[21px]">
            English
          </p>
          <DropDown />
        </div>
      </div>
    </div>
  );
};
