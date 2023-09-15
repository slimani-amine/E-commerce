import React, { useEffect, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";

interface AccountProps {
  override?: React.CSSProperties;
  firstName: string;
}

export const Account: React.FC<AccountProps> = ({ override, firstName }) => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [oldpass, setOldpass] = useState<string>("");
  const [newpass, setNewpass] = useState<string>("");
  const [cnewpass, setCnewpass] = useState<string>("");
  const [msg, setmsg] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const router = useRouter();
  const jwt = require("jsonwebtoken");
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const decodedToken = jwt.decode(token);
  var idUser = 0;
  if (decodedToken !== null) {
    idUser = decodedToken.id;
  }
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/getUser/${idUser}`)
      .then((result) => {
        setUserName(result.data.lasstName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const verif = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/user/getUser/${idUser}`
      );
      console.log(res.data);
      const isPasswordValid = await bcrypt.compare(oldpass, res.data.password);
      console.log(isPasswordValid);
      if (!isPasswordValid) {
        setmsg("Old password is incorrect.");
        return false;
      } else if (newpass !== cnewpass) {
        setmsg("Please confirm your password.");
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      setmsg("An error occurred. Please try again.");
      return false;
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const canSave = await verif();
    if (canSave) {
      const hashedNewpass = await bcrypt.hash(newpass, 10);
      const obj = {
        adresse: adresse,
        firstName: fname,
        lastName: lname,
        email: email,
        password: hashedNewpass,
      };
      try {
        console.log(obj ,"obj");
        const res = await axios.put(
          `http://localhost:5000/user/updateUser/${idUser}`,
          obj
        );
        router.push("/dropdown");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      setmsg("Something went wrong! Please try again.");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await verif();
    if (isValid) {
      await save(e);
    } else {
      setmsg("Something went wrong! Please try again.");
    }
  };
  const cancel = () => {
    setAdresse("");
    setCnewpass("");
    setEmail("");
    setFname("");
    setLname("");
    setNewpass("");
    setOldpass("");
    setmsg("");
  };
  return (
    <div
      className="relative w-full h-[900px]  bg-white font-[Poppins]"
      style={override}
    >
      <p className="absolute left-[1163px]  text-sm font-normal leading-[21px]">
        Welcome! {userName}
      </p>
      <p className="absolute left-[135px] top-[123px] text-black text-base font-medium leading-6">
        Manage My Account
      </p>
      <p className="absolute left-[135px] top-[275px] text-black text-base font-medium leading-6">
        My Orders
      </p>
      <p className="absolute w-[93px] left-[135px] h-[23px] top-[387px] text-black text-base font-medium leading-6">
        My WishList
      </p>
      <div className="flex flex-col items-start gap-2 absolute left-[170px] top-[163px]">
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
      <div className="flex flex-col items-start gap-2 absolute left-[170px] top-[315px]">
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
        className="overflow-hidden rounded absolute w-[870px] left-[434px] h-[630px] top-[123px] bg-white"
        style={{
          boxShadow: "0px 1px 13px rgba(0, 0, 0, 0.05)",
        }}
      >
        <p className="absolute left-20 top-10 text-[rgb(219,_68,_68)] text-xl font-medium leading-7">
          Edit Your Profile
        </p>
        <div className="flex items-start gap-[50px] absolute left-20 top-[84px]">
          <div className="flex flex-col items-start gap-2">
            <div className="flex">
              <input
                placeholder="First Name"
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="overflow-hidden mr-4 rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
              />
              <input
                placeholder="Last Name"
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="overflow-hidden rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
              />
            </div>
            <div className="flex">
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="overflow-hidden mr-4 rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
              />
              <input
                placeholder="Address"
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                className="overflow-hidden rounded w-[350px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
              />
            </div>

            <input
              placeholder="old password"
              type="password"
              value={oldpass}
              onChange={(e) => setOldpass(e.target.value)}
              className="overflow-hidden rounded w-[720px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
            <input
              placeholder="New password"
              type="password"
              value={newpass}
              onChange={(e) => setNewpass(e.target.value)}
              className="overflow-hidden rounded w-[720px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
            <input
              placeholder="Confirm New password"
              type="password"
              value={cnewpass}
              onChange={(e) => setCnewpass(e.target.value)}
              className="overflow-hidden rounded w-[720px] h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
              style={override}
            />
            <p className=" text-[rgb(219,_68,_68)] text-xl font-medium">
              {msg}
            </p>
            <div className="flex ml-[58%] text-center ">
              <p
                className="text-black  text-xl font-medium mr-5 mt-3"
                onClick={() => {
                  cancel();
                }}
              >
                cancel
              </p>
              <br />
              <button
                onClick={handleSave}
                className="mr-1 flex justify-center items-center px-12 py-4 rounded bg-[rgb(219,_68,_68)] text-neutral-50 text-base font-medium "
                style={override}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
