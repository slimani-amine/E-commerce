
import React from "react";
export const About = ({ override }: { override?: React.CSSProperties }) => {
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
      />
      <HeaderComponent
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
        <div className="mt-[350px] ml-[350px]">
          <div>
            <img src="https://www.haydengirls.com/cdn/shop/products/GY6111-LIGHT_20DENIM-1_941830b3-8c63-4f16-a89d-76d15d3913d3_800x.jpg?v=1693034274
      " alt="dfdfdf" className="w-[700px] h-[800px] mt-[10px] ml-[900px]" />
          </div>
            <h1 className="text-3xl font-bold mt-[-550px]">Our Story</h1><div>
            <h2 className="mt-[50px] text-xl">Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. <br /> Supported by wide range of tailored marketing, <br /> data and service solutions, Exclusive has 10,500 sallers and 300 brands <br /> and serves 3 millioons customers across the region. </h2><br />
            Exclusive has more than 1 Million products to offer, growing at a very fast <br /> Exclusive offers a diverse assotment in categories ranging  from consumer.
            </div>
        </div><div className="rounded-full h-[80px] w-[80px] mt-[700px] ml-[400px] border-4 bg-black"></div>
        <div className="h-[300px] w-[300px] border-2 ml-[300px] mt-[-200px]"><img src="https://www.iconpacks.net/icons/2/free-store-icon-1977-thumb.png" className="bg-white w-[55px] h-[55px] ml-[112px] mt-[132px] rounded-full" alt="" /></div>
        <div className="h-[300px] w-[300px] border-2 ml-[700px] mt-[-300px]"></div>
        <div className="h-[300px] w-[300px] border-2 ml-[1100px] mt-[-300px]"></div>
        <div className="h-[300px] w-[300px] border-2 ml-[1500px] mt-[-300px]"></div>
    </div>
  );
};
