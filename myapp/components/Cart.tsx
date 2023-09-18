import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Tostify } from "../public/Tostify";
import { toast } from "react-toastify";
import { eventEmitter } from "./eventEmitter";

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
  const [counter, setCounter] = useState({} || 1);

  const increaseCounter = (id) => {
    setCounter((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decreaseCounter = (id) => {
    setCounter((prev) => {
      if (prev[id] > 1) {
        return { ...prev, [id]: prev[id] - 1 };
      }
      return prev;
    });
  };
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [itemSubtotals, setItemSubtotals] = useState({});
  const [total, setTotal] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [i, setI] = useState(0);

  useEffect(() => {
    const newSubtotals = {};
    let newTotal = 0;

    data.forEach((e) => {
      const subtotal =
        e.price.substr(0, e.price.length - 2) * 1 * (counter[e.id] || 1);
      newSubtotals[e.id] = subtotal;
      newTotal += subtotal;
    });

    newTotal =
      discount === 0 ? newTotal : newTotal - (newTotal * discount) / 100;

    setItemSubtotals(newSubtotals);
    setTotal(newTotal);
  }, [data, counter, discount]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/getAllCart/${idUser}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [trigger]);

  const handleCouponApply = () => {
    if (couponCode === "EXCLUSIVE20" && i === 0) {
      setDiscount(20);
      setI(1);
      toast.success("code coupon valid ! enjoy your e-shop");
    } else {
      toast.error("sorry ! code coupon invalid or already used");
    }
  };
  const deleteItem = (id: any) => {
    axios
      .delete(`http://localhost:5000/cart/deleteOneCart/${id}`)
      .then((result) => {
        setTrigger(!trigger);
        let value = localStorage.getItem(`sumcart${idUser}`);
        if (value === null) {
          localStorage.setItem(`sumcart${idUser}`, "1");
        } else {
          value = parseInt(value, 10) - 1;
          localStorage.setItem(`sumcart${idUser}`, value.toString());
          eventEmitter.emit(`sumcartChanged`, value);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div className="relative bg-bg w-full h-[1200px] text-left text-sm text-text2 font-title-12px-medium">
      <div className="absolute top-[10px] left-[135px] flex flex-col items-start justify-start gap-[80px] text-base ">
        <div className="flex flex-col items-start justify-start gap-[24px] 	">
          <div className="flex flex-col items-start justify-start gap-[40px] overflow-y-scroll h-[400px]">
            <Tostify />
            <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[72px]  shrink-0">
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
                  <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[102px] shrink-0">
                    <div className="absolute top-[39px] left-[387px] leading-[24px]">
                      {e.price}
                    </div>
                    <div className="absolute top-[39px] left-[1063px] leading-[24px]">
                      {itemSubtotals[e.id]}
                    </div>
                    <div className="absolute top-[27.5px] left-[708.5px] rounded box-border w-[75px] h-[60px] overflow-hidden border-[1.5px] border-solid border-gray-200">
                      <div className="absolute top-[6px] left-[12px] w-12 flex flex-row items-center justify-start gap-[16px]">
                        <div className="relative leading-[24px]">
                          {counter[e.id] || e.quantity}
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <button
                            onClick={() => decreaseCounter(e.id)}
                            className="w-4 h-4 px-2 py-2.5 rounded-tl rounded-bl border border-black border-opacity-50 flex-col justify-center items-center inline-flex group-hover:bg-red-500 group-hover:border-opacity-0"
                          >
                            <p className="text-black group-hover:text-neutral-50">
                              -
                            </p>
                          </button>
                          <button
                            onClick={() => increaseCounter(e.id)}
                            className="w-4 h-4 px-2 py-2.5 border border-black border-opacity-50 rounded-tr rounded-br flex-col justify-center items-center inline-flex group-hover:bg-red-500 group-hover:border-opacity-0"
                          >
                            <p className="text-black group-hover:text-neutral-50">
                              +
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_545px)] w-[54px] h-[54px] overflow-hidden">
                      <img
                        className="absolute h-[72.22%] w-[92.59%] top-[14.81%] right-[3.7%] bottom-[12.96%] left-[3.7%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src={JSON.parse(e.images)[0]}
                      />
                    </div>
                    <div className="absolute top-[39px] left-[114px] leading-[24px]">
                      {e.name}
                    </div>
                    <img
                      className="absolute top-[20px] left-[30px] w-4 h-4 overflow-hidden"
                      alt=""
                      src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/delete-icon.png"
                      onClick={() => {
                        deleteItem(e.id);
                      }}
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
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />

            <div
              className="rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text bg-red-500 cursor-pointer"
              onClick={handleCouponApply}
            >
              <div className="relative leading-[24px] font-medium text-white">
                Apply Coupon
              </div>
            </div>
          </div>
          <div className="relative rounded box-border w-[470px] h-[324px] overflow-hidden shrink-0 border-[1.5px] border-solid border-text2 border-black">
            <div className="absolute top-[32px] left-[24px] text-xl leading-[28px] font-medium">
              Cart Total
            </div>
            <div className="absolute top-[84px] left-[24px] flex flex-row items-start justify-start gap-[307px]">
              <div className="relative leading-[24px]">Subtotal:</div>
              <div className="relative leading-[24px]">{total}</div>
            </div>
            <div className="absolute top-[140px] left-[24px] flex flex-row items-start justify-start gap-[314px]">
              <div className="relative leading-[24px]">Shipping:</div>
              <div className="relative leading-[24px]">Free</div>
            </div>
            <div className="absolute top-[196px] left-[24px] flex flex-row items-start justify-start gap-[335px]">
              <div className="relative leading-[24px]">Total:</div>
              <div className="relative leading-[24px]">{total}</div>
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
