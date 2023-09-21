import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Address() {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-user-circle position-absolute"></i>
        <span className="d-block">Discord</span>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:steve@mail.com">steve@mail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +216 21 184 010">+216 21 184 010</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
