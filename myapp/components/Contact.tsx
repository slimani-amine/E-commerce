import { UnderLine } from "./UnderLine";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { Tostify } from "../public/Tostify";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const Contact = ({ override }: { override?: React.CSSProperties }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [msg, setmsg] = useState<string>("");
  const [err, seterr] = useState<string>("");
  const router = useRouter();
  const send = (e: any) => {
    e.preventDefault();
    var obj = {
      name: name,
      email: email,
      phone: phone,
      message: msg,
    };
    const missingFields = [];
    if (!obj.name) missingFields.push("name");
    if (!obj.email) missingFields.push("email");
    if (!obj.message) missingFields.push("message");
    if (missingFields.length > 0) {
      const fieldsString = missingFields.join(", ");
      seterr(`Please complete the following fields: ${fieldsString}.`);
    } else {
      seterr("");
      axios
        .post("http://localhost:5000/contact/createContact", obj)
        .then((result) => {
          toast.success(
            "Thank you for connecting with us! We'll be in touch soon. Please keep an eye on your email 😉"
          );
          setTimeout(() => {
            router.push("/dropdown");
          }, 3000);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      className="relative w-full h-[700px] bg-white font-[Poppins] "
      style={override}
    >
      <div className="absolute w-[800px] h-[457px] top-[023px] left-[504px] bg-[color:var(--primary)] rounded-[4px] overflow-hidden shadow-[var(--categogy-5)]">
        <div className="inline-flex flex-col items-end gap-[32px] relative top-[40px] left-[31px]">
          <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
            <Tostify />
            <div className="relative w-[235px] h-[50px] bg-neutral-100 rounded-[4px]">
              <input
                placeholder="Your Name *"
                type="text"
                className="overflow-hidden rounded h-[50px] w-[100%] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="relative w-[235px] h-[50px] bg-neutral-100 rounded-[4px]">
              <input
                placeholder="Your Email *"
                type="email"
                className="overflow-hidden rounded h-[50px] w-[100%] bg-neutral-100 text-gray-900 focus:text-black-600"
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
                className="overflow-hidden rounded h-[50px] w-[100%] bg-neutral-100 text-gray-900 focus:text-black-600"
                style={override}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
            </div>
          </div>

          <textarea
            placeholder="Your Massage *"
            className="!h-[207px] !w-[737px]  bg-neutral-100 rounded-[4px] "
            onChange={(e) => {
              setmsg(e.target.value);
            }}
          ></textarea>

          <Link
            href="/dropdown"
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
        <p className=" text-[rgb(219,_68,_68)] font-medium ml-[6%]">{err}</p>
      </div>
      <div className="absolute w-[340px] h-[457px] top-[23px] left-[135px] bg-[color:var(--primary)] rounded-[4px] overflow-hidden shadow-[var(--categogy-5)]">
        <div className="inline-flex flex-col items-start gap-[32px] relative top-[40px] left-[35px]">
          <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <div className="relative w-fit [font-family:var(--title-16px-medium-font-family)] font-[number:var(--title-16px-medium-font-weight)] text-red-500 text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap ">
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
              <div className="relative w-fit [font-family:var(--title-16px-medium-font-family)] font-[number:var(--title-16px-medium-font-weight)] text-red-500 text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap ">
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
    </div>
  );
};
