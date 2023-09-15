/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Cart17 } from "../../icons/Cart17";
import { HeartSmall16 } from "../../icons/HeartSmall16";
import { IconDelete4 } from "../../icons/IconDelete4";
import { QuickView6 } from "../../icons/QuickView6";
import { StarHalfFilled3 } from "../../icons/StarHalfFilled3";
import { DiscountPercent } from "../DiscountPercent";
import { FillEye } from "../FillEye";
import { FiveStar } from "../FiveStar";
import { NewButton } from "../NewButton";

interface Props {
  product:
    | "cart"
    | "just-for-your-cart-gamepad"
    | "cart-with-colour-chose"
    | "dog-food-no-discount"
    | "wishlist-cart-with-discount"
    | "just-for-your-cart-keyboard"
    | "laptop-no-discount"
    | "man-jacket-color-choosing"
    | "gaming-control-color-choosing"
    | "bestselling-guccibag"
    | "jacket-with-wishlist"
    | "bestselling-bookself"
    | "soccer-boat-color-choosing"
    | "gamepad-wishlist"
    | "beauty-product-no-discount"
    | "wishlist-cart-with-no-discount"
    | "bestselling-coat"
    | "cart-hover"
    | "bestselling-cooling-fan"
    | "product-5"
    | "kids-car-with-color-choosing"
    | "dslr-camera-no-discount"
    | "just-for-your-cart-bag"
    | "just-for-your-cart-monitor"
    | "cart-with-no-discount";
  className: any;
  fillEyeIcon: JSX.Element;
  override: JSX.Element;
}

