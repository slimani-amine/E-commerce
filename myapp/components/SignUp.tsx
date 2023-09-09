import React, { useState } from "react";
import { TopHeader } from "./TopHeader";
import { HeaderComponent } from "./HeaderComponent";
import { Line_3 } from "../public/Line_3";
import { Roadmap } from "./Roadmap";
import { Footer } from "./Footer";
import { PlaceboxInfo } from "./PlaceboxInfo";
import { Button } from "../public/button";
import { Line } from "../public/line";

import { IconGoogle2 } from "../public/iconGoogle2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export const SignUp = ({ override }: { override?: React.CSSProperties }) => {
  const router = useRouter();

  const [newUser, setNewUser] = useState({
    firstName : '',
    lasstName : '',
    password : '',
    email : '',
  })

  const handleChange = (input: any) => {
    const { name, value } = input.target;
    setNewUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/user/register", newUser)
      .then((response) => {
        router.push("/");
        // window.location.reload(false);
        console.log("Successful add", response.data);
      })
      .catch((error) => console.log("Failed to add", error));
  };

  return (
    <div
      className="relative w-full h-[1533px] bg-white font-[Poppins] "
      style={override}
    >
      <TopHeader
        override={{
          position: "absolute",
          top: "0px",
          left: "25px",
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
            <div className="text-black text-4xl font-medium leading-[30px] tracking-wider">Create an account</div>
              
              <div className="relative w-fit [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
                Enter your details below
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[40px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
 

                <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                    <input className="opacity-80 text-black text-base font-normal leading-normal w-[370px] " placeholder="firstName" name='firstName'value={newUser.firstName}  onChange={handleChange}></input>
                    <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                      <div className="w-[370px] h-[0px] border border-black"></div>
                    </div>
                  </div>
                  <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                    <input className="opacity-80 text-black text-base font-normal leading-normal w-[370px] " placeholder="lastName" name='lasstName'value={newUser.lasstName}  onChange={handleChange}></input>
                    <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                      <div className="w-[370px] h-[0px] border border-black"></div>
                    </div>
                  </div>
                


                <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                    <input className="opacity-80 text-black text-base font-normal leading-normal w-[370px] " placeholder="Email or Phone Number" name='email' value={newUser.email} onChange={handleChange}></input>
                    <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                      <div className="w-[370px] h-[0px] border border-black"></div>
                    </div>
                  </div>

                  <div className="relative w-fit [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
                    Enter your details below
                  </div>
                </div>
                <div className="inline-flex flex-col items-center gap-[40px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
                    <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                      <input
                        className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                        placeholder="Name"
                        name="userName"
                        value={newUser.userName}
                        onChange={handleChange}
                      ></input>
                      <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                        <div className="w-[370px] h-[0px] border border-black"></div>
                      </div>
                    </div>

                    <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                      <input
                        className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                        placeholder="Email or Phone Number"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                      ></input>
                      <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                        <div className="w-[370px] h-[0px] border border-black"></div>
                      </div>
                    </div>

                    <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                      <input
                        className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                      ></input>
                      <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                        <div className="w-[370px] h-[0px] border border-black"></div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-[16px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div
                      className="w-[371px] h-14 px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex cursor-pointer"
                      onClick={handleSubmit}
                    >
                      <button className="text-neutral-50 text-base font-medium leading-normal">
                        Create Account
                      </button>
                    </div>
                    <div className="inline-flex flex-col items-center gap-[32px] relative flex-[0_0_auto]">
                      <div className="w-[371px] h-14 px-[86px] py-4 rounded border border-black border-opacity-40 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer">
                        <div className="justify-start items-start gap-4 inline-flex ">
                          <IconGoogle2 className="!relative !w-[24px] !h-[24px]" />
                          <div className="text-black text-base font-normal leading-normal w-[371px] ">
                            Sign up with Google
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                        <div className="relative w-fit opacity-70 [font-family:var(--title-16px-regular-font-family)] font-[number:var(--title-16px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap ">
                          Already have account?
                        </div>
                        <div className="opacity-70 text-black text-base font-medium leading-normal">
                          <Link
                            href="/logIn"
                            className="relative w-fit mt-[-1.00px]  [font-family:var(--title-16px-medium-font-family)] font-[number:var(--title-16px-medium-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap "
                          >
                            Log in{" "}
                          </Link>
                          <div className="w-[47px] h-[0px] relative ">
                            <div className="w-[47px] h-[0px] left-0 top-0 absolute border border-black"></div>
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
      </div>
    </div>
       
      <Footer
        override={{
          position: "absolute",
          top: "1093px",
          left: "25px",
        }}
      />
    </div>
  );
};
