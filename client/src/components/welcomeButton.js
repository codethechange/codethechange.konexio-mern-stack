import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/welcomeButton.scss";

export class WelcomeButton extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="button-container">
          <div className="mentor-container">
            <Link to="/signup-mentor">
              <button className="mentor-button">
                <span className="mentor-button-text">I am a mentor</span>
              </button>
            </Link>
          </div>
          <div className="mentee-container">
            <Link to="/signup-mentee">
              <button className="mentee-button">
                <span className="mentee-button-text">
                  I am looking for a mentor
                </span>
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
