import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRouter } from "next/router";
import { Tostify } from "../public/Tostify";
import { toast } from "react-toastify";
const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [newPassword, setNewPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();
  const handleResetPassword = async () => {
    try {
      await axios.post(`http://localhost:5000/reset-password/${token}`, {
        newPassword,
      });
      toast.success("🚀 Registration successful! Welcome aboard! 🚀");
      setTimeout(() => {
        router.push("/logIn");
      }, 2000);
    } catch (error) {
      setMessage("Password reset failed. Please try again.");
    }
  };

  return (
    <div className="relative w-full  bg-white font-[Poppins] ">
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-[color:var(--bg)] w-[1440px] h-[1000px] relative">
          <div className="inline-flex items-center gap-[129px] absolute top-[50px] left-0">
            <Tostify/>
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
                    Reset Password
                  </p>
                  <p className="text-black text-base font-normal leading-normal">
                    Enter your details below
                  </p>
                </div>
                <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div className="text-red-500">
                    {message && <div>{message}</div>}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-[87px] relative flex-[0_0_auto] ">
                <button
                  className="w-[100%] h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex cursor-pointer"
                  onClick={handleResetPassword}
                >
                  <p className="text-neutral-50 text-base font-medium leading-normal">
                    Reset Password
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

export default ResetPassword;
