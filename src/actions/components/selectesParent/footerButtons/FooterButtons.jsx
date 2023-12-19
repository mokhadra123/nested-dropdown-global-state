import React from "react";
// css files
import "../../../styles/footer-buttons.css";
const FooterButtons = () => {
  return (
    <div
      className="
    d-flex justify-content-between container border rounded p-2 my-3 "
    >
      <button className="reset-button">اعادة الضبط</button>
      <button className="done-button">تم</button>
    </div>
  );
};

export default FooterButtons;
