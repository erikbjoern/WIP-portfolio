import React, { Component } from "react";
import axios from "axios";
import CvCard from "./CvCard";

class CV extends Component {
  state = {
    cvItems: [],
  };

  render() {
    const cvItems = this.state.cvItems;
    let workItemsList;
    let educationItemsList;

    if (cvItems.length > 0) {
      educationItemsList = cvItems.slice(0, 2).map((cvItem) => {
        return (
          <div className="ui card" id={`cvItem-${cvItem.id}`} key={cvItem.id}>
            <CvCard cvItem={cvItem} />
          </div>
        );
      });
      workItemsList = cvItems.slice(2, 5).map((cvItem) => {
        return (
          <div className="ui card" id={`cvItem-${cvItem.id}`} key={cvItem.id}>
            <CvCard cvItem={cvItem} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container" style={{ paddingBottom: "100px" }}>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <div
              id="education-header"
              className="ui header"
              style={{ fontSize: "200%", padding: "20px" }}
            >
              Education
            </div>
            <div className="ui stackable two column grid cards">
              {educationItemsList}
            </div>
          </div>
          <div className="two wide column"></div>
          <div className="twelve wide column">
            <div
              id="work-header"
              className="ui header"
              style={{ fontSize: "200%", padding: "20px" }}
            >
              Work experience
            </div>
            <div className="ui stackable three column grid cards">
              {workItemsList}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get("./src/data/cvItems.json").then((response) => {
      this.setState({
        cvItems: response.data,
      });
    });
  }
}

export default CV;
