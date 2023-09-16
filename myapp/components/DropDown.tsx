import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";
export const Dropdown = ({ override }: { override?: React.CSSProperties }) => {
  const [data, setData] = useState([]);
  const [sellingData, setSellinData] = useState([]);

  const onCartContainer20Click = useCallback(() => {
    // Please sync "Product Details page" to the project
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/getAllProducts")
      .then((res) => {
        setData(res.data);
        setSellinData(
          res.data.filter((e) => {
            return e.solde >0;
          })
        )
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="relative bg-bg w-full h-[5902px] overflow-hidden text-left text-base text-button2 font-title-20px-medium">
      <div className="absolute top-[1334.75px] left-[134.75px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
      <div className="absolute top-[1797.75px] left-[134.75px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
      <div className="absolute top-[141.75px] left-[367.75px] box-border w-[0.5px] h-[384.5px] opacity-[0.3] border-r-[0.5px] border-solid border-text2" />
      <div className="absolute top-[182px] left-[135px] flex flex-col items-start justify-start gap-[16px] text-center text-text2">
        <div className="flex flex-row items-start justify-start gap-[51px]">
          <div className="relative leading-[24px]">Woman’s Fashion</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/dropdown.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[81px]">
          <div className="relative leading-[24px]">Men’s Fashion</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/dropdown1.svg"
          />
        </div>
        <div className="relative leading-[24px]">Electronics</div>
        <div className="relative leading-[24px]">{`Home & Lifestyle`}</div>
        <div className="relative leading-[24px]">Medicine</div>
        <div className="relative leading-[24px]">{`Sports & Outdoor`}</div>
        <div className="relative leading-[24px]">{`Baby’s & Toys`}</div>
        <div className="relative leading-[24px]">{`Groceries & Pets`}</div>
        <div className="relative leading-[24px]">{`Health & Beauty`}</div>
      </div>
      <div className="absolute top-[182px] left-[413px] ">
        <Carousel>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        </Carousel>
      </div>

      <div className="absolute top-[1219px] left-[603px] rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text">
        <div className="relative leading-[24px] font-medium">
          View All Products
        </div>
      </div>
      <div className="absolute top-[2526px] left-[135px] bg-text2 w-[1170px] h-[500px] overflow-hidden text-text">
        <div className="absolute top-[0px] left-[552px] rounded-[50%] bg-gainsboro [filter:blur(200px)] w-[504px] h-[500px] opacity-[0.3]" />
        <div className="absolute top-[121px] left-[56px] text-29xl tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-semibold inline-block w-[443px]">
          Enhance Your Music Experience
        </div>
        <div className="absolute top-[273px] left-[56px] flex flex-row items-start justify-start gap-[24px] text-text2">
          <div className="relative w-[62px] h-[62px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
            <div className="absolute h-[54.84%] w-[51.61%] top-[22.58%] right-[24.19%] bottom-[22.58%] left-[24.19%] flex flex-col items-center justify-start">
              <div className="relative leading-[20px] font-semibold">23</div>
              <div className="relative text-2xs leading-[18px] inline-block w-8 mt-[-4px]">
                Hours
              </div>
            </div>
          </div>
          <div className="relative w-[62px] h-[62px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
            <div className="absolute h-[54.84%] w-[45.16%] top-[22.58%] right-[27.42%] bottom-[22.58%] left-[27.42%] flex flex-col items-center justify-start">
              <div className="relative leading-[20px] font-semibold">05</div>
              <div className="relative text-2xs leading-[18px] inline-block w-7 mt-[-4px]">
                Days
              </div>
            </div>
          </div>
          <div className="relative w-[62px] h-[62px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
            <div className="absolute h-[54.84%] w-[67.74%] top-[22.58%] right-[16.13%] bottom-[22.58%] left-[16.13%] flex flex-col items-center justify-start">
              <div className="relative leading-[20px] font-semibold">59</div>
              <div className="relative text-2xs leading-[18px] inline-block w-[43px] mt-[-4px]">
                Minutes
              </div>
            </div>
          </div>
          <div className="relative w-[62px] h-[62px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
            <div className="absolute h-[54.84%] w-[77.42%] top-[22.58%] right-[11.29%] bottom-[22.58%] left-[11.29%] flex flex-col items-center justify-start">
              <div className="relative leading-[20px] font-semibold">35</div>
              <div className="relative text-2xs leading-[18px] inline-block w-12 mt-[-4px]">
                Seconds
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[375px] left-[56px] rounded bg-button1 flex flex-row py-4 px-12 items-center justify-center">
          <div className="relative leading-[24px] font-medium">Buy Now!</div>
        </div>
        <div className="absolute top-[69px] left-[56px] leading-[20px] font-semibold text-button1">
          Categories
        </div>
        <div className="absolute top-[37px] left-[526px] w-[600px] h-[420px] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_165px)] left-[calc(50%_-_284px)] w-[568px] h-[330px] object-cover"
            alt=""
            src="/jbl-boombox-2-hero-020-x1-1-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[666px] left-[135px] flex flex-col items-start justify-start gap-[40px]">
        <div className="flex flex-row items-end justify-start gap-[470px]">
          <div className="flex flex-row items-end justify-start gap-[87px]">
            <div className="h-[103px] flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative w-5 h-10">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
                </div>
                <div className="relative leading-[20px] font-semibold">
                  Today’s
                </div>
              </div>
              <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
                Flash Sales
              </div>
            </div>
            <div className="relative w-[302px] h-[50px] text-xs text-text2">
              <div className="absolute h-full w-[15.23%] top-[0%] right-[84.77%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block w-[31px]">
                  Days
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-24px-semibold w-[46px] h-7 shrink-0">
                  03
                </b>
              </div>
              <div className="absolute h-full w-[13.91%] top-[0%] right-[58.28%] bottom-[0%] left-[27.81%] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block w-[35px]">
                  Hours
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] font-heading-24px-semibold">
                  23
                </b>
              </div>
              <div className="absolute h-full w-[16.23%] top-[0%] right-[29.47%] bottom-[0%] left-[54.3%] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block w-[49px]">
                  Minutes
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-24px-semibold w-[39px] h-7 shrink-0">
                  19
                </b>
              </div>
              <div className="absolute h-full w-[16.89%] top-[0%] right-[0%] bottom-[0%] left-[83.11%] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block w-[52px]">
                  Seconds
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] font-heading-24px-semibold">
                  56
                </b>
              </div>
              <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[77.81%] bottom-[16%] left-[20.86%] flex flex-col items-start justify-start gap-[8px]">
                <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
              </div>
              <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[51.32%] bottom-[16%] left-[47.35%] flex flex-col items-start justify-start gap-[8px]">
                <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
              </div>
              <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[22.52%] bottom-[16%] left-[76.16%] flex flex-col items-start justify-start gap-[8px]">
                <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-[46px] h-[46px]"
              alt=""
              src="/fill-with-left-arrow.svg"
            />
            <img
              className="relative w-[46px] h-[46px]"
              alt=""
              src="/fill-with-right-arrow.svg"
            />
          </div>
        </div>
        <div className="w-[1308px] overflow-x-auto flex flex-row items-start justify-start gap-[30px] text-xs text-text">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[12px] rounded bg-button2 flex flex-row py-1 px-3 items-center justify-center">
                <div className="relative leading-[18px]">-40%</div>
              </div>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_76px)] left-[calc(50%_-_86px)] w-[172px] h-[152px] object-cover"
                  alt=""
                  src="/g922500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
              <div className="relative leading-[24px] font-medium">
                HAVIT HV-G92 Gamepad
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$120</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $160
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (88)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[12px] rounded bg-button2 flex flex-row py-1 px-3 items-center justify-center">
                <div className="relative leading-[18px]">-35%</div>
              </div>
              <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] rounded-t-none rounded-b bg-text2 h-[41px]" />
              <div className="absolute top-[calc(50%_+_92px)] left-[calc(50%_-_48px)] text-base leading-[24px] font-medium text-bg">
                Add To Cart
              </div>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart1.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye1.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_110px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_95px)] w-[191px] h-[101px] object-cover"
                  alt=""
                  src="/ak90001500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
              <div className="relative leading-[24px] font-medium">
                AK-900 Wired Keyboard
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$960</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $1160
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector5.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector6.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector7.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector8.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (75)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[12px] rounded bg-button2 flex flex-row py-1 px-3 items-center justify-center">
                <div className="relative leading-[18px]">-30%</div>
              </div>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart2.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye2.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[26px] left-[10px] w-[170px] h-[129px] object-cover"
                  alt=""
                  src="/g27cq4500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
              <div className="relative leading-[24px] font-medium">
                IPS LCD Gaming Monitor
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$370</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $400
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector10.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector11.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector12.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector13.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector14.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (99)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[12px] rounded bg-button2 flex flex-row py-1 px-3 items-center justify-center">
                <div className="relative leading-[18px]">-25%</div>
              </div>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart3.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye3.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[0px] left-[41px] w-[107px] h-[180px] object-cover"
                  alt=""
                  src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
              <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$375</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $400
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector15.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector16.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector17.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector18.svg"
                  />
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/starhalffilled.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (99)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[12px] rounded bg-button2 flex flex-row py-1 px-3 items-center justify-center">
                <div className="relative leading-[18px]">-25%</div>
              </div>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart4.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye4.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[0px] left-[41px] w-[107px] h-[180px] object-cover"
                  alt=""
                  src="/sammoghadamkhamsehkvmdstrgobmunsplash-11@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
              <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$375</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $400
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector19.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector20.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector21.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector22.svg"
                  />
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/starhalffilled1.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (99)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[12px] rounded bg-button2 flex flex-row py-1 px-3 items-center justify-center">
                <div className="relative leading-[18px]">-25%</div>
              </div>
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart5.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye5.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[0px] left-[41px] w-[107px] h-[180px] object-cover"
                  alt=""
                  src="/sammoghadamkhamsehkvmdstrgobmunsplash-12@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
              <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$375</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $400
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector23.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector24.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector25.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector26.svg"
                  />
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/starhalffilled2.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (99)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1415px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
        <div className="flex flex-row items-end justify-start gap-[691px]">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="relative w-5 h-10">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
              </div>
              <div className="relative leading-[20px] font-semibold">
                Categories
              </div>
            </div>
            <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
              Browse By Category
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-[46px] h-[46px]"
              alt=""
              src="/fill-with-left-arrow1.svg"
            />
            <img
              className="relative w-[46px] h-[46px]"
              alt=""
              src="/fill-with-right-arrow1.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] text-text2">
          <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
            <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
              Phones
            </div>
            <img
              className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
              alt=""
              src="/categorycellphone.svg"
            />
          </div>
          <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
            <div className="absolute bottom-[24px] left-[calc(50%_-_45px)] leading-[24px]">
              Computers
            </div>
            <img
              className="absolute top-[25px] left-[calc(50%_-_27px)] w-14 h-14 overflow-hidden"
              alt=""
              src="/categorycomputer.svg"
            />
          </div>
          <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
            <div className="absolute bottom-[24px] left-[calc(50%_-_51px)] leading-[24px]">
              SmartWatch
            </div>
            <div className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector27.svg"
              />
              <img
                className="absolute h-[53.57%] w-[53.57%] top-[23.21%] right-[23.21%] bottom-[23.21%] left-[23.21%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector28.svg"
              />
              <img
                className="absolute h-[16.07%] w-[28.57%] top-[73.21%] right-[35.71%] bottom-[10.71%] left-[35.71%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector29.svg"
              />
              <img
                className="absolute h-[16.07%] w-[28.57%] top-[10.71%] right-[35.71%] bottom-[73.21%] left-[35.71%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector30.svg"
              />
              <div className="absolute h-[23.21%] w-[17.86%] top-[39.29%] right-[41.07%] bottom-[37.5%] left-[41.07%] flex flex-row items-end justify-start gap-[4px]">
                <div className="relative box-border w-0.5 h-[15px] border-r-[2px] border-solid border-text2" />
                <div className="relative box-border w-0.5 h-2.5 border-r-[2px] border-solid border-text2" />
                <div className="relative box-border w-0.5 h-3 border-r-[2px] border-solid border-text2" />
              </div>
            </div>
          </div>
          <div className="relative rounded bg-button2 shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[170px] h-[145px] overflow-hidden shrink-0 text-text">
            <div className="absolute bottom-[24px] left-[calc(50%_-_34px)] leading-[24px]">
              Camera
            </div>
            <img
              className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
              alt=""
              src="/categorycamera.svg"
            />
          </div>
          <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
            <div className="absolute bottom-[24px] left-[calc(50%_-_51px)] leading-[24px]">
              HeadPhones
            </div>
            <img
              className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
              alt=""
              src="/categoryheadphone.svg"
            />
          </div>
          <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
            <div className="absolute bottom-[24px] left-[calc(50%_-_32px)] leading-[24px]">
              Gaming
            </div>
            <img
              className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
              alt=""
              src="/categorygamepad.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1868px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
        <div className="flex flex-row items-end justify-start gap-[611px]">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="relative w-5 h-10">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
              </div>
              <div className="relative leading-[20px] font-semibold">
                This Month
              </div>
            </div>
            <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
              Best Selling Products
            </div>
          </div>
          <div className="rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text">
            <div className="relative leading-[24px] font-medium">View All</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] text-text2">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart6.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye6.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_73px)] left-[calc(50%_-_70px)] w-[140px] h-[146px] object-cover"
                  alt=""
                  src="/672462-zah9d-5626-002-100-0000-lightthenorthfacexguccicoat-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium">
                The north coat
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$260</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $360
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector31.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector32.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector33.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector34.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector35.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (65)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart7.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye7.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_89px)] w-[178px] h-[129px] object-cover"
                  alt=""
                  src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium">
                Gucci duffle bag
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$960</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $1160
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector36.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector37.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector38.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector39.svg"
                  />
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/starhalffilled3.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (65)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart8.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye8.svg"
                />
              </div>
              <div className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_43px)] left-[calc(50%_-_95px)] w-[191px] h-[95px] object-cover"
                  alt=""
                  src="/gammaxxl240argb1500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium">
                RGB liquid CPU Cooler
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
                <div className="relative leading-[24px] font-medium">$160</div>
                <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                  $170
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector40.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector41.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector42.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector43.svg"
                  />
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/starhalffilled4.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (65)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
              <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart9.svg"
                />
                <img
                  className="relative w-[34px] h-[34px]"
                  alt=""
                  src="/fill-eye9.svg"
                />
              </div>
              <div className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_70px)] w-[140px] h-44 object-cover"
                  alt=""
                  src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium">
                Small BookSelf
              </div>
              <div className="flex flex-row items-start justify-start text-button2">
                <div className="relative leading-[24px] font-medium">$360</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector44.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector45.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector46.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector47.svg"
                  />
                  <img
                    className="relative rounded-11xs-4 w-5 h-5"
                    alt=""
                    src="/vector48.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                  (65)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3097px] left-[135px] flex flex-col items-center justify-start gap-[60px]">
        <div className="flex flex-col items-center justify-start gap-[60px]">
          <div className="flex flex-row items-end justify-start gap-[672px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative w-5 h-10">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
                </div>
                <div className="relative leading-[20px] font-semibold">
                  Our Products
                </div>
              </div>
              <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
                Explore Our Products
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-[46px] h-[46px]"
                alt=""
                src="/fill-with-left-arrow2.svg"
              />
              <img
                className="relative w-[46px] h-[46px]"
                alt=""
                src="/fill-with-right-arrow2.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[60px] text-text2">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart10.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye10.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                    <img
                      className="absolute top-[0px] left-[38px] w-[115px] h-[180px] object-cover"
                      alt=""
                      src="/71rdoexxtrl-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Breed Dry Dog Food
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $100
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector49.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector50.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector51.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                          alt=""
                          src="/vector52.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                          alt=""
                          src="/vector53.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                        (35)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-bg">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] rounded-t-none rounded-b bg-text2 h-[41px]" />
                  <div className="absolute top-[calc(50%_+_92px)] left-[calc(50%_-_48px)] leading-[24px] font-medium">
                    Add To Cart
                  </div>
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart11.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye11.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_110px)] left-[calc(50%_-_99px)] w-[190px] h-[180px] overflow-hidden">
                    <img
                      className="absolute top-[8px] left-[22px] w-[146px] h-[163px] object-cover"
                      alt=""
                      src="/eos250d03500x500-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px] text-text2">
                  <div className="relative leading-[24px] font-medium">
                    CANON EOS DSLR Camera
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $360
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector54.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector55.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector56.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector57.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                          alt=""
                          src="/vector58.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                        (95)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart12.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye12.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                    <img
                      className="absolute top-[0px] left-[9px] w-[172px] h-[180px] object-cover"
                      alt=""
                      src="/ideapadgaming3i01500x500-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    ASUS FHD Gaming Laptop
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $700
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector59.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector60.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector61.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector62.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector63.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-10 h-5 shrink-0 opacity-[0.5]">
                        (325)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart13.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye13.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden" />
                  <img
                    className="absolute top-[46px] left-[49px] w-[172px] h-[159px] object-cover"
                    alt=""
                    src="/curologyj7pkvqrtusmunsplash-1@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">{`Curology Product Set `}</div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $500
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector64.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector65.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector66.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector67.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                          alt=""
                          src="/vector68.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-10 h-5 shrink-0 opacity-[0.5]">
                        (145)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[30px] text-xs text-text">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart14.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye14.svg"
                    />
                  </div>
                  <div className="absolute top-[12px] left-[12px] rounded bg-button1 flex flex-row py-1 px-3 items-center justify-center">
                    <div className="relative leading-[18px]">NEW</div>
                  </div>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                    <img
                      className="absolute top-[calc(50%_-_66px)] left-[calc(50%_-_90px)] w-[180px] h-[133px] object-cover"
                      alt=""
                      src="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                  <div className="relative leading-[24px] font-medium">
                    Kids Electric Car
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $960
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector69.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector70.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector71.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector72.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector73.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                        (65)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="relative w-5 h-5"
                      alt=""
                      src="/group-1000005935.svg"
                    />
                    <div className="relative rounded-[50%] bg-button2 w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base text-text2">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart15.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye15.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                    <img
                      className="absolute top-[8px] left-[2px] w-[186px] h-[164px] object-cover"
                      alt=""
                      src="/copa-sense-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Jr. Zoom Soccer Cleats
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $1160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector74.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector75.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector76.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector77.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector78.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                        (35)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="relative w-5 h-5"
                      alt=""
                      src="/group-10000059351.svg"
                    />
                    <div className="relative rounded-[50%] bg-button2 w-5 h-5" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-start justify-start gap-[16px] cursor-pointer"
                onClick={onCartContainer20Click}
              >
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart16.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye16.svg"
                    />
                  </div>
                  <div className="absolute top-[12px] left-[12px] rounded bg-button1 flex flex-row py-1 px-3 items-center justify-center">
                    <div className="relative leading-[18px]">NEW</div>
                  </div>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                    <img
                      className="absolute top-[15px] left-[6px] w-[178px] h-[150px] object-cover"
                      alt=""
                      src="/gp11-prd3-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                  <div className="relative leading-[24px] font-medium">
                    GP11 Shooter USB Gamepad
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $660
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector79.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector80.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector81.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector82.svg"
                        />
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/starhalffilled5.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                        (55)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="relative w-5 h-5"
                      alt=""
                      src="/group-10000059352.svg"
                    />
                    <div className="relative rounded-[50%] bg-button2 w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base text-text2">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                  <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-heart17.svg"
                    />
                    <img
                      className="relative w-[34px] h-[34px]"
                      alt=""
                      src="/fill-eye17.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                    <img
                      className="absolute top-[2px] left-[4px] w-[182px] h-44 object-cover"
                      alt=""
                      src="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Quilted Satin Jacket
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px] text-button2">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        $660
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector83.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector84.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector85.svg"
                        />
                        <img
                          className="relative rounded-11xs-4 w-5 h-5"
                          alt=""
                          src="/vector86.svg"
                        />
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/starhalffilled6.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                        (55)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="relative w-5 h-5"
                      alt=""
                      src="/group-10000059353.svg"
                    />
                    <div className="relative rounded-[50%] bg-button2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text">
          <div className="relative leading-[24px] font-medium">
            View All Products
          </div>
        </div>
      </div>
      <div className="absolute top-[4253px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="relative w-5 h-10">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
            </div>
            <div className="relative leading-[20px] font-semibold">
              Featured
            </div>
          </div>
          <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
            New Arrival
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] text-5xl text-text font-heading-24px-semibold">
          <div className="relative rounded bg-text2 w-[570px] h-[600px] overflow-hidden shrink-0">
            <img
              className="absolute top-[89px] left-[29px] w-[511px] h-[511px] object-cover"
              alt=""
              src="/ps5slimgoedkopeplaystation-large-1@2x.png"
            />
            <div className="absolute top-[446px] left-[32px] flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                  PlayStation 5
                </div>
                <div className="relative text-sm leading-[21px] font-title-20px-medium inline-block w-[242px]">
                  Black and White version of the PS5 coming out on sale.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-base text-bg font-title-20px-medium">
                <div className="relative leading-[24px] font-medium">
                  Shop Now
                </div>
                <img
                  className="relative w-[81px] h-px opacity-[0.5]"
                  alt=""
                  src="/underline.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <div className="relative rounded bg-gray-100 w-[570px] h-[284px] overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[138px] w-[432px] h-[284px] object-cover"
                alt=""
                src="/attractivewomanwearinghatposingblackbackground-1@2x.png"
              />
              <div className="absolute top-[138px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                    Women’s Collections
                  </div>
                  <div className="relative text-sm leading-[21px] font-title-20px-medium inline-block w-[255px]">
                    Featured woman collections that give you another vibe.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-base text-bg font-title-20px-medium">
                  <div className="relative leading-[24px] font-medium">
                    Shop Now
                  </div>
                  <img
                    className="relative w-[81px] h-px opacity-[0.5]"
                    alt=""
                    src="/underline1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[30px]">
              <div className="relative rounded bg-text2 w-[270px] h-[284px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[270px] h-[284px]"
                  alt=""
                  src="/ellipse-24.svg"
                />
                <div className="absolute top-[31px] left-[30px] w-[210px] h-[222px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_95px)] w-[190px] h-[221px] object-cover"
                    alt=""
                    src="/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png"
                  />
                </div>
                <div className="absolute top-[175px] left-[24px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                      Speakers
                    </div>
                    <div className="relative text-sm leading-[21px] font-title-20px-medium inline-block w-[191px]">
                      Amazon wireless speakers
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base text-bg font-title-20px-medium">
                    <div className="relative leading-[24px] font-medium">
                      Shop Now
                    </div>
                    <img
                      className="relative w-[81px] h-px opacity-[0.5]"
                      alt=""
                      src="/underline2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative rounded bg-text2 w-[270px] h-[284px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[270px] h-[284px]"
                  alt=""
                  src="/ellipse-241.svg"
                />
                <div className="absolute top-[calc(50%_-_112px)] left-[calc(50%_-_105px)] w-[210px] h-[222px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_101px)] w-[201px] h-[203px] object-cover"
                    alt=""
                    src="/652e82cd70aa6522dd785109a455904c@2x.png"
                  />
                </div>
                <div className="absolute top-[175px] left-[24px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                      Perfume
                    </div>
                    <div className="relative text-sm leading-[21px] font-title-20px-medium inline-block w-[191px]">
                      GUCCI INTENSE OUD EDP
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base text-bg font-title-20px-medium">
                    <div className="relative leading-[24px] font-medium">
                      Shop Now
                    </div>
                    <img
                      className="relative w-[81px] h-px opacity-[0.5]"
                      alt=""
                      src="/underline3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5161px] left-[249px] flex flex-row items-center justify-center gap-[88px] text-xl text-text2">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              FREE AND FAST DELIVERY
            </div>
            <div className="relative text-sm leading-[21px] text-center">
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className="w-[262px] flex flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services1.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              24/7 CUSTOMER SERVICE
            </div>
            <div className="relative text-sm leading-[21px]">
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services2.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              MONEY BACK GUARANTEE
            </div>
            <div className="relative text-sm leading-[21px]">
              We reurn money within 30 days
            </div>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-start gap-[24px]">
          <img className="relative w-20 h-20" alt="" src="/services3.svg" />
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              MONEY BACK GUARANTEE
            </div>
            <div className="relative text-sm leading-[21px]">
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[142px] left-[0px] w-[1440px] h-[0.5px]"
        alt=""
        src="/line-3.svg"
      />
      <img
        className="absolute top-[5384px] left-[1305px] w-[46px] h-[46px]"
        alt=""
        src="/fill-with-up-arrow.svg"
      />
    </div>
  );
};


