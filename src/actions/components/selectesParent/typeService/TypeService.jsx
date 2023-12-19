import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/type-service.css";
import FooterButtons from "../footerButtons/FooterButtons";

const rentTypes = ["سنويا", "شهريا", "أسبوعيا", "يوميا", "الجميع"];

const TypeService = () => {
  const [openTypeService, setOpenTypeService] = useState(false);
  const [openRent, setOpenRent] = useState(false);
  const [selectRent, setSelectRent] = useState(1);

  const typeServiceRef = useRef();
  const selectRentRef = useRef();

  const handleSelectRent = (item, index) => {
    setSelectRent(index);
  };
  useEffect(() => {
    const handleMousedownEvent = (e) => {
      if (
        typeServiceRef.current &&
        !typeServiceRef.current.contains(e.target) &&
        !e.target.closest(".dropdown-type-service")
      ) {
        setOpenTypeService(false);
      }
    };
    document.addEventListener("mousedown", handleMousedownEvent);
    return () => {
      document.removeEventListener("mousedown", handleMousedownEvent);
    };
  }, []);
  const handleOpenTypeService = () => {
    setOpenTypeService(!openTypeService);
  };
  const handleOpenRent = () => {
    setOpenRent(!openRent);
  };
  return (
    <>
      <div
        onClick={handleOpenTypeService}
        ref={typeServiceRef}
        className="select-container col-lg-3 bg-light rounded d-flex align-items-center justify-content-between"
      >
        <span>للبيع</span>
        {openTypeService ? (
          <FontAwesomeIcon
            icon={faSortUp}
            className="h5"
            style={{ transform: "translateY(10px)" }}
          />
        ) : (
          <FontAwesomeIcon icon={faSortDown} className="h5" />
        )}
      </div>
      {openTypeService && (
        <div className="dropdown-type-service rounded">
          <h6 className="my-2">نوع العرض</h6>
          <div className="d-flex justify-content-around container border rounded p-1 my-3">
            <div>
              <button
                className={!openRent ? "active" : "title-type-service"}
                onClick={() => {
                  setOpenRent(false);
                }}
              >
                للبيع
              </button>
            </div>
            <div>
              <button
                className={openRent ? "active" : "title-type-service"}
                onClick={() => {
                  setOpenRent(true);
                }}
              >
                للايجار
              </button>
            </div>
          </div>
          {openRent && (
            <div>
              <h6 className="my-2">مدة الايجار</h6>
              <div className="types-rent-container">
                {rentTypes.map((type, index) => {
                  return (
                    <span
                      key={index}
                      ref={selectRentRef}
                      onClick={() => handleSelectRent(type, index)}
                      className={`${
                        index === selectRent ? "rent-active" : "type-rent"
                      }`}
                    >
                      {type}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
          <FooterButtons />
        </div>
      )}
    </>
  );
};

export default TypeService;
