import React, { useState } from "react";
import axios from "axios";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleForgotPassword = async () => {
    try {
      await axios.post("http://localhost:5000/forgot-password", { email });
      setMessage("Password reset instructions sent to your email.");
    } catch (error) {
      setMessage(
        "Failed to send reset email. Please check your email address."
      );
    }
  };

  return (
    <div className="relative w-full  bg-white font-[Poppins] ">
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-[color:var(--bg)] w-[1440px] h-[1000px] relative">
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
                    Forgot Password
                  </p>
                  <p className="text-black text-base font-normal leading-normal">
                    Enter your details below
                  </p>
                </div>
                <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto] w-[700px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="text-red-500">
                    {message && <div>{message}</div>}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-[87px] relative flex-[0_0_auto] ">
                <button
                  className="w-[100%] h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex cursor-pointer"
                  onClick={handleForgotPassword}
                >
                  <p className="text-neutral-50 text-base font-medium leading-normal">
                    Request Password Reset
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
