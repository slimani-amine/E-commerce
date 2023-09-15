import React, { useState, useEffect } from 'react';
import axios from 'axios';



export const Cart = ({ override }: { override?: React.CSSProperties }) => {

  const [quantity, setQuantity] = useState(1); 
  const [total, setTotal] = useState(0);
  const cart = [
    {
      id: 1,
      price: 10, 
      images:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      quantity: 1,
    },
    {
      id: 2,
      price: 20, 
      images:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      quantity: 1,
    },
    
  ];

  useEffect(() => {
    const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  }, [cart]);


  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );

    
  return (
    <div
      className="relative w-full h-[1533px] bg-white font-[Poppins] "
      style={override}
    >
      <div>
      <div className="ml-[150px] mt-[120px] w-[1400px] h-[80px] border-2  shadow-xl border-white">
          <h1 className="text-xl  mt-[13px] ml-[50px] ">Products</h1>
          <h1 className="text-xl  ml-[470px] mt-[-26px]">Price</h1>
          <h1 className="text-xl  ml-[850px] mt-[-26px]">Quantity</h1>
          <h1 className="text-xl  ml-[1220px] mt-[-26px]">Subtotal</h1>
        </div>
        <div>
          {cart.map((product)=>{
            return(
          <div className="ml-[150px] mt-[40px] w-[1400px] h-[80px] border-2 shadow-xl border-white">
            <img src={product.images} alt="productPhoto" className="h-[55px] w-[80px] mt-[13px] ml-[50px]" />
            <h1 className="ml-[470px] mt-[-43px] ">{product.price}</h1>
            <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  className="w-full h-full px-3 py-2 bg-transparent outline-none"
                />
            <h1 className="ml-[1250px] mt-[-30px] ">Total: ${product.price * product.quantity}</h1>

            <button className="button flex items-center justify-center space-x-2 p-4 border mt-[53px] w-[230px] border-black rounded-md hover:bg-red-500">
              <div className="view-all-products font-medium text-text-2 text-base">
                Return To Shop
              </div>
            </button>

            <button className="flex items-center justify-center space-x-2 p-4 border mt-[-60px] w-[230px] ml-[1166px] border-black rounded-md hover:bg-red-500">
              <div className="font-medium text-text-2 text-base">
                Update Cart
              </div>
            </button>

            <div className="frame flex items-end gap-16 mt-[70px] ">
              <div className="div-wrapper relative w-80 h-14 border border-black rounded overflow-hidden">
                <input
                  type="text"
                  className="input-field w-full h-full px-3 py-2 bg-transparent outline-none"
                  placeholder="Coupon Code"
                />
              </div>
              <button className="button flex items-center w-75 justify-center gap-2 p-4 border text-white border-black bg-red-500 rounded">
                <div className="view-all-products font-title-16px-medium text-text text-base whitespace-nowrap">
                  Apply Coupon
                </div>
              </button>
            </div>
            

          </div>
          )})}
        </div>

        <div className="frame  border-black border-2 rounded overflow-hidden relative w-96 h-[340px] ml-[1166px] mt-[150px]">
      <div className="text-wrapper absolute top-8 left-8 font-title-20px-medium text-text-2 text-lg whitespace-nowrap">
        Cart Total
      </div>
      <div className="div absolute mt-[60px] left-8 gap-x-36">
        <div className=" mt-[30px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Subtotal:
        </div>
        <div className="ml-[260px] mt-[-25px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          $1750
        </div>
        <hr className="mt-[14px] border-black" />
      </div>
      <div className="div-2 absolute top-60 left-8 gap-x-36">
        <div className=" mt-[-100px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Shipping:
        </div>
        <div className="ml-[262px] mt-[-25px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Free
        </div>
        <hr className="mt-[18px] border-black " />
      </div>
      <div className="div-3 absolute top-[197px] left-8 gap-x-36">
        <div className=" text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Total:
        </div>
        <div className="ml-[260px] mt-[-25px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          $1750
        </div>
      </div>
      <button className="w-[250px] mt-[250px] button absolute  ml-[65px] flex items-center justify-center gap-2 p-4 border border-black rounded bg-red-500">
        <div className=" view-all-products font-title-16px-medium text-white text-base whitespace-nowrap ">
          Process to checkout
        </div>
      </button>
      <div className="under-line absolute top-116 left-24 w-422 h-1 opacity-40 bg-black"></div>
      <div className="line-wrapper absolute top-172 left-24 w-422 h-1 opacity-40 bg-black"></div>
    </div>
        
      </div>
    </div>
  );
};



}


