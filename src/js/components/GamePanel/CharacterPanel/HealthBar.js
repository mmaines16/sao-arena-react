import React from "react";
import ReactDOM from "react-dom";

export default class HealthBar extends React.Component {
  constructor() {
    super();

    this.state = {
      percent: 100,
    };
  }

  componentWillReceiveProps(newProps) {
    if(this.props.percent !== newProps.percent && newProps.percent) {
      console.log("props changed in healthbar");
      var percentBar = ReactDOM.findDOMNode(this).getElementsByClassName('health-bar-percent')[0];
      percentBar.style.width = newProps.percent + "%";
      // console.log(this.props.percent);
      // console.log(newProps.percent);
      //
      // if(parseInt(this.props.percent) > parseInt(newProps.percent)) {
      //   this.setState({percent: this.state.percent-1,});
      //
      // }

      if(parseInt(newProps.percent) < 60 && parseInt(newProps.percent) >= 30) {
        percentBar.style.backgroundColor = "yellow";
        console.log("Yellow");
      }
      else if(parseInt(newProps.percent) < 30) {
        percentBar.style.backgroundColor = "red";
        console.log("Red");
      }
      else {
        percentBar.style.backgroundColor = "#4CAF50";
      }

    }
  }

  render() {
    return (
      <div class="health-bar">
        <div class="health-bar-percent">
          <div class="health-bar-label">
            {this.props.percent + "%"}
          </div>
        </div>
      </div>
    );
  }
}
