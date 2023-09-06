import React from "react";
import {Home} from "../components/Home"
const home: React.FC = () => (
  <Home override={{ resize: "both", overflow: "hidden" }} />
);

export default home;
