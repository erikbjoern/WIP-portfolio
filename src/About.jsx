import React from "react";
import { UndrawByMyCar } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawByMyCar primaryColor="#12283a" height="200px" />
        </div>
        <div className="column">
          <h1 id="about-header" className="ui header">
            About Me
          </h1>
          <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi
            dolorum molestias?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
