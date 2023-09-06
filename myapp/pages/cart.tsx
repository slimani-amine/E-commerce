import React from "react";
import {Cart} from "../components/Cart"
const cart: React.FC = () => (
  <Cart override={{ resize: "both", overflow: "hidden" }} />
);

export default cart;
