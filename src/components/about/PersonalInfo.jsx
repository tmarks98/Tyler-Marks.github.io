import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Tyler" },
  { meta: "last name", metaInfo: "Marks" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "American" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Location", metaInfo: "Cape Coral, Florida" },
  { meta: "phone", metaInfo: "+14345695300" },
  { meta: "Email", metaInfo: "tyleramarks@gmail.com" },
  { meta: "Github username", metaInfo: "tmarks98" },
  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
