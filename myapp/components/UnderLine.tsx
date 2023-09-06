import underLine from "../public/underLine.svg";
export const UnderLine = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-12 h-0" src={underLine.src} style={override} />;
};
