import iconSend from "./iconSend.svg";
export const IconSend = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-6 h-6" src={iconSend.src} style={override} />;
};
