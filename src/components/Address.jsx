import React from "react";

function Address() {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-user-circle position-absolute"></i>
        <span className="d-block">Discord Username</span>
        <p>tylermarks</p>
      </p>
      {/* End .custom-span-contact */ }

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:tyleramarks@mail.com">tyleramarks@mail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +14345695300">+1 434 569 5300</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
