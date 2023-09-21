import React from "react";

const skillsContent = [
  { skillClass: "p92", skillPercent: "92", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p71", skillPercent: "71", skillName: "CSS" },
  { skillClass: "p84", skillPercent: "84", skillName: "PYTHON" },
  { skillClass: "p82", skillPercent: "82", skillName: "FLASK" },
  { skillClass: "p93", skillPercent: "93", skillName: "NODE" },
  { skillClass: "p65", skillPercent: "65", skillName: "EXPRESS" },
  { skillClass: "p62", skillPercent: "62", skillName: "SQL" },
  { skillClass: "p78", skillPercent: "78", skillName: "REACT" },
  { skillClass: "p73", skillPercent: "73", skillName: "REDUX" },
  { skillClass: "p35", skillPercent: "35", skillName: "TYPESCRIPT" },
  { skillClass: "p67", skillPercent: "67", skillName: "MARKDOWN" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
