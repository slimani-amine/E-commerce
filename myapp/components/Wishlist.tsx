import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export const Wishlist = ({ override }: { override?: React.CSSProperties }) => {
  const [trigger, setTrigger] = useState(false);
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/wishlist/getAll").then((result) => {
      setData(result.data)
    }).catch((error: any) => {
      console.log(error);
    });
  },[trigger])
  const deleteItem = (id: any) => {
    axios
      .delete(`http://localhost:5000/wishlist/delete/${id}`)
      .then((result) => {
        setTrigger(!trigger);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div
      className="mt-150 relative w-full h-[1533px] bg-white font-[Poppins] "
      style={override}
    >
      <div className="py-12">
        <div className="hidden sm:flex flex-col justify-start items-start">
          <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
            <h1 className="text-4xl font-semibold leading-9 text-gray-800  dark:text-white">
              Favourites
            </h1>
            <p className="text-base leading-4 text-gray-600 dark:text-white pb-1">
              (12 Items)
            </p>
          </div>
          <table className="w-full mt-16 whitespace-nowrap">
            <thead
              aria-label="table heading"
              className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 dark:bg-gray-800 border-b"
            >
              <tr>
                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-20 pl-4 lg:pl-10">
                  YOUR PRODUCT
                </th>
                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">
                  DESCRIPTION
                </th>
                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">
                  PRICE
                </th>
                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white pl-6 lg:pl-20 2xl:pl-52">
                  MORE OPTIONS
                </th>
                <th className="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10"></th>
              </tr>
            </thead>
            <tbody className="w-full text-left">
              {data &&
                data.map((e) => {
                  return (
                    <tr className="border-gray-200 border-b">
                      <th>
                        <img
                          className="my-10 pl-4 lg:pl-10 2xl:pl-20"
                          src={e.images}
                          alt="shoe"
                        />
                      </th>
                      <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                        <p className="text-base leading-4 text-gray-800 dark:text-white">
                          {e.name}
                        </p>
                      </th>
                      <th className="my-10 pl-6 lg:pl-20 2xl:pl-52">
                        <p className="dark:text-white">{e.price}</p>
                      </th>
                      <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                        <Link href={`/details?id=${e.id}`}>
                        <button className="hover:underline text-base font-medium leading-none text-gray-800 dark:text-white focus:outline-none focus:underline " onClick={()=>{}}>
                          View details
                        </button>
                        </Link>
                      </th>
                      <th className="my-10 pl-4 lg:pl-12 2xl:pl-28 pr-4 2xl:pr-20">
                        <button
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"
                          onClick={() => {
                            deleteItem(e.id);
                          }}
                        >
                          Remove Item
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
