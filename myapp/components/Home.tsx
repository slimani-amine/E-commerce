// import React from "react";

// export const Home = ({ override }: { override?: React.CSSProperties }) => {
//   return (
//     <div
//       className="relative w-full h-[1533px] bg-white font-[Poppins] "
//       style={override}
//     >
// home

//     </div>
//   );
// };
import { TopHeader } from "./TopHeader";
import { HeaderComponent } from "./HeaderComponent";
import { Line_3 } from "../public/Line_3";
import axios from "axios";

import { Footer } from "./Footer";
import { useEffect , useState } from "react"
import React from "react";
export const Home = ({ override }: { override?: React.CSSProperties }) => {
  // interface Product {
  //   id: number;
  //   name: string;
  // }
  //   const[data,setData]=useState<Product[]>([]);
  //     axios.get<Product[]>("http://localhost:5000/getAllProducts")
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   return (
  //     <div>
  //       {/* You can render your data here */}
  //       <ul>
  //         {data.map((item) => (
  //           <li key={item.id}>{item.name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  return (
    <div className="relative w-full h-[7033px] bg-white font-[Poppins]" style={override}>
      {/* <TopHeader
        override={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      />
      <HeaderComponent
        override={{
          position: "absolute",
          top: "88px",
          left: "135px",
        }}
      /> */}
      <Line_3
        override={{
          position: "absolute",
          top: "142px",
          left: "0px",
        }}
      />
<div >
<hr  className="mt-[120px] bg-zinc-950 h-[2px]"/>
  <div className=" mt-[-15px] ml-[50px] h-[150px] w-[180px]">
    <ul>
      <li className="pt-[60px] ml-[30px] cursor-pointer"> Woman's Fashion</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer">Men's Fashion</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer">Electronics</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer">Home & lifestyle</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer">Medcine</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer">Sports & Outdoor</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer">Baby's & Toys</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer"> Graceries & Pets</li>
      <li className="pt-[18px] ml-[30px] cursor-pointer">Health & Beauty</li>
      <hr className="w-[1px] h-[625px] mt-[-405px] ml-[250px] bg-zinc-950" />
    </ul>
  </div><div>
  <img src="https://www.zdnet.com/a/img/resize/4afbdb749660be138b9d2c01189d862244d8cdf4/2022/10/03/2cf72c97-7ff4-44c6-8f3d-d3617125c538/iphone-13-mini-zdnet.jpg?auto=webp&fit=crop&height=675&width=1200" className="ml-[400px] mt-[-115px] w-[1500px] h-[600px]"/>
  </div>
   <div className="w-[15px] h-[35px] bg-red-600 ml-[180px] mt-[200px] rounded-md"></div><div className="ml-[210px] mt-[-30px] text-red-700 font-semibold">Today's</div>
  <h1 className=" mt-[15px] ml-[180px] font-bold text-lg">Flash Sales</h1>
  <h1 className=" mt-[-50px] ml-[500px] font-bold text-3xl">03ㅤ:23ㅤ:19ㅤ:56 </h1>
        </div>
        <div>
        <div className="mt-[200]">
 <h1 className="mt-[-60px] ml-[500px]">Days</h1>
  </div>
  <h1 className="mt-[-24px] ml-[572px]">Hours</h1>
  <h1 className="mt-[-23px] ml-[630px]"> Minutes</h1>
  <h1 className="mt-[-23px] ml-[705px]"> Seconds</h1>
    <div className="div  mt-[50px]">
  <div className=" rounded border-2 w-[250px] h-[180px] ml-[200px] mt-[120px]">
  <div className=" rounded-sm bg-red-600 w-[40px] h-[20px] "><h3 className="ml-[5px] mt-[3px] text-white ">40%</h3></div>
        <img src="https://selectshop.tn/18375-medium_default/smartphone-apple-iphone-13-pro-max-128-go-bleu.jpg" alt="" />
  </div>
  </div>
  <div className="border-2 w-[250px] h-[250px] ml-[200px] p-15"><h1 className="mt-[120px] ml-[30px]">title</h1>
  <h1 className="ml-[30px]">Price</h1>
  <h1 className="ml-[30px]">Rating</h1>
  </div>
    <button className="bg-red-600 ml-[45%] mt-[12   0px]  h-[50px] w-[10%] "><h2></h2><h3 className="text-white">View All products</h3></button>
        </div>
        <hr  className="mt-[130px]  h-[2px] ml-[200px] w-[1530px] pt-[500px]" />
        <div className="w-[15px] h-[35px] bg-red-600 ml-[150px] mt-[-300px] rounded-md"></div>
        <div className="ml-[180px] mt-[-28px] text-red-700 font-semibold">Categories</div>
        <h1 className="ml-[150px] mt-[10px] font-bold text-lg">Browse By Category</h1>
        <div className="w-[180px] h-[180px] ml-[240px] mt-[60px] border-2">
          <h2 className="ml-[31%] mt-[120px]">Phones</h2>
        </div>
        <div className="w-[180px] h-[180px] ml-[500px] mt-[-180px] border-2">
          <h2 className="ml-[22%] mt-[120px]">Computers</h2>
        </div>
        <div className="w-[180px] h-[180px] ml-[740px] mt-[-180px] border-2">
          <h2 className="ml-[18%] mt-[120px]">SmartWatch</h2>
        </div>
        <div className="w-[180px] h-[180px] ml-[980px] mt-[-180px] border-2">
          <h2 className="ml-[31%] mt-[120px]">Camera</h2>
        </div>
        <div className="w-[180px] h-[180px] ml-[1230px] mt-[-180px] border-2">
          <h2 className="ml-[20%] mt-[120px]">HeadPhones</h2>
        </div>
        <div className="w-[180px] h-[180px] ml-[1490px] mt-[-180px] border-2">
          <h2 className="ml-[31%] mt-[120px]">Gaming</h2>
        </div>
        <hr  className="mt-[230px]  h-[2px] ml-[200px] w-[1530px]" />
        <button className="bg-red-600 ml-[85%] mt-[180px]  h-[40px] w-[6%] "><h2></h2><h3 className="text-white">View All</h3></button>
        <div className="w-[15px] h-[35px] bg-red-600 ml-[150px] mt-[-100px] rounded-md"></div>
        <div className="ml-[180px] mt-[-28px] text-red-700 font-semibold">This Month</div>
        <h1 className="ml-[150px] mt-[10px] font-bold text-lg">Best Selling Product</h1>
        <div className="div  mt-[50px]">
  <div className=" rounded border-2 w-[250px] h-[180px] ml-[200px] mt-[120px]">
  <div className=" rounded-sm bg-red-600 w-[40px] h-[20px] "><h3 className="ml-[5px] mt-[3px] text-white ">40%</h3><img src="https://w7.pngwing.com/pngs/387/843/png-transparent-favorite-heart-like-likes-love-loved-basic-ui-2-line-icon-thumbnail.png" /></div>
        <img src="https://selectshop.tn/18375-medium_default/smartphone-apple-iphone-13-pro-max-128-go-bleu.jpg" alt="" />
  </div>
  </div>
      <div className="w-[1780px] h-[700px] ml-[130px] mt-[250px] bg-black">
        <img className="h-[680px] w-[800px] ml-[980px] mt-[-24px] text-lime-700 opacity-[0.6]" src="https://st4.depositphotos.com/9904426/41475/i/450/depositphotos_414751520-stock-photo-baku-azerbaijan-2020-jbl-flip.jpg" alt="" /></div>
        <h1 className="text-green-500 mt-[-650px] ml-[280px] text-3xl font-bold">Categories</h1>
       <h1 className="text-white mt-[50px] ml-[235px] text-8xl">Enhance Your <br /> Music Exprience</h1>
       <div className="mt-[40px] ml-[240px]  h-[100px] w-[100px] border-2 rounded-full bg-white"><h1 className="text-lg mt-[12px] ml-[32px]">23</h1> <h1 className=" ml-[20px] text-xl">Hours</h1></div>
       <div className="mt-[-100px] ml-[420px] h-[100px] w-[100px] border-2 rounded-full bg-white"><h1 className="text-lg mt-[12px] ml-[32px]">05</h1> <h1 className=" ml-[25px] text-xl">Days</h1></div>
       <div className="mt-[-100px] ml-[610px] h-[100px] w-[100px] border-2 rounded-full bg-white"><h1 className="text-lg mt-[12px] ml-[32px]">59</h1> <h1 className=" ml-[10px] text-xl">Minutes</h1></div>
       <div className="mt-[-100px] ml-[810px] h-[100px] w-[100px] border-2 rounded-full bg-white"><h1 className="text-lg mt-[12px] ml-[32px]">35</h1> <h1 className=" ml-[5px] text-xl">Seconds</h1></div>
       <button className="w-[180px] h-[70px] bg-lime-500 rounded ml-[245px] mt-[60px] ">Buy Now !</button>
       <div className="w-[15px] h-[35px] bg-red-600 ml-[180px] mt-[300px] rounded-md"></div>
       <div className="ml-[200px] mt-[-28px] text-red-700 font-semibold">Our Products</div>
        <h1 className="ml-[180px] mt-[10px] font-bold text-lg">Explore Our Products</h1>
    <div className="div  mt-[50px]">
  <div className=" rounded border-2 w-[250px] h-[180px] ml-[200px] mt-[50px]">
  <div className=" rounded-sm bg-red-600 w-[40px] h-[20px] "><h3 className="ml-[5px] mt-[3px] text-white ">40%</h3></div>
        <img src="https://selectshop.tn/18375-medium_default/smartphone-apple-iphone-13-pro-max-128-go-bleu.jpg" alt="" />
  </div>
  <div className="border-2 w-[250px] h-[250px] ml-[200px] p-15"><h1 className="mt-[120px] ml-[30px]">title</h1>
  <h1 className="ml-[30px]">Price</h1>
  <h1 className="ml-[30px]">Rating</h1>
  </div>
  </div>
    <br />
    <button className="bg-red-600 ml-[39%] mt-[290px]  h-[50px] w-[10%] "><h2></h2><h3 className="text-white">View All products</h3></button>
    <div className="w-[15px] h-[35px] bg-red-600 ml-[180px] mt-[300px] rounded-md"></div>
       <div className="ml-[200px] mt-[-28px] text-red-700 font-semibold">Featured</div>
        <h1 className="ml-[180px] mt-[10px] font-bold text-lg">New Arrival</h1>
       <div className=" ml-[290px] mt-[60px] w-[720px] h-[650px] border-2">
        <img className="w-[720px] h-[750px]" src="https://png.pngtree.com/background/20230519/original/pngtree-black-playstation-4-console-is-shown-on-a-black-background-picture-image_2665680.jpg"/>
        <h1 className="text-white mt-[-180px] ml-[60px] text-3xl">Playstation 4</h1>
        <h1 className="text-white ml-[55px] mt-[20px]">Black and White version of the PS4 <br /> coming out on sale.</h1>
        <h1 className="text-white mt-[20px] ml-[55px] cursor-pointer">Shop Now</h1>
       </div>
       <div className=" w-[650px] h-[390px] mt-[-649px] ml-[1035px] border-2">
        <img className="w-full h-full" src="https://c4.wallpaperflare.com/wallpaper/110/113/219/taylor-swift-4k-computer-desktop-background-wallpaper-preview.jpg" alt="" />
       </div>
       <div className=" ml-[1035px] mt-[30px] w-[310px] h-[330px] border-2">
        <img className="w-full h-full" src="https://img.freepik.com/premium-photo/image-photograph-pair-hifi-level-music-speakers-with-two-speakers-black-background_88135-33694.jpg" alt="" />
       </div>
       <div className=" ml-[1376px] mt-[-330px] w-[310px] h-[330px] border-2">
       <img className="w-full h-full" src="https://img.freepik.com/free-photo/front-view-expensive-perfume-as-present-dark-table_140725-148378.jpg" alt="" />
       </div>
      {/* <Footer
        override={{
          position: "absolute",
          top: "6603px",
          left: "0px"
        }}
      /> */}
    </div>
  );
}
