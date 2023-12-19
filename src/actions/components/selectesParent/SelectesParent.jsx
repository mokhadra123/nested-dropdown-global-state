import React from "react";
import TypeService from "./typeService/TypeService";

// css style
import "../../styles/selects-parent.css";
import SearchBar from "./searchBar/SearchBar";
import HousingType from "./housingType/HousingType";
const SelectesParent = () => {
  return (
    <div className="selects-parent-container container ">
      <div className="my-3 row px-3">
        <TypeService />
        <SearchBar />
        <HousingType />
      </div>
    </div>
  );
};

export default SelectesParent;
