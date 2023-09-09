import { TopHeader } from "./TopHeader";
import { HeaderComponent } from "./HeaderComponent";
import { Line_3 } from "../public/Line_3";
import { Roadmap } from "./Roadmap";
import { PlaceboxInfo } from "./PlaceboxInfo";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { useState } from "react";
import axios from "axios";

export const Account = ({ override }: { override?: React.CSSProperties }) => {
  var userName = "Amine";
  var id = 1;
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [oldpass, setOldpass] = useState<string>("");
  const [newpass, setNewpass] = useState<string>("");
  const [cnewpass, setCnewpass] = useState<string>("");
  const [msg, setmsg] = useState<string>("");
  const verif = () => {
    axios
      .get(`http://localhost:3000/api/user/getOne/${id}`)
      .then((res) => {
        if (res.data.password === oldpass) {
          setmsg("old password incorrect");
          return false;
        } else if (newpass !== cnewpass) {
          setmsg("confirm your password ");
          return false;
        } else {
          return true;
        }
      })
      .catch((error: any) => {
        setmsg("try again");
        console.log(error);
      });
  };
  const save = (e) => {
    e.preventDefault();
    var obj = {};
    axios
      .put(`http://localhost:3000/api/user/update/${id}`, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <p className="absolute left-[1163px] top-[222px] text-sm font-normal leading-[21px]">
        Welcome! {userName}
      </p>
      <p className="absolute left-[135px] top-[323px] text-black text-base font-medium leading-6">
        Manage My Account
      </p>
      <p className="absolute left-[135px] top-[475px] text-black text-base font-medium leading-6">
        My Orders
      </p>
      <p className="absolute w-[93px] left-[135px] h-[23px] top-[587px] text-black text-base font-medium leading-6">
        My WishList
      </p>
      <div className="flex flex-col items-start gap-2 absolute left-[170px] top-[363px]">
        <a
          href="#"
          className="text-[rgb(219,_68,_68)] text-base font-normal leading-6"
        >
          My Profile
        </a>
        <a
          href="#"
          className="opacity-50 text-black text-base font-normal leading-6"
        >
          Address Book
        </a>
        <a
          href="#"
          className="opacity-50 text-black text-base font-normal leading-6"
        >
          My Payment Options
        </a>
      </div>
      <div className="flex flex-col items-start gap-2 absolute left-[170px] top-[515px]">
        <a
          href="#"
          className="opacity-50 text-black text-base font-normal leading-6"
        >
          My Returns
        </a>
        <a
          href="#"
          className="opacity-50 text-black text-base font-normal leading-6"
        >
          My Cancellations
        </a>
      </div>
      <div
        className="overflow-hidden rounded absolute w-[870px] left-[434px] h-[630px] top-[323px] bg-white"
        style={{
          boxShadow: "0px 1px 13px rgba(0, 0, 0, 0.05)",
        }}
      >
        <p className="absolute left-20 top-10 text-[rgb(219,_68,_68)] text-xl font-medium leading-7">
          Edit Your Profile
        </p>
        <div className="flex items-start gap-[50px] absolute left-20 top-[84px]">
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">
              First Name
            </p>
            <input
              placeholder="First Name"
              type="text"
              className="overflow-hidden rounded w-[333px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">
              Last Name
            </p>
            <input
              placeholder="Last Name"
              type="text"
              className="overflow-hidden rounded w-[333px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
          </div>
        </div>
        <div className="flex items-start gap-[50px] absolute left-20 top-[190px]">
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">Email</p>
            <input
              placeholder="Email"
              type="email"
              className="overflow-hidden rounded w-[333px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">
              Address
            </p>
            <input
              placeholder="Address"
              type="text"
              className="overflow-hidden rounded w-[333px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 absolute left-20 top-[296px]">
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">
              Password Changes
            </p>
            <input
              placeholder="old password"
              type="password"
              className="overflow-hidden rounded w-[720px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
          </div>
          <input
            placeholder="New password"
            type="password"
            className="overflow-hidden rounded w-[720px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
            style={override}
          />
          <input
            placeholder="Confirm New password"
            type="password"
            className="overflow-hidden rounded w-[720px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
            style={override}
          />
          
        </div>

        <div className="flex items-center gap-8  absolute right-20 top-[550px]">
          <p className="text-[rgb(219,_68,_68)] text-xl font-medium">{msg}</p>

          <p
            onClick={() => {
              setFname("");
              setLname("");
              setEmail("");
              setAdresse("");
              setOldpass("");
              setNewpass("");
              setCnewpass("");
              setmsg("");
            }}
            className="text-black text-base font-normal "
          >
            Cancel
          </p>

          <button
            onClick={(e) => {
              if (verif() === true) {
                save(e);
              } else {
                setmsg("something wrong ! please try again");
              }
            }}
            className="flex justify-center items-center px-12 py-4 rounded bg-[rgb(219,_68,_68)] text-neutral-50 text-base font-medium leading-6 "
            style={override}
          >
            Save changes
          </button>
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
