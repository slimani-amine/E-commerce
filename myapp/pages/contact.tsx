import React from "react";
import {Contact} from "../components/Contact"
const contact: React.FC = () => (
  <Contact override={{ resize: "both", overflow: "hidden" }} />
);

export default contact;
