import React, { useState } from "react";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css files
import "../../../styles/housing-type.css";
import FooterButtons from "../footerButtons/FooterButtons";
// data

const housingList = [
  "شقه",
  "تاون هاوس",
  "فيلا",
  "توين هاوس",
  "دوبلكس",
  "غرفه",
  "بلتهاوس",
  "عقارات سكنيه أخري",
  "شاليه",
];
const commercialList = [
  "مكتب",
  "مطعم وكافيه",
  "مجمع تجاري",
  "محلات تجاريه",
  "مستودع",
  "عقارات تجاريه اخري ",
  "عياده ",
  "راعي ",
  "مصنع",
  "صناعي",
  "جراج",
];
const HousingType = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [housing, setHousing] = useState(true);
  const HandleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="hi col-lg-3 bg-light rounded  ">
      <div
        className="housing-type mt-1 d-flex align-items-center justify-content-between "
        onClick={HandleDropdown}
      >
        <span>نوع السكن</span>
        {isDropdownOpen ? (
          <FontAwesomeIcon
            icon={faSortUp}
            className="h5"
            style={{ transform: "translateY(10px)" }}
          />
        ) : (
          <FontAwesomeIcon icon={faSortDown} className="h5" />
        )}
      </div>
      {isDropdownOpen && (
        <div className=" dropdown-housing-type rounded">
          <div className="header-housing-type d-flex align-items-center justify-content-around border-bottom ">
            <h6 className="">سكني</h6>
            <h6 className="">تجاري</h6>
          </div>
          <div className="housing-select-container">
            {housingList.map((house) => {
              return <span className="housing-select">{house}</span>;
            })}
          </div>
          <FooterButtons />
        </div>
      )}
    </div>
  );
};

export default HousingType;
