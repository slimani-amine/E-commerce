export const Cart = ({ override }: { override?: React.CSSProperties }) => {
  const jwt = require("jsonwebtoken");
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const decodedToken = jwt.decode(token);
  var idUser = 0;
  if (decodedToken !== null) {
    idUser = decodedToken.id;
  }
  return (
    <div
      className="relative w-full h-[900px] bg-white font-[Poppins] "
      style={override}
    >
      <div>{idUser}</div>
    </div>
  );
};
