import { TopHeader } from "./TopHeader";
import { HeaderComponent } from "./HeaderComponent";
import { Line_3 } from "../public/Line_3";
import { PlaceboxInfo } from "./PlaceboxInfo";
import { Footer } from "./Footer";
import Link from "next/link";
import line_16 from "../public/line_16.svg";
import { useState } from "react";
import axios from "axios";

export const Account = ({ override }: { override?: React.CSSProperties }) => {
  const userName="Amine"
  const id=1
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
        if (oldpass !== res.data.password) {
          setmsg("old password incorrect");
          return false;
        } else if (newpass !== cnewpass) {
          setmsg("confirm your password correctly !");
          return false;
        }
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const save = (e: any) => {
    e.preventDefault();
    var obj = {
      fname: fname,
      lname: lname,
      email: email,
      adresse: adresse,
      oldpass: oldpass,
      newpass: newpass,
      cnewpass: cnewpass,
    };
    console.log(obj);

    axios
      .put("http://localhost:3000/api/user/update", obj)
      .then((result) => {
        console.log(result);
      })
      .catch((error: any) => {
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
      <div
        className="flex items-center gap-3 absolute left-[100px] top-[222px] text-sm font-normal leading-[21px] "
        style={override}
      >
        <Link
          href="/"
          className="opacity-50 m-5p% text-black text-sm font-normal w-5px "
        >
          Home
        </Link>
        <img className="[rotate:117.1deg] w-[13px] h-0" src={line_16.src} />
        <Link
          href="/contact"
          className="text-black text-sm font-normal leading-[21px] "
        >
          Account
        </Link>
      </div>
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
              value={fname}
              placeholder="First Name"
              type="text"
              className="overflow-hidden rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">
              Last Name
            </p>

            <input
              value={lname}
              placeholder="Last Name"
              type="text"
              className="overflow-hidden rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex items-start gap-[50px] absolute left-20 top-[190px]">
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">Email</p>
            <input
              value={email}
              placeholder="Email"
              type="email"
              className="overflow-hidden rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">
              Address
            </p>
            <input
              value={adresse}
              placeholder="Address"
              type="text"
              className="overflow-hidden rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
              onChange={(e) => {
                setAdresse(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 absolute left-20 top-[296px]">
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-base font-normal leading-6">
              Password Changes
            </p>

            <input
              value={oldpass}
              placeholder="old password"
              type="password"
              className="overflow-hidden rounded w-[750px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
              onChange={(e) => {
                setOldpass(e.target.value);
              }}
            />
          </div>

          <input
            value={newpass}
            placeholder="New password"
            type="password"
            className="overflow-hidden rounded w-[750px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
            style={override}
            onChange={(e) => {
              setNewpass(e.target.value);
            }}
          />
          <input
            value={cnewpass}
            placeholder="Confirm New password"
            type="password"
            className="overflow-hidden rounded w-[750px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
            style={override}
            onChange={(e) => {
              setCnewpass(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center gap-8  absolute right-20 top-[550px]">
          <p className="text-red">{msg}</p>

          <p
            onClick={() => {
              setFname("");
              setLname("");
              setEmail("");
              setAdresse("");
              setOldpass("");
              setNewpass("");
              setCnewpass("");
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
                setmsg("something wrong ! please try later");
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
          left: "25px",
        }}
      />
    </div>
  );
};
