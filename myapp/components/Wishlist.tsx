import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { IconDelete4 } from "../public/iconDelete4";
import { QuickView6 } from "../public/QuikView6";
import { eventEmitter } from "./eventEmitter";
export const Wishlist = () => {
  const [trigger, settrigger] = useState(false);
  const [data, setData] = useState([]);
  const [dataforyou, setDataforyou] = useState([]);
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
  useEffect(() => {
    axios
      .get(`http://localhost:5000/wishList/getAllWishList/${idUser}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [trigger]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/getAllProducts")
      .then((result) => {
        setDataforyou(result.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const deleteItem = (id: any) => {
    axios
      .delete(`http://localhost:5000/wishlist/deleteOneWishList/${id}`)
      .then((result) => {
        settrigger(!trigger);
        let value = localStorage.getItem(`sumwish${idUser}`);
        if (value === null) {
          localStorage.setItem(`sumwish${idUser}`, "1");
        } else {
          value = parseInt(value, 10) - 1;
          localStorage.setItem(`sumwish${idUser}`, value.toString());
          eventEmitter.emit("sumwishChanged", value);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const deleteAll = () => {
    axios
      .delete(`http://localhost:5000/wishList/deleteAllWishList`)
      .then((result) => {
        settrigger(!trigger);
        let value = localStorage.getItem(`sumwish${idUser}`);
        if (value === null) {
          localStorage.setItem(`sumwish${idUser}`, "1");
        } else {
          value = 0;
          localStorage.setItem(`sumwish${idUser}`, value.toString());
          eventEmitter.emit("sumwishChanged", value);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const add = (product: any, qte: any) => {
    const obj = {
      name: product.name,
      description: product.description,
      category: product.category,
      images: JSON.parse(product.images),
      colours: JSON.parse(product.colours),
      size: JSON.parse(product.size),
      price: product.price,
      discount: product.discount,
      quantity: qte,
    };
    axios
      .post(`http://localhost:5000/cart/createCart/${idUser}`, obj)
      .then((result) => {
        console.log("added successfully");
        let value = localStorage.getItem(`sumcart${idUser}`);
        if (value === null) {
          localStorage.setItem(`sumcart${idUser}`, "1");
        } else {
          value = parseInt(value, 10) + 1;
          localStorage.setItem(`sumcart${idUser}`, value.toString());
          eventEmitter.emit("sumcartChanged", value);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div className="inline-flex flex-col items-start gap-[80px] relative ml-[120px]">
      <div className="inline-flex flex-col items-start gap-[60px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[835px] relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:var(--title-20px-regular-font-family)] font-[number:var(--title-20px-regular-font-weight)] text-black text-[length:var(--title-20px-regular-font-size)] text-center tracking-[var(--title-20px-regular-letter-spacing)] leading-[var(--title-20px-regular-line-height)] whitespace-nowrap ">
            Wishlist ({data.length})
          </div>
          <button
            className="!flex-[0_0_auto] p-4 border-2 rounded w-[12rem] ml-[130px] "
            onClick={() => {
              deleteAll();
            }}
          >
            Move All To Bag
          </button>
        </div>

        <div className="flex flex-wrap  gap-[30px] ml-[35px] ">
          {data &&
            data.map((e) => {
              return (
                <div className="relative w-[270px] h-[300px] bg-[color:var(--secondary)] rounded-[4px] overflow-hidden">
                  <div className=" w-[246px] h-[183px] ">
                    <div
                      className="inline-flex cursor-pointer flex-col items-start gap-[8px] absolute top-0 left-[212px]"
                      onClick={() => {
                        deleteItem(e.id);
                      }}
                    >
                      <IconDelete4 className="!absolute !w-[24px] !h-[24px] !top-[0px] !left-[35px]" />
                    </div>
                    <div className=" w-[190px] h-[180px] ">
                      <img
                        className=" w-[178px] h-[129px] ml-[60px] "
                        alt="Element"
                        src={JSON.parse(e.images)[0]}
                      />
                    </div>
                  </div>
                  <div className=" w-[270px] h-[41px]  bg-black rounded-[0px_0px_4px_4px]">
                    <div className="inline-flex items-center gap-[8px] relative top-[8px] left-[84px]">
                      <div
                        className=" text-white"
                        onClick={() => {
                          add(e, 1);
                        }}
                      >
                        Add To Cart
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-black">{e.name}</p>
                    <p className="text-red-500">{e.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="inline-flex items-center gap-[835px] relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:var(--title-20px-regular-font-family)] font-[number:var(--title-20px-regular-font-weight)] text-black text-[length:var(--title-20px-regular-font-size)] text-center tracking-[var(--title-20px-regular-letter-spacing)] leading-[var(--title-20px-regular-line-height)] whitespace-nowrap  border-l-8 pl-2 border-red-500">
            Just For You
          </div>
          <Link href="/dropdown">
            <button className="!flex-[0_0_auto] p-4 border-2 rounded w-[12rem] ml-[100px]">
              See All
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap  gap-[30px] ml-[35px] ">
          {dataforyou &&
            dataforyou.slice(0, 4).map((e) => {
              return (
                <div className="relative w-[270px] h-[550px] bg-[color:var(--secondary)] rounded-[4px] overflow-hidden">
                  <div className=" w-[246px] h-[183px] ">
                    <div className="inline-flex flex-col items-start gap-[8px] absolute top-0 left-[212px]">
                      <Link href={`/details?id=${e.id}`}>
                        <QuickView6 className="!absolute !w-[24px] !h-[24px] !top-[0px] !left-[35px]" />
                      </Link>
                    </div>

                    <div className=" w-[190px] h-[180px] ">
                      <img
                        className=" w-[178px] h-[129px] ml-[60px] "
                        alt="Element"
                        src={JSON.parse(e.images)[0]}
                      />
                    </div>
                  </div>
                  <div
                    className=" w-[270px] h-[41px]  bg-black rounded-[0px_0px_4px_4px] cursor-pointer	"
                    onClick={() => {
                      add(e, 1);
                    }}
                  >
                    <div className="inline-flex items-center gap-[8px] relative top-[8px] left-[84px]">
                      <div className=" text-white">Add To Cart</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-black">{e.name}</p>
                    <p className="text-red-500">{e.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
