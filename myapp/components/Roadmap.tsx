import Link from "next/link";
import line_16 from "../public/line_16.svg";
import { useRouter } from "next/router";
import signUp from "../pages/signup";
export const Roadmap = ({ override }: { override?: React.CSSProperties }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  if (currentPath !== "signup") {
    return (
      <div className="flex items-center gap-3" style={override}>
        <Link
          href="/"
          className="opacity-50 text-black text-sm font-normal leading-[21px]"
        >
          Home
        </Link>
        <img className="[rotate:117.1deg] w-[13px] h-0" src={line_16.src} />
        <Link
          href={currentPath}
          className="text-black text-sm font-normal leading-[21px]"
        >
          {currentPath}
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
};
