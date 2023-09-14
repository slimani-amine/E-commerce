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
<div>
            <div className="ml-[180px] mt-[300px] w-[1650px] h-[60px] border-2 rounded">
              <h1 className="text-xl  mt-[13px] ml-[50px]">Products</h1>
              <h1 className="text-xl  ml-[560px] mt-[-26px]">Price</h1>
              <h1 className="text-xl  ml-[950px] mt-[-26px]">Quantity</h1>
              <h1 className="text-xl  ml-[1300px] mt-[-26px]">Subtotal</h1>
            </div>
            <div>
              <div className="ml-[180px] mt-[100px] w-[1650px] h-[60px] border-2 rounded">
<img src="product" alt="productPhoto" className="h-[40px] w-[80px]" />
<h1 className="ml-[570px] mt-[-18px]">Price</h1>
<div className=" ml-[965px] mt-[-40px] h-[40px] w-[70px] border-2">1</div>
              </div>
            </div>
        </div>

    </div>
  );
};






