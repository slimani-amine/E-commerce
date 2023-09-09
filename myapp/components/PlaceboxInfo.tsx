export const PlaceboxInfo = ({
  override,placeHolder,tyPe
}: {
  override?: React.CSSProperties;
  placeHolder:String;
  tyPe:String
}) => {
  return (
    <div className="relative w-[330px] h-[50px]" style={override}>
      <PlaceToInfoBox
        override={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0%",
          left: "0%",
          right: "0%",
          bottom: "0%",
        }}
        placeHolder={placeHolder}
        tyPe={tyPe}
      />
    </div>
  );
};
