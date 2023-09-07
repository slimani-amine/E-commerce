import { TopHeader } from "./TopHeader";
import { HeaderComponent } from "./HeaderComponent";
import { Line_3 } from "../public/Line_3";
import { Roadmap } from "./Roadmap";
import { Footer } from "./Footer";
import { PlaceboxInfo } from "./PlaceboxInfo";
import { Button } from "../public/button";
import { Line } from "../public/line";
import { UnderLine } from "../public/underLine";
import { GoogleSignUp } from "../public/googleSignUp";
import { IconGoogle2 } from "../public/iconGoogle2";
import Link from "next/link";


export const SignUp = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="relative w-full h-[1533px] bg-white font-[Poppins] "

      style={override}
    >
      <TopHeader
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
      />
<div>
<div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-[color:var(--bg)] w-[1440px] h-[1561px] relative">
        <Line className="!absolute !left-0 !top-[140px]" />
        <div className="inline-flex items-center gap-[129px] absolute top-[200px] left-0">
          <div className="relative w-[805px] h-[781px] bg-[#cbe4e8] rounded-[0px_4px_4px_0px] overflow-hidden">
            <img
              className="absolute w-[805px] h-[706px] top-[75px] left-0"
              alt="Dl beatsnoop"
              src="https://c.animaapp.com/49CVYJbL/img/dl-beatsnoop-1.png"
            />
          </div>
          <div className="inline-flex flex-col items-start gap-[48px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
              <button className="relative w-fit mt-[-1.00px] [font-family:var(--heading-36px-medium-font-family)] font-[number:var(--heading-36px-medium-font-weight)] text-[color:var(--text-2)] text-[length:var(--heading-36px-medium-font-size)] tracking-[var(--heading-36px-medium-letter-spacing)] leading-[var(--heading-36px-medium-line-height)] whitespace-nowrap ">
                Create an account
              </button>
              <div className="relative w-fit [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
                Enter your details below
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[40px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
                <div className="gap-[8px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] text-[color:var(--text-2)] [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
            <PlaceboxInfo placeHolder={"Name"} tyPe={"text"} />
                  </div>
                  <UnderLine className="bg-[url(https://c.animaapp.com/49CVYJbL/img/line-1-10.svg)] !w-[370px] !top-[unset]" />
                </div>
                <div className="gap-[8px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px]  [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
                    
                    <PlaceboxInfo placeHolder={"Email or Phone Number"} tyPe={"text"} />
                  </div>
                  <UnderLine className="bg-[url(https://c.animaapp.com/49CVYJbL/img/line-1-10.svg)] !w-[370px] !top-[unset]" />
                </div>
                <div className="gap-[8px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px]  [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-black text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
                    
                    <PlaceboxInfo placeHolder={"Password"} tyPe={"Password"} />
                  </div>
                  <UnderLine className="bg-[url(https://c.animaapp.com/49CVYJbL/img/line-1-10.svg)] !w-[370px] !top-[unset]" />
                </div>
              </div>
              <div className="gap-[16px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                <Button
                  button="primary"
                  className="!flex-[0_0_auto] !px-[122px] !py-[16px]"
                  hover={false}
                  text="Create Account"
                />
                <div className="inline-flex flex-col items-center gap-[32px] relative flex-[0_0_auto]">
                  <GoogleSignUp
                    className="!flex-[0_0_auto]"
                    divClassName="!text-[color:var(--text-2)]"
                    icon={<IconGoogle2 className="!relative !w-[24px] !h-[24px]" />}
                  />
                  <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                    <div className="relative w-fit opacity-70 [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
                      Already have account?
                    </div>
                    <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <Link href="/logIn"
                      className="relative w-fit mt-[-1.00px] opacity-70 [font-family:var(--title-16px-medium-font-family)] font-[number:var(--title-16px-medium-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap ">
                        Log in </Link>
                      
                     
                      <UnderLine className="bg-[url(https://c.animaapp.com/49CVYJbL/img/line-1-11.svg)] !w-[47px] !top-[unset]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
        </div>
      <Footer
        override={{
          position: "absolute",
          top: "1093px",
          left: "0px",
        }}
      />
    </div>
  );
};
