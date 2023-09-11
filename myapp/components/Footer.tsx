import { AppStore } from "../public/AppStore";
import { GooglePlay } from "../public/GooglePlay";
import { IconCopyright } from "../public/IconCopyright";
import { IconFacebook } from "../public/IconFacebook";
import { IconInstagram } from "../public/IconInstagram";
import { IconLinkedin } from "../public/IconLinkedin";
import { IconTwitter } from "../public/IconTwitter";
import { Logo } from "../public/Logo";
import { QrCode } from "../public/QrCode";
import { SendMail } from "../public/SendMail";
import { UnderLine } from "./UnderLine";

export const Footer = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden relative w-full bg-black md:h-[440px]"
      style={override}
    >
      <div className="flex flex-col md:flex-row justify-around items-start p-5 md:p-20 gap-8 md:gap-[87px]">
        {/* Logo & Subscribe */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-6">
            <Logo />
            <a href="#" className="text-neutral-50 text-xl font-medium leading-7">
              Subscribe
            </a>
          </div>
          <p className="text-neutral-50 text-base font-normal leading-6">
            Get 10% off your first order
          </p>
          <SendMail
            override={{
              borderWidth: "1.5px",
              borderColor: "rgb(250, 250, 250)",
            }}
          />
        </div>

        {/* Support */}
        <div className="flex flex-col items-start gap-4">
          <a href="#" className="text-neutral-50 text-xl font-medium leading-7">
            Support
          </a>
          <div className="flex flex-col items-start gap-4">
            <a href="#" className="w-[175px] text-neutral-50 text-base font-normal leading-6">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              exclusive@gmail.com
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              +88015-88888-9999
            </a>
          </div>
        </div>

        {/* Account */}
        <div className="flex flex-col items-start gap-4">
          <a href="#" className="text-neutral-50 text-xl font-medium leading-7">
            Account
          </a>
          <div className="flex flex-col items-start gap-4">
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              My Account
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              Login / Register
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              Cart
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              Wishlist
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              Shop
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-4">
          <a href="#" className="text-neutral-50 text-xl font-medium leading-7">
            Quick Link
          </a>
          <div className="flex flex-col items-start gap-4">
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              Terms Of Use
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              FAQ
            </a>
            <a href="#" className="text-neutral-50 text-base font-normal leading-6">
              Contact
            </a>
          </div>
        </div>

        {/* Download App & Social Links */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-6">
            <a href="#" className="text-neutral-50 text-xl font-medium leading-7">
              Download App
            </a>
            <div className="flex flex-col items-start gap-2">
              <a href="#" className="opacity-70 text-neutral-50 text-xs font-medium leading-[18px]">
                Save &#x24;3 with App New User Only
              </a>
              <div className="flex items-center gap-2">
                <QrCode />
                <div className="flex flex-col items-start gap-1">
                  <GooglePlay />
                  <AppStore />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-6">
            <a href="#"><IconFacebook /></a>
            <a href="#"><IconTwitter /></a>
            <a href="#"><IconInstagram /></a>
            <a href="#"><IconLinkedin /></a>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col items-center gap-4 opacity-40 ">
        <UnderLine
          override={{
            height: "0px",
            width: "1440px",
          }}
        />
        <div className="flex items-center opacity-60">
          <div className="flex items-center gap-1.5">
            <IconCopyright />
            <p className="text-white text-base font-normal leading-6">
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