export const Cart = ({
  product,
  className,
  fillEyeIcon = <IconDelete4 className="!absolute !w-[24px] !h-[24px] !top-[5px] !left-[5px]" />,
  override = <IconDelete4 className="!absolute !w-[24px] !h-[24px] !top-[5px] !left-[5px]" />,
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex flex-col items-start gap-[16px] relative ${className}`}>
      <div className="w-[270px] h-[250px] overflow-hidden rounded-[4px] bg-[color:var(--secondary)] relative">
        {(product === "cart-hover" ||
          product === "cart-with-colour-chose" ||
          product === "cart-with-no-discount" ||
          product === "dslr-camera-no-discount" ||
          product === "gamepad-wishlist" ||
          product === "jacket-with-wishlist" ||
          product === "just-for-your-cart-bag" ||
          product === "just-for-your-cart-gamepad" ||
          product === "just-for-your-cart-keyboard" ||
          product === "just-for-your-cart-monitor" ||
          product === "wishlist-cart-with-discount" ||
          product === "wishlist-cart-with-no-discount") && (
          <div className="w-[270px] left-0 top-[209px] h-[41px] rounded-[0px_0px_4px_4px] bg-black absolute">
            <div
              className={`${
                product === "cart-hover"
                  ? "[font-family:var(--title-12px-regular-font-family)]"
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? "[font-family:var(--title-16px-medium-font-family)]"
                  : ""
              } ${
                product === "gamepad-wishlist" ||
                product === "jacket-with-wishlist" ||
                product === "just-for-your-cart-bag" ||
                product === "just-for-your-cart-gamepad" ||
                product === "just-for-your-cart-keyboard" ||
                product === "just-for-your-cart-monitor" ||
                product === "wishlist-cart-with-discount" ||
                product === "wishlist-cart-with-no-discount"
                  ? "inline-flex"
                  : ""
              } ${
                product === "cart-hover"
                  ? "left-[99px]"
                  : [
                      "gamepad-wishlist",
                      "jacket-with-wishlist",
                      "wishlist-cart-with-discount",
                      "wishlist-cart-with-no-discount",
                    ].includes(product)
                  ? "left-[84px]"
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? "left-[87px]"
                  : "left-[85px]"
              } ${
                product === "cart-hover"
                  ? "tracking-[var(--title-12px-regular-letter-spacing)]"
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? "tracking-[var(--title-16px-medium-letter-spacing)]"
                  : ""
              } ${
                product === "cart-hover"
                  ? ""
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? ""
                  : ""
              } ${
                product === "cart-hover"
                  ? "text-[length:var(--title-12px-regular-font-size)]"
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? "text-[length:var(--title-16px-medium-font-size)]"
                  : ""
              } ${
                product === "gamepad-wishlist" ||
                product === "jacket-with-wishlist" ||
                product === "just-for-your-cart-bag" ||
                product === "just-for-your-cart-gamepad" ||
                product === "just-for-your-cart-keyboard" ||
                product === "just-for-your-cart-monitor" ||
                product === "wishlist-cart-with-discount" ||
                product === "wishlist-cart-with-no-discount"
                  ? "items-center"
                  : ""
              } ${
                product === "cart-hover"
                  ? "top-[11px]"
                  : [
                      "gamepad-wishlist",
                      "jacket-with-wishlist",
                      "wishlist-cart-with-discount",
                      "wishlist-cart-with-no-discount",
                    ].includes(product)
                  ? "top-[8px]"
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? "top-[7px]"
                  : "top-[9px]"
              } ${
                ["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(
                  product
                )
                  ? "text-white"
                  : ""
              } ${
                product === "gamepad-wishlist" ||
                product === "jacket-with-wishlist" ||
                product === "just-for-your-cart-bag" ||
                product === "just-for-your-cart-gamepad" ||
                product === "just-for-your-cart-keyboard" ||
                product === "just-for-your-cart-monitor" ||
                product === "wishlist-cart-with-discount" ||
                product === "wishlist-cart-with-no-discount"
                  ? "gap-[8px]"
                  : ""
              } ${
                product === "cart-hover"
                  ? "font-[number:var(--title-12px-regular-font-weight)]"
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? "font-[number:var(--title-16px-medium-font-weight)]"
                  : ""
              } ${
                product === "cart-hover"
                  ? "leading-[var(--title-12px-regular-line-height)]"
                  : ["cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(product)
                  ? "leading-[var(--title-16px-medium-line-height)]"
                  : ""
              } ${
                ["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(
                  product
                )
                  ? "whitespace-nowrap"
                  : ""
              } ${
                ["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(
                  product
                )
                  ? "absolute"
                  : "relative"
              }`}
            >
              {["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(
                product
              ) && <>Add To Cart</>}

              {(product === "gamepad-wishlist" ||
                product === "jacket-with-wishlist" ||
                product === "just-for-your-cart-bag" ||
                product === "just-for-your-cart-gamepad" ||
                product === "just-for-your-cart-keyboard" ||
                product === "just-for-your-cart-monitor" ||
                product === "wishlist-cart-with-discount" ||
                product === "wishlist-cart-with-no-discount") && (
                <>
                  <Cart17 className="!relative !w-[24px] !h-[24px]" color="white" />
                  <div className="[font-family:var(--title-12px-regular-font-family)] w-fit tracking-[var(--title-12px-regular-letter-spacing)]  text-[length:var(--title-12px-regular-font-size)] text-white font-[number:var(--title-12px-regular-font-weight)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap relative">
                    Add To Cart
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div
          className={`top-[12px] ${
            product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-bag" ||
            product === "just-for-your-cart-gamepad" ||
            product === "kids-car-with-color-choosing" ||
            product === "product-5" ||
            product === "wishlist-cart-with-discount"
              ? "w-[246px]"
              : product === "dslr-camera-no-discount"
              ? "w-[222px]"
              : "w-[218px]"
          } ${
            product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-bag" ||
            product === "just-for-your-cart-gamepad" ||
            product === "kids-car-with-color-choosing" ||
            product === "product-5" ||
            product === "wishlist-cart-with-discount"
              ? "left-[12px]"
              : product === "dslr-camera-no-discount"
              ? "left-[36px]"
              : "left-[40px]"
          } ${
            [
              "cart-hover",
              "cart-with-colour-chose",
              "cart-with-no-discount",
              "dslr-camera-no-discount",
              "wishlist-cart-with-discount",
            ].includes(product)
              ? "h-[183px]"
              : [
                  "gamepad-wishlist",
                  "jacket-with-wishlist",
                  "just-for-your-cart-bag",
                  "just-for-your-cart-gamepad",
                  "just-for-your-cart-keyboard",
                  "just-for-your-cart-monitor",
                ].includes(product)
              ? "h-[190px]"
              : product === "wishlist-cart-with-no-discount"
              ? "h-[186px]"
              : "h-[203px]"
          } ${
            product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "dslr-camera-no-discount" ||
            product === "gamepad-wishlist" ||
            product === "jacket-with-wishlist" ||
            product === "just-for-your-cart-bag" ||
            product === "just-for-your-cart-gamepad" ||
            product === "just-for-your-cart-keyboard" ||
            product === "just-for-your-cart-monitor" ||
            product === "wishlist-cart-with-discount" ||
            product === "wishlist-cart-with-no-discount"
              ? "absolute"
              : "relative"
          }`}
        >
          <div
            className={`inline-flex flex-col items-start top-0 gap-[8px] absolute ${
              product === "cart-hover" ||
              product === "cart-with-colour-chose" ||
              product === "cart-with-no-discount" ||
              product === "cart" ||
              product === "gaming-control-color-choosing" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "kids-car-with-color-choosing" ||
              product === "product-5" ||
              product === "wishlist-cart-with-discount"
                ? "left-[212px]"
                : product === "dslr-camera-no-discount"
                ? "left-[188px]"
                : "left-[184px]"
            }`}
          >
            {(product === "gamepad-wishlist" ||
              product === "jacket-with-wishlist" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "just-for-your-cart-keyboard" ||
              product === "just-for-your-cart-monitor" ||
              product === "wishlist-cart-with-discount" ||
              product === "wishlist-cart-with-no-discount") && (
              <FillEye
                icon={
                  ["just-for-your-cart-bag", "just-for-your-cart-gamepad", "wishlist-cart-with-discount"].includes(
                    product
                  )
                    ? fillEyeIcon
                    : override
                }
              />
            )}

            {(product === "beauty-product-no-discount" ||
              product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "bestselling-cooling-fan" ||
              product === "bestselling-guccibag" ||
              product === "cart-hover" ||
              product === "cart-with-colour-chose" ||
              product === "cart-with-no-discount" ||
              product === "cart" ||
              product === "dog-food-no-discount" ||
              product === "dslr-camera-no-discount" ||
              product === "gaming-control-color-choosing" ||
              product === "kids-car-with-color-choosing" ||
              product === "laptop-no-discount" ||
              product === "man-jacket-color-choosing" ||
              product === "product-5" ||
              product === "soccer-boat-color-choosing") && (
              <>
                <div className="w-[34px] h-[34px] rounded-[17px] bg-white relative">
                  <HeartSmall16 className="!absolute !w-[24px] !h-[24px] !top-[5px] !left-[5px]" />
                </div>
                <FillEye icon={<QuickView6 className="!absolute !w-[24px] !h-[24px] !top-[5px] !left-[5px]" />} />
              </>
            )}
          </div>
          {(product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-gamepad" ||
            product === "kids-car-with-color-choosing" ||
            product === "product-5") && <NewButton className="!absolute !left-0 !top-0" />}

          {["just-for-your-cart-bag", "wishlist-cart-with-discount"].includes(product) && (
            <DiscountPercent className="!absolute !left-0 !top-0" />
          )}

          <div
            className={`w-[190px] h-[180px] absolute ${
              product === "cart-hover" ||
              product === "cart-with-colour-chose" ||
              product === "cart-with-no-discount" ||
              product === "cart" ||
              product === "gaming-control-color-choosing" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "kids-car-with-color-choosing" ||
              product === "product-5" ||
              product === "wishlist-cart-with-discount"
                ? "left-[28px]"
                : "left-0"
            } ${
              [
                "cart-hover",
                "cart-with-colour-chose",
                "cart-with-no-discount",
                "dslr-camera-no-discount",
                "wishlist-cart-with-discount",
              ].includes(product)
                ? "top-[3px]"
                : [
                    "gamepad-wishlist",
                    "jacket-with-wishlist",
                    "just-for-your-cart-bag",
                    "just-for-your-cart-gamepad",
                    "just-for-your-cart-keyboard",
                    "just-for-your-cart-monitor",
                  ].includes(product)
                ? "top-[10px]"
                : product === "wishlist-cart-with-no-discount"
                ? "top-[6px]"
                : "top-[23px]"
            }`}
          >
            {(product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "bestselling-cooling-fan" ||
              product === "bestselling-guccibag" ||
              product === "cart-hover" ||
              product === "cart-with-colour-chose" ||
              product === "cart-with-no-discount" ||
              product === "cart" ||
              product === "dog-food-no-discount" ||
              product === "dslr-camera-no-discount" ||
              product === "gamepad-wishlist" ||
              product === "gaming-control-color-choosing" ||
              product === "jacket-with-wishlist" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "just-for-your-cart-keyboard" ||
              product === "just-for-your-cart-monitor" ||
              product === "kids-car-with-color-choosing" ||
              product === "laptop-no-discount" ||
              product === "man-jacket-color-choosing" ||
              product === "product-5" ||
              product === "soccer-boat-color-choosing" ||
              product === "wishlist-cart-with-discount" ||
              product === "wishlist-cart-with-no-discount") && (
              <img
                className={`absolute ${
                  ["just-for-your-cart-gamepad", "laptop-no-discount"].includes(product)
                    ? "w-[172px]"
                    : ["bestselling-bookself", "bestselling-coat", "cart"].includes(product)
                    ? "w-[140px]"
                    : product === "kids-car-with-color-choosing"
                    ? "w-[180px]"
                    : product === "just-for-your-cart-bag"
                    ? "w-[158px]"
                    : [
                        "bestselling-cooling-fan",
                        "just-for-your-cart-keyboard",
                        "wishlist-cart-with-no-discount",
                      ].includes(product)
                    ? "w-[190px]"
                    : product === "just-for-your-cart-monitor"
                    ? "w-[170px]"
                    : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product)
                    ? "w-[182px]"
                    : product === "dslr-camera-no-discount"
                    ? "w-[146px]"
                    : product === "dog-food-no-discount"
                    ? "w-[115px]"
                    : product === "soccer-boat-color-choosing"
                    ? "w-[186px]"
                    : "w-[178px]"
                } ${
                  ["just-for-your-cart-gamepad", "laptop-no-discount"].includes(product)
                    ? "left-[9px]"
                    : ["bestselling-bookself", "bestselling-coat", "cart"].includes(product)
                    ? "left-[25px]"
                    : product === "kids-car-with-color-choosing"
                    ? "left-[5px]"
                    : product === "just-for-your-cart-bag"
                    ? "left-[16px]"
                    : [
                        "bestselling-cooling-fan",
                        "just-for-your-cart-keyboard",
                        "wishlist-cart-with-no-discount",
                      ].includes(product)
                    ? "left-0"
                    : product === "just-for-your-cart-monitor"
                    ? "left-[10px]"
                    : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product)
                    ? "left-[4px]"
                    : product === "dslr-camera-no-discount"
                    ? "left-[22px]"
                    : product === "dog-food-no-discount"
                    ? "left-[38px]"
                    : product === "soccer-boat-color-choosing"
                    ? "left-[2px]"
                    : "left-[6px]"
                } ${
                  product === "just-for-your-cart-gamepad"
                    ? "top-[14px]"
                    : ["bestselling-coat", "cart"].includes(product)
                    ? "top-[17px]"
                    : product === "kids-car-with-color-choosing"
                    ? "top-[24px]"
                    : ["gamepad-wishlist", "gaming-control-color-choosing"].includes(product)
                    ? "top-[15px]"
                    : product === "just-for-your-cart-bag"
                    ? "top-[7px]"
                    : product === "just-for-your-cart-keyboard"
                    ? "top-[40px]"
                    : ["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product)
                    ? "top-[47px]"
                    : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product)
                    ? "top-[2px]"
                    : ["dslr-camera-no-discount", "soccer-boat-color-choosing"].includes(product)
                    ? "top-[8px]"
                    : product === "bestselling-bookself"
                    ? "top-[3px]"
                    : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                    ? "top-0"
                    : "top-[26px]"
                } ${
                  product === "just-for-your-cart-gamepad"
                    ? "h-[152px]"
                    : ["bestselling-coat", "cart"].includes(product)
                    ? "h-[146px]"
                    : product === "kids-car-with-color-choosing"
                    ? "h-[133px]"
                    : ["gamepad-wishlist", "gaming-control-color-choosing"].includes(product)
                    ? "h-[150px]"
                    : product === "just-for-your-cart-bag"
                    ? "h-[166px]"
                    : product === "just-for-your-cart-keyboard"
                    ? "h-[101px]"
                    : ["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product)
                    ? "h-[95px]"
                    : ["bestselling-bookself", "jacket-with-wishlist", "man-jacket-color-choosing"].includes(product)
                    ? "h-[176px]"
                    : product === "dslr-camera-no-discount"
                    ? "h-[163px]"
                    : ["dog-food-no-discount", "laptop-no-discount"].includes(product)
                    ? "h-[180px]"
                    : product === "soccer-boat-color-choosing"
                    ? "h-[164px]"
                    : "h-[129px]"
                }`}
                alt="Element"
                src={
                  product === "just-for-your-cart-gamepad"
                    ? "https://c.animaapp.com/O77hChkP/img/g92-2-500x500-1-1@2x.png"
                    : ["bestselling-coat", "cart"].includes(product)
                    ? "https://c.animaapp.com/O77hChkP/img/672462-zah9d-5626-002-100-0000-light-the-north-face-x-gucci-coat-1@2x.png"
                    : product === "kids-car-with-color-choosing"
                    ? "https://c.animaapp.com/O77hChkP/img/new-mercedes-benz-gtr-licensed-ride-on-car-kids-electric-toy-car@2x.png"
                    : ["gamepad-wishlist", "gaming-control-color-choosing"].includes(product)
                    ? "https://c.animaapp.com/O77hChkP/img/gp11-prd3-1-2@2x.png"
                    : product === "just-for-your-cart-bag"
                    ? "https://c.animaapp.com/O77hChkP/img/ideapad-gaming-3i-01-500x500-1-2@2x.png"
                    : product === "just-for-your-cart-keyboard"
                    ? "https://c.animaapp.com/O77hChkP/img/ak-900-01-500x500-1-1@2x.png"
                    : product === "just-for-your-cart-monitor"
                    ? "https://c.animaapp.com/O77hChkP/img/g27cq4-500x500-1-1@2x.png"
                    : ["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product)
                    ? "https://c.animaapp.com/O77hChkP/img/gammaxx-l240-argb-1-500x500-1-2@2x.png"
                    : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product)
                    ? "https://c.animaapp.com/O77hChkP/img/698717-z8a1x-3475-001-100-0000-light-reversible-quilted-satin-ja-2@2x.png"
                    : product === "dslr-camera-no-discount"
                    ? "https://c.animaapp.com/O77hChkP/img/eos-250d-03-500x500-1@2x.png"
                    : product === "bestselling-bookself"
                    ? "https://c.animaapp.com/O77hChkP/img/sam-moghadam-khamseh-l-7mqshl-au-unsplash-1@2x.png"
                    : product === "dog-food-no-discount"
                    ? "https://c.animaapp.com/O77hChkP/img/71rdoexxtrl-1@2x.png"
                    : product === "laptop-no-discount"
                    ? "https://c.animaapp.com/O77hChkP/img/ideapad-gaming-3i-01-500x500-1-1@2x.png"
                    : product === "soccer-boat-color-choosing"
                    ? "https://c.animaapp.com/O77hChkP/img/copa-sense-1@2x.png"
                    : "https://c.animaapp.com/O77hChkP/img/547953-9c2st-8746-001-082-0000-light-gucci-savoy-medium-duffle-b-6@2x.png"
                }
              />
            )}
          </div>
          {product === "beauty-product-no-discount" && (
            <img
              className="absolute w-[172px] h-[159px] top-[34px] left-[9px]"
              alt="Curology"
              src="https://c.animaapp.com/O77hChkP/img/curology-j7pkvqrtusm-unsplash-1@2x.png"
            />
          )}
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[8px] flex-[0_0_auto] relative">
        <div className="[font-family:var(--title-16px-medium-font-family)] w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)]  text-black font-[number:var(--title-16px-medium-font-weight)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap relative">
          {[
            "bestselling-guccibag",
            "cart-hover",
            "cart-with-colour-chose",
            "cart-with-no-discount",
            "product-5",
            "wishlist-cart-with-discount",
          ].includes(product) && <>Gucci duffle bag</>}

          {["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product) && (
            <>RGB liquid CPU Cooler</>
          )}

          {["gamepad-wishlist", "gaming-control-color-choosing"].includes(product) && <>GP11 Shooter USB Gamepad</>}

          {["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product) && <>Quilted Satin Jacket</>}

          {product === "dslr-camera-no-discount" && <>CANON EOS DSLR Camera</>}

          {product === "dog-food-no-discount" && <>Breed Dry Dog Food</>}

          {["just-for-your-cart-bag", "laptop-no-discount"].includes(product) && <>ASUS FHD Gaming Laptop</>}

          {product === "beauty-product-no-discount" && <>Curology Product Set</>}

          {product === "just-for-your-cart-gamepad" && <>HAVIT HV-G92 Gamepad</>}

          {product === "just-for-your-cart-keyboard" && <>AK-900 Wired Keyboard</>}

          {product === "just-for-your-cart-monitor" && <>IPS LCD Gaming Monitor</>}

          {product === "bestselling-bookself" && <>Small BookSelf</>}

          {["bestselling-coat", "cart"].includes(product) && <>The north coat</>}

          {product === "kids-car-with-color-choosing" && <>Kids Electric Car</>}

          {product === "soccer-boat-color-choosing" && <>Jr. Zoom Soccer Cleats</>}
        </div>
        <div
          className={`inline-flex flex-[0_0_auto] relative ${
            product === "beauty-product-no-discount" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "dog-food-no-discount" ||
            product === "dslr-camera-no-discount" ||
            product === "gaming-control-color-choosing" ||
            product === "kids-car-with-color-choosing" ||
            product === "laptop-no-discount" ||
            product === "man-jacket-color-choosing" ||
            product === "product-5" ||
            product === "soccer-boat-color-choosing"
              ? "items-center"
              : "items-start"
          } ${
            product === "beauty-product-no-discount" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "dog-food-no-discount" ||
            product === "dslr-camera-no-discount" ||
            product === "gaming-control-color-choosing" ||
            product === "kids-car-with-color-choosing" ||
            product === "laptop-no-discount" ||
            product === "man-jacket-color-choosing" ||
            product === "product-5" ||
            product === "soccer-boat-color-choosing"
              ? "gap-[8px]"
              : "gap-[12px]"
          }`}
        >
          {(product === "beauty-product-no-discount" ||
            product === "bestselling-coat" ||
            product === "bestselling-cooling-fan" ||
            product === "bestselling-guccibag" ||
            product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "dog-food-no-discount" ||
            product === "dslr-camera-no-discount" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-bag" ||
            product === "kids-car-with-color-choosing" ||
            product === "laptop-no-discount" ||
            product === "man-jacket-color-choosing" ||
            product === "product-5" ||
            product === "soccer-boat-color-choosing" ||
            product === "wishlist-cart-with-discount") && (
            <>
              <div
                className={`relative ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "[font-family:var(--title-16px-medium-font-family)]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "w-fit"
                    : ""
                } ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "inline-flex"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "mt-[-1.00px]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "tracking-[var(--title-16px-medium-letter-spacing)]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "text-[length:var(--title-16px-medium-font-size)]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? ""
                    : ""
                } ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "items-start"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "text-[color:var(--secondary-2)]"
                    : ""
                } ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "gap-[12px]"
                    : ""
                } ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "flex-[0_0_auto]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "font-[number:var(--title-16px-medium-font-weight)]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "leading-[var(--title-16px-medium-line-height)]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "whitespace-nowrap"
                    : ""
                }`}
              >
                {[
                  "bestselling-guccibag",
                  "cart-hover",
                  "just-for-your-cart-bag",
                  "wishlist-cart-with-discount",
                ].includes(product) && <>$960</>}

                {product === "bestselling-cooling-fan" && <>$160</>}

                {["bestselling-coat", "cart"].includes(product) && <>$260</>}

                {(product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing") && (
                  <div className="[font-family:var(--title-16px-medium-font-family)] w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)]  text-[color:var(--secondary-2)] relative font-[number:var(--title-16px-medium-font-weight)] whitespace-nowrap leading-[var(--title-16px-medium-line-height)]">
                    {[
                      "cart-with-colour-chose",
                      "cart-with-no-discount",
                      "kids-car-with-color-choosing",
                      "product-5",
                    ].includes(product) && <>$960</>}

                    {product === "soccer-boat-color-choosing" && <>$1160</>}

                    {["gaming-control-color-choosing", "man-jacket-color-choosing"].includes(product) && <>$660</>}

                    {product === "dslr-camera-no-discount" && <>$360</>}

                    {product === "dog-food-no-discount" && <>$100</>}

                    {product === "laptop-no-discount" && <>$700</>}

                    {product === "beauty-product-no-discount" && <>$500</>}
                  </div>
                )}
              </div>
              <div
                className={`relative ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "inline-flex"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "mt-[-1.00px]"
                    : ""
                } ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "items-start"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "text-[color:var(--button)]"
                    : ""
                } ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "flex-[0_0_auto]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "leading-[24px]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "[font-family:'Poppins',_Helvetica]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "w-fit"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "line-through"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "font-medium"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "whitespace-nowrap"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "text-[16px]"
                    : ""
                } ${
                  product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing"
                    ? "gap-[8px]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "tracking-[0]"
                    : ""
                } ${
                  product === "bestselling-coat" ||
                  product === "bestselling-cooling-fan" ||
                  product === "bestselling-guccibag" ||
                  product === "cart-hover" ||
                  product === "cart" ||
                  product === "just-for-your-cart-bag" ||
                  product === "wishlist-cart-with-discount"
                    ? "opacity-50"
                    : ""
                }`}
              >
                {[
                  "bestselling-guccibag",
                  "cart-hover",
                  "just-for-your-cart-bag",
                  "wishlist-cart-with-discount",
                ].includes(product) && <>$1160</>}

                {product === "bestselling-cooling-fan" && <>$170</>}

                {["bestselling-coat", "cart"].includes(product) && <>$360</>}

                {[
                  "cart-with-colour-chose",
                  "kids-car-with-color-choosing",
                  "laptop-no-discount",
                  "product-5",
                  "soccer-boat-color-choosing",
                ].includes(product) && (
                  <FiveStar className="!h-[unset] !flex-[0_0_auto] !relative !left-[unset] !w-[unset] !top-[unset]" />
                )}

                {["gaming-control-color-choosing", "man-jacket-color-choosing"].includes(product) && (
                  <div className="inline-flex items-start flex-[0_0_auto] relative">
                    <img
                      className="w-[14.5px] h-[14.3px] relative"
                      alt="Vector"
                      src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                    />
                    <img
                      className="w-[14.5px] h-[14.3px] relative"
                      alt="Vector"
                      src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                    />
                    <img
                      className="w-[14.5px] h-[14.3px] relative"
                      alt="Vector"
                      src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                    />
                    <img
                      className="w-[14.5px] h-[14.3px] relative"
                      alt="Vector"
                      src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                    />
                    <StarHalfFilled3 className="!relative !w-[20px] !h-[20px]" />
                  </div>
                )}

                {(product === "cart-with-colour-chose" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing") && (
                  <div
                    className={`[font-family:var(--title-14px-semibold-font-family)] mt-[-1.00px] tracking-[var(--title-14px-semibold-letter-spacing)] text-[length:var(--title-14px-semibold-font-size)] opacity-50  text-[color:var(--text-2)] h-[20px] font-[number:var(--title-14px-semibold-font-weight)] leading-[var(--title-14px-semibold-line-height)] whitespace-nowrap relative ${
                      product === "laptop-no-discount" ? "w-[40px]" : "w-[32px]"
                    }`}
                  >
                    {["cart-with-colour-chose", "kids-car-with-color-choosing", "product-5"].includes(product) && (
                      <>(65)</>
                    )}

                    {product === "soccer-boat-color-choosing" && <>(35)</>}

                    {product === "laptop-no-discount" && <>(325)</>}

                    {["gaming-control-color-choosing", "man-jacket-color-choosing"].includes(product) && <>(55)</>}
                  </div>
                )}

                {[
                  "beauty-product-no-discount",
                  "cart-with-no-discount",
                  "dog-food-no-discount",
                  "dslr-camera-no-discount",
                ].includes(product) && (
                  <>
                    <img
                      className="flex-[0_0_auto] relative"
                      alt="Four star"
                      src={
                        product === "dog-food-no-discount"
                          ? "https://c.animaapp.com/O77hChkP/img/three-star.svg"
                          : "https://c.animaapp.com/O77hChkP/img/four-star-2.svg"
                      }
                    />
                    <div
                      className={`[font-family:var(--title-14px-semibold-font-family)] mt-[-1.00px] tracking-[var(--title-14px-semibold-letter-spacing)] text-[length:var(--title-14px-semibold-font-size)] opacity-50  text-[color:var(--text-2)] h-[20px] font-[number:var(--title-14px-semibold-font-weight)] leading-[var(--title-14px-semibold-line-height)] whitespace-nowrap relative ${
                        product === "beauty-product-no-discount" ? "w-[40px]" : "w-[32px]"
                      }`}
                    >
                      {product === "cart-with-no-discount" && <>(65)</>}

                      {product === "dslr-camera-no-discount" && <>(95)</>}

                      {product === "dog-food-no-discount" && <>(35)</>}

                      {product === "beauty-product-no-discount" && <>(145)</>}
                    </div>
                  </>
                )}
              </div>
            </>
          )}

          {(product === "bestselling-bookself" ||
            product === "gamepad-wishlist" ||
            product === "jacket-with-wishlist" ||
            product === "just-for-your-cart-gamepad" ||
            product === "just-for-your-cart-keyboard" ||
            product === "just-for-your-cart-monitor" ||
            product === "wishlist-cart-with-no-discount") && (
            <div className="[font-family:var(--title-16px-medium-font-family)] w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)]  text-[color:var(--secondary-2)] relative font-[number:var(--title-16px-medium-font-weight)] whitespace-nowrap leading-[var(--title-16px-medium-line-height)]">
              {product === "just-for-your-cart-gamepad" && <>$560</>}

              {product === "just-for-your-cart-keyboard" && <>$200</>}

              {product === "just-for-your-cart-monitor" && <>$1160</>}

              {product === "bestselling-bookself" && <>$360</>}

              {product === "wishlist-cart-with-no-discount" && <>$1960</>}

              {product === "gamepad-wishlist" && <>$550</>}

              {product === "jacket-with-wishlist" && <>$750</>}
            </div>
          )}
        </div>
        {(product === "bestselling-bookself" ||
          product === "bestselling-coat" ||
          product === "bestselling-cooling-fan" ||
          product === "bestselling-guccibag" ||
          product === "cart-hover" ||
          product === "cart-with-colour-chose" ||
          product === "cart" ||
          product === "gaming-control-color-choosing" ||
          product === "just-for-your-cart-bag" ||
          product === "just-for-your-cart-gamepad" ||
          product === "just-for-your-cart-keyboard" ||
          product === "just-for-your-cart-monitor" ||
          product === "kids-car-with-color-choosing" ||
          product === "man-jacket-color-choosing" ||
          product === "product-5" ||
          product === "soccer-boat-color-choosing") && (
          <div className="inline-flex items-start gap-[8px] flex-[0_0_auto] relative">
            {(product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "cart-hover" ||
              product === "cart" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "just-for-your-cart-keyboard" ||
              product === "just-for-your-cart-monitor") && (
              <>
                <FiveStar className="!h-[unset] !flex-[0_0_auto] !relative !left-[unset] !w-[unset] !top-[unset]" />
                <div className="[font-family:var(--title-14px-semibold-font-family)] w-[32px] mt-[-1.00px] tracking-[var(--title-14px-semibold-letter-spacing)] text-[length:var(--title-14px-semibold-font-size)] opacity-50  text-[color:var(--text-2)] h-[20px] font-[number:var(--title-14px-semibold-font-weight)] leading-[var(--title-14px-semibold-line-height)] whitespace-nowrap relative">
                  (65)
                </div>
              </>
            )}

            {(product === "bestselling-cooling-fan" ||
              product === "bestselling-guccibag" ||
              product === "cart-with-colour-chose" ||
              product === "gaming-control-color-choosing" ||
              product === "kids-car-with-color-choosing" ||
              product === "man-jacket-color-choosing" ||
              product === "product-5" ||
              product === "soccer-boat-color-choosing") && (
              <>
                <div
                  className={`relative ${
                    [
                      "cart-with-colour-chose",
                      "gaming-control-color-choosing",
                      "kids-car-with-color-choosing",
                      "man-jacket-color-choosing",
                      "product-5",
                      "soccer-boat-color-choosing",
                    ].includes(product)
                      ? "w-[20px]"
                      : ""
                  } ${["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "inline-flex" : ""} ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "items-start" : ""
                  } ${["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "flex-[0_0_auto]" : ""} ${
                    [
                      "cart-with-colour-chose",
                      "gaming-control-color-choosing",
                      "kids-car-with-color-choosing",
                      "man-jacket-color-choosing",
                      "product-5",
                      "soccer-boat-color-choosing",
                    ].includes(product)
                      ? "h-[20px]"
                      : ""
                  }`}
                >
                  {["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) && (
                    <>
                      <img
                        className="w-[14.5px] h-[14.3px] relative"
                        alt="Vector"
                        src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                      />
                      <img
                        className="w-[14.5px] h-[14.3px] relative"
                        alt="Vector"
                        src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                      />
                      <img
                        className="w-[14.5px] h-[14.3px] relative"
                        alt="Vector"
                        src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                      />
                      <img
                        className="w-[14.5px] h-[14.3px] relative"
                        alt="Vector"
                        src="https://c.animaapp.com/O77hChkP/img/vector-15.svg"
                      />
                      <StarHalfFilled3 className="!relative !w-[20px] !h-[20px]" />
                    </>
                  )}

                  {[
                    "cart-with-colour-chose",
                    "gaming-control-color-choosing",
                    "kids-car-with-color-choosing",
                    "man-jacket-color-choosing",
                    "product-5",
                    "soccer-boat-color-choosing",
                  ].includes(product) && (
                    <div className="h-[20px] rounded-[10px] relative">
                      <div
                        className={`w-[12px] left-[4px] top-[4px] h-[12px] rounded-[6px] absolute ${
                          product === "kids-car-with-color-choosing"
                            ? "bg-[#fa1214]"
                            : product === "soccer-boat-color-choosing"
                            ? "bg-[#eeff61]"
                            : product === "gaming-control-color-choosing"
                            ? "bg-[color:var(--text-2)]"
                            : product === "man-jacket-color-choosing"
                            ? "bg-[#184947]"
                            : "bg-[#a0bce0]"
                        }`}
                      />
                      <div className="border-2 border-solid border-[color:var(--text-2)] w-[20px] left-0 top-0 h-[20px] rounded-[10px] absolute" />
                    </div>
                  )}
                </div>
                <div
                  className={`h-[20px] relative ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product)
                      ? "[font-family:var(--title-14px-semibold-font-family)]"
                      : ""
                  } ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "w-[32px]" : "w-[20px]"
                  } ${["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "mt-[-1.00px]" : ""} ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product)
                      ? "tracking-[var(--title-14px-semibold-letter-spacing)]"
                      : ""
                  } ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product)
                      ? "text-[length:var(--title-14px-semibold-font-size)]"
                      : ""
                  } ${["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "opacity-50" : ""} ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "" : ""
                  } ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product)
                      ? "text-[color:var(--text-2)]"
                      : ""
                  } ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product)
                      ? "font-[number:var(--title-14px-semibold-font-weight)]"
                      : ""
                  } ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product)
                      ? "leading-[var(--title-14px-semibold-line-height)]"
                      : ""
                  } ${
                    ["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) ? "whitespace-nowrap" : ""
                  } ${
                    [
                      "cart-with-colour-chose",
                      "gaming-control-color-choosing",
                      "kids-car-with-color-choosing",
                      "man-jacket-color-choosing",
                      "product-5",
                      "soccer-boat-color-choosing",
                    ].includes(product)
                      ? "rounded-[10px]"
                      : ""
                  } ${
                    ["cart-with-colour-chose", "product-5"].includes(product)
                      ? "bg-[color:var(--hover-button)]"
                      : product === "kids-car-with-color-choosing"
                      ? "bg-[color:var(--text-2)]"
                      : [
                          "gaming-control-color-choosing",
                          "man-jacket-color-choosing",
                          "soccer-boat-color-choosing",
                        ].includes(product)
                      ? "bg-[color:var(--secondary-2)]"
                      : ""
                  }`}
                >
                  {["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) && <>(65)</>}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
