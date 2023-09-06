import component_2 from "../public/component_2.svg";
export const Component_2 = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-6 h-6" src={component_2.src} style={override} />;
};
