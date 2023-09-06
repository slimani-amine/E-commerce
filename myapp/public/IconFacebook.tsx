import iconFacebook from "./iconFacebook.svg";
export const IconFacebook = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-6 h-6" src={iconFacebook.src} style={override} />;
};
