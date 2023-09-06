import group from "./group.svg";
export const IconInstagram = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className="overflow-hidden relative w-6 h-6" style={override}>
      <img
        className="absolute left-[3px] right-[3px] w-auto top-[3px] bottom-[3px] h-auto"
        src={group.src}
      />
    </div>
  );
};
