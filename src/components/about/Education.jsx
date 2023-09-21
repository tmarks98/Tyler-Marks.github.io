import React from "react";

const educationContent = [
  {
    year: "2022-2023",
    degree: "Full Stack Software Engineer",
    institute: "App Academy",
    details: `Through a comprehensive fullstack curriculum, they train you to build web applications with Flask, JavaScript, React/Redux, SQL, and HTML/CSS. To help you tackle interviews after you graduate, data structures and algorithms are also taught throughout the course.`,
  },
  {
    year: "2012-2016",
    degree: "Advanced High School Diploma",
    institute: "Fluvanna High",
    details: `Fluvanna County High School`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
