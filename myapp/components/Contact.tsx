import { TopHeader } from "./TopHeader";
import { HeaderComponent } from "./HeaderComponent";
import { Line_3 } from "../public/Line_3";
import { Footer } from "./Footer";
import { UnderLine } from "./UnderLine";
import { CellphoneHover } from "../public/CellphoneHover";
import { MailHover } from "../public/MailHover";
import Link from "next/link";
import line_16 from "../public/line_16.svg";
import axios from "axios";
import { useState } from "react";

export const Contact = ({ override }: { override?: React.CSSProperties }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [msg, setmsg] = useState<string>("");
  const send = (e: any) => {
    e.preventDefault();
    var obj = {
      name: name,
      email: email,
      phone: phone,
      message: msg,
    };
    axios
      .post("http://localhost:3000/api/contact/add", obj)
      .then((result) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const hundlechange = (e: any) => {};
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
      <div className="flex items-center gap-3" style={override}>
        <Link
          href="/"
          className="opacity-50 text-black text-sm font-normal leading-[21px]"
        >
          Home
        </Link>
        <img className="[rotate:117.1deg] w-[13px] h-0" src={line_16.src} />
        <Link
          href="/contact"
          className="text-black text-sm font-normal leading-[21px]"
        >
          Contact
        </Link>
      </div>
      <div
        className="flex items-center gap-3"
        style={{
          position: "absolute",
          top: "222px",
          left: "135px",
        }}
      >
        <Link
          href="/"
          className="opacity-50 text-black text-sm font-normal leading-[21px]"
        >
          Account
        </Link>
        <img className="[rotate:117.1deg] w-[13px] h-0" src={line_16.src} />
        <Link
          href="/"
          className="text-black text-sm font-normal leading-[21px]"
        >
          Contact
        </Link>
      </div>
      <div className="absolute w-[800px] h-[457px] top-[323px] left-[504px] bg-[color:var(--primary)] rounded-[4px] overflow-hidden shadow-[var(--categogy-5)]">
        <div className="inline-flex flex-col items-end gap-[32px] relative top-[40px] left-[31px]">
          <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
            <div className="relative w-[235px] h-[50px] bg-neutral-100 rounded-[4px]">
              <input
                placeholder="Your Name"
                type="text"
                className="overflow-hidden rounded h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="relative w-[235px] h-[50px] bg-neutral-100 rounded-[4px]">
              <input
                placeholder="Your Email"
                type="email"
                className="overflow-hidden rounded h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="relative w-[235px] h-[50px] bg-neutral-100 rounded-[4px]">
              <input
                placeholder="Your Phone"
                type="text"
                className="overflow-hidden rounded h-[50px] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
            </div>
          </div>

          <textarea
            placeholder="Your Massage"
            className="!h-[207px] !w-[737px]  bg-neutral-100 rounded-[4px] "
            onChange={(e) => {
              setmsg(e.target.value);
            }}
          ></textarea>
          <Link
            href="/"
            className="text-neutral-50 text-base font-medium leading-6"
          >
            <button
              onClick={(e) => {
                send(e);
              }}
              className="flex justify-center items-center px-12 py-4 rounded bg-[rgb(219,_68,_68)]"
              style={override}
            >
              Send message
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute w-[340px] h-[457px] top-[323px] left-[135px] bg-[color:var(--primary)] rounded-[4px] overflow-hidden shadow-[var(--categogy-5)]">
        <div className="inline-flex flex-col items-start gap-[32px] relative top-[40px] left-[35px]">
          <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <CellphoneHover className="!relative !w-[40px] !h-[40px]" />
              <div className="relative w-fit [font-family:var(--title-16px-medium-font-family)] font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap ">
                Call To Us
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <p className="relative w-[262px] mt-[-1.00px] [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] ">
                We are available 24/7, 7 days a week.
              </p>
              <div className="relative w-fit [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
                Phone: +8801611112222
              </div>
            </div>
          </div>
          <UnderLine />
          <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <MailHover className="!relative !w-[40px] !h-[40px]" />
              <div className="relative w-fit [font-family:var(--title-16px-medium-font-family)] font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap ">
                Write To US
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <p className="relative w-[250px] mt-[-1.00px] [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] ">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <div className="relative w-fit [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
                Emails: customer@exclusive.com
              </div>
              <div className="relative w-fit [font-family:var(--title-14px-regular-font-family)] font-[number:var(--title-14px-regular-font-weight)] text-[color:var(--text-2)] text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap ">
                Emails: support@exclusive.com
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
