import React from "react";
import { Dropdown } from "../components/DropDown";
const dropdown: React.FC = () => (
  <Dropdown override={{ resize: "both", overflow: "hidden" }} />
);

export default dropdown;
