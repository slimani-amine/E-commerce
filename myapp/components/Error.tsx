import React from "react";
import Link from "next/link";

export const Error = (): JSX.Element => {
  return (
    <div className="w-[1437px] h-[600px] relative bg-white">
      <div className="left-[400px]  absolute flex-col justify-start items-center gap-10 inline-flex">
        <div className="text-black text-[110px] font-medium leading-[115px] tracking-[3.30px]">
          404 Not Found
        </div>
        <div className="text-black text-base font-normal leading-normal">
          Your visited page not found. You may go home page.
        </div>
      </div>
      <div className="px-12 py-4  left-[700px] top-[250px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
        <Link
          href="/"
          className="text-neutral-50 text-base font-medium leading-normal"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};
