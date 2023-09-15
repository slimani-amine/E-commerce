"use_client";
import React, { useState, useEffect } from "react";
import { Line } from "../public/line";
import { useRouter } from "next/router";

import axios from "axios";
import Link from "next/link";

export const Login = ({ override }: { override?: React.CSSProperties }) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        router.push("/dropdown");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err) {
      console.error(err, "the error");
      setError("Invalid email or password");
    }
  };
  return (
    <div className="relative w-full  bg-white font-[Poppins] ">
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-[color:var(--bg)] w-[1440px] h-[1000px] relative">
          <Line className="!absolute !left-0 !top-[10px]" />
          <div className="inline-flex items-center gap-[129px] absolute top-[50px] left-0">
            <div className="relative w-[805px] h-[781px] bg-[#cbe4e8] rounded-[0px_4px_4px_0px] overflow-hidden">
              <img
                className="absolute w-[805px] h-[706px] top-[75px] left-0"
                alt="Dl beatsnoop"
                src="https://c.animaapp.com/hBsAN3dQ/img/dl-beatsnoop-1.png"
              />
            </div>
            <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-[48px] relative flex-[0_0_auto]">
                <div className="gap-[24px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <p className="text-black text-4xl font-medium leading-[30px] tracking-wider">
                    Log in to Exclusive
                  </p>
                  <p className="text-black text-base font-normal leading-normal">
                    Enter your details below
                  </p>
                </div>
                <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
                  <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                    <input
                      className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex" />
                    <div className="w-[370px] h-[0px] border border-black"></div>
                  </div>

                  <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                    <input
                      className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                      type="Password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                      <div className="w-[370px] h-[0px] border border-black"></div>
                    </div>
                  </div>

                  <div className="text-red-500">
                    {error && <div>{error}</div>}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-[87px] relative flex-[0_0_auto]">
                <button
                  className="w-[143px] h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex cursor-pointer"
                  onClick={(e) => handleSignIn(e)}
                >
                  <p className="text-neutral-50 text-base font-medium leading-normal">
                    Log In
                  </p>
                </button>
                <Link href="/forgotpassword">
                <p className="text-red-500 text-base font-normal leading-normal cursor-pointer">
                  Forget Password?
                </p>
                </Link>
                
              </div>
              <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                <div className="opacity-70 text-black text-base font-medium leading-normal">
                  <Link
                    href="/signup"
                    className="relative w-fit mt-[-1.00px] [font-family:var(--title-16px-medium-font-family)] font-[number:var(--title-16px-medium-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap "
                  >
                    Sign Up
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
  );
};
