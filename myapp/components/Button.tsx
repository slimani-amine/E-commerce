import Link from "next/link";

export const Button = ({
  override,
  button,
  hover,
}: {
  override?: React.CSSProperties;
  button: string;
  hover: string;
}) => {
if (button === "Primary" && hover === "Yes") {
    return (
      <Link
        href="/"
        className="text-neutral-50 text-base font-medium leading-6"
      >
        <button
          className="flex justify-center items-center px-12 py-4 rounded bg-[rgb(224,_117,_117)]"
          style={override}
        >
          View All Products
        </button>
      </Link>
    );
  } else if (button === "update" && hover === "Yes") {
    return (
      <Link
        href="/"
        className="text-neutral-50 text-base font-medium leading-6"
      >
        <button
          className="flex justify-center items-center px-12 py-4 rounded bg-[rgb(224,_117,_117)]"
          style={override}
        >
          UPDATE
        </button>
      </Link>
    );
  } else if (button === "update" && hover === "No") {
    return (
      <Link
        href="/"
        className="text-neutral-50 text-base font-medium leading-6"
      >
        <button
          className="flex justify-center items-center px-12 py-4 rounded bg-[rgb(224,_117,_117)]"
          style={override}
        >
          UPDATE
        </button>
      </Link>
    );
  } else if (button === "Secondary" && hover === "No") {
    return (
      <Link href="/" className="text-black text-base font-medium leading-6">
        <button
          className="flex justify-center items-center px-12 py-4 rounded border-solid border-[rgba(0,_0,_0,_0.5)] border"
          style={override}
        >
          View All Products
        </button>
      </Link>
    );
  } else if (button === "Secondary" && hover === "Yes") {
    return (
      <Link
        href="/"
        className="text-[rgb(125,_129,_132)] text-base font-medium leading-6"
      >
        <button
          className="flex justify-center items-center px-12 py-4 rounded border-solid border-[rgba(0,_0,_0,_0.5)] border"
          style={override}
        >
          View All Products
        </button>
      </Link>
    );
  } else if (button === "Small" && hover === "No") {
    return (
      <button
        onClick={() => {}}
        className="flex justify-center items-center px-12 py-2.5 rounded bg-[rgb(219,_68,_68)]"
        style={override}
      >
        <p className="text-neutral-50 text-base font-medium leading-6">
          Add To Cart
        </p>
      </button>
    );
  } else if (button === "Small" && hover === "Yes") {
    return (
      <button
        className="flex justify-center items-center px-12 py-2.5 rounded bg-[rgb(224,_117,_117)]"
        style={override}
      >
        <p className="text-neutral-50 text-base font-medium leading-6">
          Add To Cart
        </p>
      </button>
    );
  } else {
    return null;
  }
};
