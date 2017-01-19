import React from "react";
import ReactDOM from "react-dom";

export default class HealthBar extends React.Component {
  constructor() {
    super();

    this.state = {
      percent: 100,
    };
  }

  changeHealth = (component, amount) =>{
  var elem = ReactDOM.findDOMNode(this).getElementsByClassName("health-bar-percent")[0];
  var label = ReactDOM.findDOMNode(elem).getElementsByClassName("health-bar-label")[0];
  var width = Number(elem.style.width.replace(/[^\d\.\-]/g, ''));
  var id = setInterval(frame, 20);
  console.log(amount);


  function frame() {
    if (width == amount) {
      clearInterval(id);
      console.log("width == amount");
    }
    else {

      if(width > amount)
      {
          console.log("width > amount: " + width + " > " + amount);
          width--;
          elem.style.width = width + '%';
          label.innerHTML = width * 1  +     '%';  }
      else
      {
          width++;
          elem.style.width = width + '%';
          label.innerHTML = width * 1  +     '%';
      }

  	  if(width < 31)
  	  {

  		elem.style.backgroundColor = "#ff0000";
  	  }
  	  else if(width < 80)
  	  {
  		elem.style.backgroundColor = "#ffff00";
  	  }
  	  else
  	  {
  		elem.style.backgroundColor = "#4CAF50";
  	  }

    }
  }
}
  componentDidMount() {
    this.changeHealth(this, 100);
  };

  componentWillReceiveProps(newProps) {
    if(this.props.percent !== newProps.percent && newProps.percent) {
      console.log("props changed in healthbar");
      var percentBar = ReactDOM.findDOMNode(this).getElementsByClassName('health-bar-percent')[0];
       this.changeHealth(this, newProps.percent);
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
