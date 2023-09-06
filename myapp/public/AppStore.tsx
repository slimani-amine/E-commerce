import downloadAppstore from "./downloadAppstore.png";
export const AppStore = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden relative w-[110px] h-10 bg-black"
      style={override}
    >
      <div className="absolute w-[104px] left-[3px] h-[34px] top-[3px] origin-top-left border-solid border-white border-[0.6px] rounded overflow-hidden">
        <img
          className="origin-top-left h-full w-full"
          style={{
            transform: "scale(101.92%, 311.42%) translate(-0.94%, -33.94%)",
          }}
          src={downloadAppstore.src}
        />
      </div>
    </div>
  );
};
