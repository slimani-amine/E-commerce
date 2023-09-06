import Link from "next/link";
import line_16 from "../public/line_16.svg";
export const Roadmap = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex items-center gap-3" style={override}>
      <Link href="/" className="opacity-50 text-black text-sm font-normal leading-[21px]">
        Account
      </Link>
      <img className="[rotate:117.1deg] w-[13px] h-0" src={line_16.src} />
      <Link href="/" className="text-black text-sm font-normal leading-[21px]">Nothing</Link>
    </div>
  );
};
