import groupImage1 from "./groupImage1.svg";
export const IconCopyright = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className="overflow-hidden relative w-5 h-5" style={override}>
      <img
        className="ml-45 w-auto top-[1.67px] bottom-[1.67px] h-auto"
        src={groupImage1.src}
      />
    </div>
  );
};
