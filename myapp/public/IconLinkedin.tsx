import iconLinkedin from "./iconLinkedin.svg";
export const IconLinkedin = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-6 h-6" src={iconLinkedin.src} style={override} />;
};
