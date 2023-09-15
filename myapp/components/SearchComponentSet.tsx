export const SearchComponentSet = ({
  override,
  property_1,
}: {
  override?: React.CSSProperties;
  property_1: string;
}) => {
  switch (property_1) {
    case "Active":
      return (
        <input
          className="flex flex-col justify-center items-center pl-5 pr-3 py-[17px] rounded bg-neutral-100 w-[230px] "
          style={override}
          placeholder="What are you looking for?"
        />
      );
    default:
      return null;
  }
};
