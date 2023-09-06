import groupImage from "./groupImage.svg";
export const IconTwitter = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className="overflow-hidden relative w-6 h-6" style={override}>
      <img
        className="absolute -left-[5px] right-[1.94px] w-auto top-0 bottom-0 h-auto"
        src={groupImage.src}
      />
    </div>
  );
};
