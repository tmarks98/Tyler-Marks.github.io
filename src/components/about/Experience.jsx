import React from "react";

const experienceContent = [
  {
    year: "2021 - 2022",
    position: "Cook",
    compnayName: "Lobster Lady",
    details: `Cooked various types of seafood from steaming lobsters and crabs to searing steak and fresh caught tuna`,
  },
  {
    year: "2017 - 2021",
    position: "Tile setter & store manager",
    compnayName: "Walton Tile",
    details: `Managed multiple online accounts including the intuit quickbooks account, business email, as well as the facebook and business website. `,
  },
  {
    year: "2018 - 2019",
    position: "Irrigation specialists",
    compnayName: "Blue Ridge Irrigation",
    details: `Drove out to homes or places of business to upkeep and do monthly checkups on already installed irrigation. Also installed new irrigation at homes, baseball fields, and private schools`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
