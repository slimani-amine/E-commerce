import { IconSend } from "./IconSend";
export const SendMail = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div >
      <input
        type="text"
        placeholder="Enter your Email"
        className="flex items-center gap-8 pl-4 py-3 rounded w-[217px] border-solid border-black border-[1.5px]"
        style={override}
      />
      <IconSend />
    </div>
  );
};
