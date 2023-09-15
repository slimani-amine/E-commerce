import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

  const [data,setData]=useState([])
  const [trigger,setTrigger]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/wishList/getAllCart/${idUser}`)
    .then((result) => {
      setData(result.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
  },[trigger])
  return (
    <div className="relative bg-bg w-full h-[1200px] overflow-hidden text-left text-sm text-text2 font-title-12px-medium">
      <div className="absolute top-[100px] left-[135px] flex flex-col items-start justify-start gap-[80px] text-base">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[72px] overflow-hidden shrink-0">
              <div className="absolute top-[24px] left-[40px] flex flex-row items-center justify-start gap-[284px]">
                <div className="relative leading-[24px]">Product</div>
                <div className="relative leading-[24px]">Price</div>
                <div className="relative leading-[24px]">Quantity</div>
                <div className="relative leading-[24px]">Subtotal</div>
              </div>
            </div>
            {data &&
              data.map((e) => {
                return (
                  <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[102px] overflow-hidden shrink-0">
                    <div className="absolute top-[39px] left-[387px] leading-[24px]">
                      {e.price}
                    </div>
                    <div className="absolute top-[39px] left-[1063px] leading-[24px]">
                      $650
                    </div>
                    <div className="absolute top-[27.5px] left-[708.5px] rounded box-border w-[75px] h-[47px] overflow-hidden border-[1.5px] border-solid border-gray-200">
                      <div className="absolute top-[6px] left-[12px] w-12 flex flex-row items-center justify-start gap-[16px]">
                        <div className="relative leading-[24px]">01</div>
                        <div className="flex flex-col items-start justify-start">
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/dropupsmall.svg"
                          />
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/dropdownsmall.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_545px)] w-[54px] h-[54px] overflow-hidden">
                      <img
                        className="absolute h-[72.22%] w-[92.59%] top-[14.81%] right-[3.7%] bottom-[12.96%] left-[3.7%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/g27cq4500x500-1@2x.png"
                      />
                    </div>
                    <div className="absolute top-[39px] left-[114px] leading-[24px]">
                      {e.name}
                    </div>
                    <img
                      className="absolute top-[20px] left-[30px] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/iconcancel.svg"
                    />
                  </div>
                );
              })}
          </div>
          <div className="flex flex-row items-start justify-start gap-[757px]">
            <Link href="/dropdown">
              <div className="rounded flex flex-row py-4 px-12 items-center justify-center border-[1px] border-solid border-gray-300">
                <div className="relative leading-[24px] font-medium">
                  Return To Shop
                </div>
              </div>
            </Link>
            <div className="rounded flex flex-row py-4 px-12 items-center justify-center border-[1px] border-solid border-gray-300">
              <div className="relative leading-[24px] font-medium">
                Update Cart
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[173px]">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <input
              className="relative rounded box-border w-[300px] h-14 overflow-hidden shrink-0 border-[1px] border-solid border-text2"
              placeholder=" Coupon Code"
            />

            <div className="rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text bg-red-500">
              <div className="relative leading-[24px] font-medium text-white">
                Apply Coupon
              </div>
            </div>
          </div>
          <div className="relative rounded box-border w-[470px] h-[324px] overflow-hidden shrink-0 border-[1.5px] border-solid border-text2">
            <div className="absolute top-[32px] left-[24px] text-xl leading-[28px] font-medium">
              Cart Total
            </div>
            <div className="absolute top-[84px] left-[24px] flex flex-row items-start justify-start gap-[307px]">
              <div className="relative leading-[24px]">Subtotal:</div>
              <div className="relative leading-[24px]">$1750</div>
            </div>
            <div className="absolute top-[140px] left-[24px] flex flex-row items-start justify-start gap-[314px]">
              <div className="relative leading-[24px]">Shipping:</div>
              <div className="relative leading-[24px]">Free</div>
            </div>
            <div className="absolute top-[196px] left-[24px] flex flex-row items-start justify-start gap-[335px]">
              <div className="relative leading-[24px]">Total:</div>
              <div className="relative leading-[24px]">$1750</div>
            </div>
            <div className="absolute top-[236px] left-[120px] rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text bg-red-500">
              <div className="relative leading-[24px] font-medium text-white">
                Procees to checkout
              </div>
            </div>
            <img
              className="absolute top-[123px] left-[24px] w-[422px] h-px opacity-[0.4]"
              alt=""
              src="/underline.svg"
            />
            <img
              className="absolute top-[179px] left-[24px] w-[422px] h-px opacity-[0.4]"
              alt=""
              src="/underline1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
