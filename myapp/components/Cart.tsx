// export const Cart = ({ override }: { override?: React.CSSProperties }) => {
//   return (
//     <div
//       className="relative w-full h-[1533px] bg-white font-[Poppins] "
//       style={override}
//     >
//       <div>Cart</div>
//     </div>
//   );
// };
export const Cart = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="relative w-full h-[900px] bg-white font-[Poppins] "
      style={override}
    >
      {/* <TopHeader
        override={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      /> */}
      {/* <HeaderComponent
        override={{
          position: "absolute",
          top: "88px",
          left: "135px",
        }}
      />
      <Line_3
        override={{
          position: "absolute",
          top: "142px",
          left: "0px",
        }}
      />
      <Roadmap
        override={{
          position: "absolute",
          top: "222px",
          left: "135px",
        }}
      /> */}
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
      {/* <Footer
        override={{
          position: "absolute",
          top: "1093px",
          left: "0px",
        }}
      />
      <div>Cart</div> */}
    </div>
  );
};






