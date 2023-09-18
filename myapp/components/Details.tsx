import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { eventEmitter } from "./eventEmitter";

const Details = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const { id } = router.query;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/getOneProducts/${id}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [trigger]);
  const [counter, setCounter] = useState(1);
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
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
        let value = localStorage.getItem(`sumcart${idUser}`);
        if (value === null) {
          localStorage.setItem(`sumcart${idUser}`, "1");
        } else {
          value = parseInt(value, 10) + 1;
          localStorage.setItem(`sumcart${idUser}`, value.toString());
          eventEmitter.emit(`sumcartchanged`, value);
        }
        router.push("/cart");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <main>
      <div className="inline-flex gap-5 ml-[25%] mb-9">
        <div className="flex">
          {data && data.images && (
            <img
              className="w-[507px] h-[507px] rounded"
              src={JSON.parse(data.images)[0]}
              alt="Product"
            />
          )}
        </div>
        <div className="w-96 h-96 flex-col justify-center items-center">
          <div>
            <p className="text-black text-2xl font-semibold leading-normal tracking-wide">
              {data && data.name}
            </p>
            <p className="text-black text-2xl font-normal leading-normal tracking-wide pb-4">
              {data && data.price}
            </p>
            <p className="w-96 text-black text-sm font-normal leading-tight pb-4">
              {data && data.description}
            </p>
          </div>

          <div className="w-96 mt-4 mb-6 opacity-50 border-t border-black" />

          <div className="mb-6">
            <div className="w-40 h-11 justify-start items-start inline-flex">
              <div className="group">
                <button
                  onClick={decreaseCounter}
                  className="w-10 h-11 px-2 py-2.5 rounded-tl rounded-bl border border-black border-opacity-50 flex-col justify-center items-center inline-flex group-hover:bg-red-500 group-hover:border-opacity-0"
                >
                  <p className="text-black group-hover:text-neutral-50">-</p>
                </button>
              </div>
              <div className="h-11 px-6 py-2 border-t border-b border-black border-opacity-50 justify-center items-center flex">
                <div className="text-black text-xl font-medium leading-7">
                  {counter}
                </div>
              </div>
              <div className="group">
                <button
                  onClick={() => setCounter(counter + 1)}
                  className="w-10 h-11 px-2 py-2.5 border border-black border-opacity-50 rounded-tr rounded-br flex-col justify-center items-center inline-flex group-hover:bg-red-500 group-hover:border-opacity-0"
                >
                  <p className="text-black group-hover:text-neutral-50">+</p>
                </button>
              </div>
            </div>

            <p
              className="w-40 h-11 bg-red-500 rounded justify-center items-center inline-flex hover:bg-red-300 "
              onClick={() => add(data, counter)}
            >
              Buy Now
            </p>
          </div>

          <div className="w-96 h-44 justify-center items-center rounded border border-black border-opacity-50">
            <div className="px-8 py-3 gap-4 inline-flex items-center">
              <svg
                className="w-10 h-10 relative"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_45_804)">
                  <path
                    d="M11.6667 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6667 25C9.82572 25 8.33334 26.4924 8.33334 28.3333C8.33334 30.1743 9.82572 31.6667 11.6667 31.6667Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 11.8182H11.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.81818 15.4546H8.48485"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 19.0909H11.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_804">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="flex-col gap-2 inline-flex">
                <p className="text-black text-base font-medium leading-normal">
                  Free Delivery
                </p>
                <p className="text-black text-xs font-medium underline leading-none">
                  For eligible areas
                </p>
              </div>
            </div>

            <div className="w-96 mt-4 mb-6 opacity-50 border-t border-black" />

            <div className="px-8  gap-4 inline-flex items-center">
              <svg
                className="w-10 h-10 relative"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_45_809)">
                  <path
                    d="M33.3333 18.3333C32.9257 15.4003 31.5651 12.6827 29.4611 10.5991C27.357 8.51551 24.6263 7.18149 21.6894 6.80255C18.7526 6.4236 15.7727 7.02076 13.2087 8.50203C10.6446 9.98331 8.63875 12.2665 7.5 15M6.66666 8.33329V15H13.3333"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66666 21.6666C7.07426 24.5996 8.43488 27.3172 10.5389 29.4008C12.643 31.4844 15.3737 32.8184 18.3105 33.1974C21.2474 33.5763 24.2273 32.9792 26.7913 31.4979C29.3554 30.0166 31.3613 27.7334 32.5 25M33.3333 31.6666V25H26.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_809">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-black text-base font-medium leading-normal">
                  Return Delivery
                </div>
                <div>
                  <p className="text-black text-xs font-medium leading-none">
                    Free 30 Days Delivery Returns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
