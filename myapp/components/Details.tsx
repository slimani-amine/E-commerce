import { useRouter } from "next/router";

const Details = ({ override }: { override?: React.CSSProperties }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div
      className="relative w-full h-[1533px] bg-white font-[Poppins]"
      style={override}
    >
      <div>ID: {id}</div>
    </div>
  );
};

export default Details;
