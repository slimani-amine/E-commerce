import React from "react";
import {Error} from "../components/Error"

const er404: React.FC = () => (
  <Error override={{ resize: "both", overflow: "hidden" }} />
);

export default er404;
