import React from "react";
import {About} from "../components/About"
const about: React.FC = () => (
  <About override={{ resize: "both", overflow: "hidden" }} />
);

export default about;
