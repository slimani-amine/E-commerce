import React, { useState } from "react";
import { Line } from "../public/line";
import { IconGoogle2 } from "../public/iconGoogle2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tostify } from "../public/Tostify";
import { toast } from "react-toastify";
export const SignUp = ({ override }: { override?: React.CSSProperties }) => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newUser = {
      firstName: firstName,
      lasstName: lastName,
      password: password,
      email: email,
    };
    if (!firstName || !lastName || !password || !email) {
      setError("All fields are required");
      return;
    }
    axios
      .post("http://localhost:5000/user/register", newUser)
      .then((response) => {
        toast.success("🚀 Registration successful! Welcome aboard! 🚀");
        setTimeout(() => {
          router.push("/logIn");
        }, 2000);
      })
      .catch((error) => {
        console.log("Failed to add", error);
        setError("This email is already in use !");
      });
  };

  return (
    <div
      className="relative w-full h-[1000px] bg-white font-[Poppins] "
      style={override}
    >
      <div>
        <div className="bg-white flex flex-row justify-center w-full">
          <div className="bg-[color:var(--bg)] w-[1440px] h-[1561px] relative">
            <Line className="!absolute !left-0 !top-[140px]" />
            <Tostify />
            <div className="inline-flex items-center gap-[129px] absolute top-[100px] left-0">
              <div className="relative w-[805px] h-[781px] bg-[#cbe4e8] rounded-[0px_4px_4px_0px] overflow-hidden">
                <img
                  className="absolute w-[805px] h-[706px] top-[75px] left-0"
                  alt="Dl beatsnoop"
                  src="https://c.animaapp.com/49CVYJbL/img/dl-beatsnoop-1.png"
                />
              </div>
              <div className="inline-flex flex-col items-start gap-[48px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
                  <div className="text-black text-4xl font-medium leading-[30px] tracking-wider">
                    Create an account
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
                        placeholder="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      ></input>
                      <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                        <div className="w-[370px] h-[0px] border border-black"></div>
                      </div>
                    </div>
                    <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                      <input
                        className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                        placeholder="lastName"
                        name="lasstName"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      ></input>
                      <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                        <div className="w-[370px] h-[0px] border border-black"></div>
                      </div>
                    </div>

                    <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                      <input
                        className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                        placeholder="Email "
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></input>

                      <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                        <div className="w-[370px] h-[0px] border border-black"></div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-center gap-[40px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
                      <div className="w-[370px] h-8 flex-col justify-start items-start gap-2 inline-flex">
                        <input
                          className="opacity-80 text-black text-base font-normal leading-normal w-[370px] "
                          placeholder="Password"
                          type="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        ></input>
                        <div className="w-[370px] h-[0px] opacity-50 justify-center items-center inline-flex">
                          <div className="w-[560px] h-[0px] border border-black"></div>
                        </div>
                        <div className="text-red-500 mr-[160px]">
                          {error && <div>{error}</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-[16px] inline-flex flex-col items-start relative flex-[0_0_auto]">
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
                            <Link href="/auth/google">
                              <div className="text-black text-base font-normal leading-normal w-[371px] ">
                                Sign up with Google
                              </div>
                            </Link>
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
    </div>
  );
};
