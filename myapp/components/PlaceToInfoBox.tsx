export const PlaceToInfoBox = ({
  override, placeHolder, tyPe
}: {
  override?: React.CSSProperties;
  placeHolder?: String;
  tyPe?: String
}) => {
  return (
    <input
      placeholder={placeHolder}
      type={tyPe}
      className="overflow-hidden rounded w-[470px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
      style={override}
    />
  );
};
