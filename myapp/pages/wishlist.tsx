import React from "react";
import { Wishlist } from "../components/Wishlist";
const wishlist: React.FC = () => (
  <Wishlist override={{ resize: "both", overflow: "hidden" }} />
);

export default wishlist;
