import Link from "next/link";
import line_16 from "../public/line_16.svg";
import { useRouter } from "next/router";
import signUp from "../pages/signup";
export const Roadmap = ({ override }: { override?: React.CSSProperties }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  if (currentPath !== "/" && currentPath !== "/dropdown") {
    return (
      <div className=" ml-9 flex items-center gap-3" style={override}>
        <Link href="/" className="opacity-50 text-black text-sm font-normal ">
          Home
        </Link>
        <img className="[rotate:117.1deg] w-[13px] h-0 " src={line_16.src} />
        <Link href={currentPath}>{currentPath}</Link>
      </div>
    );
  } else {
    return <div></div>;
  }
};
