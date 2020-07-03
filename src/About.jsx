import React from "react";
import { UndrawInstantSupport } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container" style={{marginTop: "150px"}}>
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawInstantSupport primaryColor="#12283a" height="200px" />
        </div>
        <div className="column" style={{width: "400px", textAlign: "justify"}}>
          <h1 id="about-header" className="ui header">
            About Me
          </h1>
          <p>
            I'm Erik Björn, a calm, curious person always striving 
            for high quality (that's why this portfolio is going to be remade). 
            I’m a full stack web developer, newly graduated from the Craft 
            Academy bootcamp with a certificate of excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
