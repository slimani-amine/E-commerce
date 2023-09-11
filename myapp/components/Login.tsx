"use_client";
import React, { useState } from "react";
import { Footer } from "./Footer";
import { Line } from "../public/line";
import { useRouter } from "next/router";

import axios from "axios";

export const Login = ({ override }: { override?: React.CSSProperties }) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [firstName,setFirstName]= useState <string>("");
  const [id,setId]= useState <string>("");
  const [trigger,setTrigger]=useState <boolean>(false);
  console.log(email,"email");
  console.log(password,"pass");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email,
        password,
      })
      if (response.status === 200) {
        const  token  = response.data.token;
        const firstName=response.data.firstName;
        const id =response.data.id;
        localStorage.setItem('token', token); 
        // <Stal firstName={firstName} id={id}>
        console.log('token', token);
        console.log('firstName', setFirstName(firstName));
        console.log('id', setId(id));
        router.push('/dropdown');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      console.error(err, 'the error');
      setError('Invalid email or password');
    }
  };





  return (
    <div
      className="relative w-full h-[1533px] bg-white font-[Poppins] "
      style={override}
    >
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-[color:var(--bg)] w-[1440px] h-[1561px] relative">
          <Line className="!absolute !left-0 !top-[140px]" />
          <div className="inline-flex items-center gap-[129px] absolute top-[200px] left-0">
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
                  <p className="text-black text-4xl font-medium leading-[30px] tracking-wider">Log in to Exclusive</p>
                  <p className="text-black text-base font-normal leading-normal">Enter your details below</p>
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

                  <div className="text-red-500" >
                {error && <div >{error}</div>}
                </div>

                </div>
              </div>
              <div className="inline-flex items-center gap-[87px] relative flex-[0_0_auto]">


                <button className="w-[143px] h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex cursor-pointer" onClick={(e) => handleSignIn(e)}>
                  <p className="text-neutral-50 text-base font-medium leading-normal">Log In</p>
                </button>

                <p className="text-red-500 text-base font-normal leading-normal cursor-pointer">Forget Password?</p>
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
