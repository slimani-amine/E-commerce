import dropDown from "../public/dropDown.svg";
export const DropDown = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-6 h-6" src={dropDown.src} style={override} />;
};
