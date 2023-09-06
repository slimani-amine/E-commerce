import qrcode_1 from "./qrcode_1.jpg";
export const QrCode = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden relative w-20 h-20 bg-black"
      style={override}
    >
      <img
        className="absolute w-[76px] left-0.5 h-[76px] top-0.5 object-cover border-solid border-white border-[2.5px]"
        src={qrcode_1.src}
      />
    </div>
  );
};
